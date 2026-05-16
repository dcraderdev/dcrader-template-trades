/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // ── V1 Classic Trust (navy/orange) ────────────────────────────────
        navy: {
          950: '#060d1c',
          900: '#091629',
          800: '#0c1d38',
          700: '#0f2855',
          600: '#143266',
          500: '#1a3e7a',
        },

        // ── V2 Modern Tech (dark/teal) ────────────────────────────────────
        tech: {
          950: '#04080f',
          900: '#080e1a',
          800: '#0d1527',
          700: '#111e3a',
          teal: '#2dd4bf',
          'teal-dim': '#0f766e',
          blue: '#3b82f6',
        },

        // ── V3 Family Warm (cream/green) ──────────────────────────────────
        warm: {
          cream: '#fef8f0',
          parchment: '#f5ead8',
          green: '#2d5a27',
          'green-light': '#4a7c3f',
          terra: '#c4622d',
          brown: '#2c2318',
          'brown-light': '#8b7355',
        },

        // ── V4 Emergency Bold (black/red) ─────────────────────────────────
        emergency: {
          black: '#080808',
          'gray-dark': '#111111',
          gray: '#1a1a1a',
          red: '#ef4444',
          'red-dark': '#dc2626',
          'red-bright': '#f87171',
        },

        // ── V5 Luxury Trade (sage/gold/cream) ─────────────────────────────
        luxury: {
          cream: '#faf8f5',
          parchment: '#f0ece4',
          sage: '#4a7c59',
          'sage-light': '#6aad7a',
          'sage-dark': '#2d5a3a',
          gold: '#c9a96e',
          'gold-light': '#e8ccaa',
          dark: '#1c2522',
          charcoal: '#2c2c2c',
        },
      },

      fontFamily: {
        // V1
        display: ['"Barlow Condensed"', 'sans-serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
        // V2
        sora: ['Sora', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        // V3
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        nunito: ['"Nunito Sans"', 'system-ui', 'sans-serif'],
        // V4
        anton: ['Anton', 'Impact', 'sans-serif'],
        // V5
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        outfit: ['Outfit', 'system-ui', 'sans-serif'],
      },

      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'pulse-fast': 'pulse 1s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'glow': 'glow 2s ease-in-out infinite',
        'ring-pulse': 'ringPulse 2s ease-out infinite',
      },

      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 8px rgba(45,212,191,0.4)' },
          '50%': { boxShadow: '0 0 24px rgba(45,212,191,0.8)' },
        },
        ringPulse: {
          '0%': { boxShadow: '0 0 0 0 rgba(239,68,68,0.7)' },
          '70%': { boxShadow: '0 0 0 20px rgba(239,68,68,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(239,68,68,0)' },
        },
      },
    },
  },
  plugins: [],
};
