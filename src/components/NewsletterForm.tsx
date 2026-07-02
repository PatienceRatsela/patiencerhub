import { ArrowRight } from "lucide-react";
import { useState } from "react";

export function NewsletterForm({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "ok">("idle");
  const dark = variant === "dark";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!email) return;
        setStatus("ok");
        setEmail("");
      }}
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
        className={`min-w-0 flex-1 bg-transparent px-4 py-2 text-sm outline-none placeholder:opacity-50 ${
          dark ? "text-cream" : "text-ink"
        }`}
      />
      <button
        type="submit"
        className="inline-flex items-center gap-1.5 rounded-full bg-gold px-4 py-2 text-sm font-medium text-ink transition-transform hover:scale-[1.02]"
      >
        {status === "ok" ? "Thanks!" : "Subscribe"}
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}
