import { ArrowRight, Loader2 } from "lucide-react";
import { useState } from "react";

export function NewsletterForm({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [message, setMessage] = useState("");
  const dark = variant === "dark";

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || status === "loading") return;
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Try again.");
        return;
      }
      setStatus("ok");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Network error. Try again.");
    }
  }

  return (
    <div className="w-full">
      <form
        onSubmit={onSubmit}
        className={`flex w-full items-center gap-2 rounded-full border p-1.5 ${
          dark ? "border-cream/20 bg-ink/60" : "border-ink/15 bg-cream"
        }`}
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          disabled={status === "loading"}
          className={`min-w-0 flex-1 bg-transparent px-4 py-2 text-sm outline-none placeholder:opacity-50 disabled:opacity-60 ${
            dark ? "text-cream" : "text-ink"
          }`}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center gap-1.5 rounded-full bg-gold px-4 py-2 text-sm font-medium text-ink transition-transform hover:scale-[1.02] disabled:opacity-70"
        >
          {status === "loading" ? (
            <>
              Sending
              <Loader2 className="h-4 w-4 animate-spin" />
            </>
          ) : status === "ok" ? (
            "Thanks!"
          ) : (
            <>
              Subscribe
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </form>
      {status === "ok" && (
        <p className={`mt-2 text-xs ${dark ? "text-cream/70" : "text-ink/70"}`}>
          You're on the list — check your inbox.
        </p>
      )}
      {status === "error" && message && (
        <p className="mt-2 text-xs text-red-400">{message}</p>
      )}
    </div>
  );
}
