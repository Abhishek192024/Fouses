"use client";

import { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Github, KeyRound, Mail, ShieldCheck, X } from "lucide-react";

const AUTH_EVENT = "fouses:open-auth";

export function openAuthModal() {
  window.dispatchEvent(new Event(AUTH_EVENT));
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06 0.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06L5.84 9.9C6.71 7.3 9.14 5.38 12 5.38z" />
    </svg>
  );
}

export function AuthModal() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const handleOpen = () => setOpen(true);
    window.addEventListener(AUTH_EVENT, handleOpen);
    return () => window.removeEventListener(AUTH_EVENT, handleOpen);
  }, []);

  const submitEmail = (mode: "login" | "signup") => {
    if (!email) return;
    signIn("email", { email, callbackUrl: "/", mode });
  };

  return (
    <AnimatePresence>
      {open ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <motion.button
            aria-label="Close authentication modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/78 backdrop-blur-2xl"
            onClick={() => setOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, y: 22, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="animated-border animate-border-spin relative w-full max-w-md overflow-hidden rounded-[30px] p-px shadow-2xl shadow-black/70"
            role="dialog"
            aria-modal="true"
            aria-labelledby="auth-title"
          >
            <div className="relative overflow-hidden rounded-[29px] border border-white/12 bg-[#09090b]/82 p-6 backdrop-blur-2xl">
              <div className="absolute -left-20 top-16 h-44 w-44 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-fouses-red/35 blur-3xl" />
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />

              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs text-white/62">
                    <ShieldCheck className="h-3.5 w-3.5 text-fouses-red" />
                    Secure agency portal
                  </div>
                  <h2 id="auth-title" className="text-3xl font-semibold tracking-tight">
                    Access Fouses
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-white/52">
                    Use a verified provider or receive a private magic link at your work email.
                  </p>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-white/10 bg-white/[0.04] p-2 text-white/70 transition hover:bg-white/10 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="relative mt-8 space-y-3">
                <button
                  onClick={() => signIn("google", { callbackUrl: "/" })}
                  className="flex h-14 w-full items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white text-sm font-semibold text-black shadow-[0_16px_45px_rgba(255,255,255,0.12)] transition hover:scale-[1.01] hover:shadow-[0_18px_55px_rgba(206,0,0,0.22)]"
                >
                  <GoogleIcon />
                  Continue with Google
                </button>
                <button
                  onClick={() => signIn("github", { callbackUrl: "/" })}
                  className="flex h-14 w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.07] text-sm font-semibold text-white transition hover:border-white/18 hover:bg-white/[0.11]"
                >
                  <Github className="h-5 w-5" />
                  Continue with GitHub
                </button>
              </div>

              <div className="my-6 flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-white/34">
                <span className="h-px flex-1 bg-white/10" />
                email access
                <span className="h-px flex-1 bg-white/10" />
              </div>

              <div className="relative space-y-3">
                <label className="sr-only" htmlFor="auth-email">
                  Work email
                </label>
                <div className="flex h-[52px] items-center gap-3 rounded-2xl border border-white/10 bg-black/38 px-4 focus-within:border-fouses-red/70 focus-within:ring-4 focus-within:ring-fouses-red/15">
                  <Mail className="h-4 w-4 text-white/34" />
                  <input
                    id="auth-email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    type="email"
                    placeholder="work@email.com"
                    className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/28"
                  />
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <button
                    onClick={() => submitEmail("login")}
                    className="flex h-[50px] items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.065] px-4 text-sm font-medium text-white transition hover:border-fouses-red/50 hover:bg-fouses-red/15"
                  >
                    Email Login
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => submitEmail("signup")}
                    className="flex h-[50px] items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.065] px-4 text-sm font-medium text-white transition hover:border-fouses-red/50 hover:bg-fouses-red/15"
                  >
                    Email Signup
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
                <a
                  href="mailto:support@fouses.com?subject=Fouses%20password%20access"
                  className="inline-flex items-center gap-2 text-sm text-white/48 transition hover:text-white"
                >
                  <KeyRound className="h-4 w-4 text-fouses-red" />
                  Forgot Password
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
