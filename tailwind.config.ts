import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        fouses: {
          red: "#ce0000",
          ink: "#050505",
          panel: "#0b0b0d"
        }
      },
      fontFamily: {
        sans: ["var(--font-geist)", "Inter", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 80px rgba(206, 0, 0, 0.28)",
        "glow-sm": "0 0 28px rgba(206, 0, 0, 0.34)"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        borderSpin: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.28", transform: "scale(1)" },
          "50%": { opacity: "0.48", transform: "scale(1.05)" }
        }
      },
      animation: {
        marquee: "marquee 24s linear infinite",
        "border-spin": "borderSpin 3s linear infinite",
        "pulse-glow": "pulseGlow 7s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
