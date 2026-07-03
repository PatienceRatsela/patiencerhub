import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const schema = z.object({
  email: z.string().trim().email().max(255),
});

const GATEWAY_URL = "https://connector-gateway.lovable.dev/resend";
const NOTIFY_TO = "hello@patiencer.com";
const FROM = "Patience R. <onboarding@resend.dev>";

export const Route = createFileRoute("/api/newsletter")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const lovableKey = process.env.LOVABLE_API_KEY;
        const resendKey = process.env.RESEND_API_KEY;
        if (!lovableKey || !resendKey) {
          return Response.json(
            { error: "Email service not configured" },
            { status: 500 },
          );
        }

        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return Response.json({ error: "Invalid JSON" }, { status: 400 });
        }
        const parsed = schema.safeParse(body);
        if (!parsed.success) {
          return Response.json(
            { error: "Please enter a valid email address" },
            { status: 400 },
          );
        }
        const { email } = parsed.data;

        const headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${lovableKey}`,
          "X-Connection-Api-Key": resendKey,
        };

        // Notify site owner
        const notify = await fetch(`${GATEWAY_URL}/emails`, {
          method: "POST",
          headers,
          body: JSON.stringify({
            from: FROM,
            to: [NOTIFY_TO],
            reply_to: email,
            subject: `New newsletter signup: ${email}`,
            html: `<p>New newsletter subscriber:</p><p><strong>${email}</strong></p>`,
          }),
        });

        if (!notify.ok) {
          const text = await notify.text();
          console.error("Resend notify failed", notify.status, text);
          return Response.json(
            { error: "Could not subscribe right now" },
            { status: 502 },
          );
        }

        // Welcome email to subscriber
        await fetch(`${GATEWAY_URL}/emails`, {
          method: "POST",
          headers,
          body: JSON.stringify({
            from: FROM,
            to: [email],
            subject: "Welcome — you're on the list ✨",
            html: `<p>Hi there,</p>
<p>Thanks for subscribing to updates from Patience R. You'll get tools, resources, and inspiration straight to your inbox.</p>
<p>— Patience</p>`,
          }),
        });

        return Response.json({ ok: true });
      },
    },
  },
});
