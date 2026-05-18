// Build public/og-image.png (1200x630) from an inline SVG.
// Brand: peek tailwind navy/orange (V1 palette is a strong default).
import sharp from 'sharp';
import { writeFile, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const out = resolve(here, '..', 'public', 'og-image.png');

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#091629"/>
      <stop offset="55%" stop-color="#0f2855"/>
      <stop offset="100%" stop-color="#143266"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.85" cy="0.1" r="0.6">
      <stop offset="0%" stop-color="#f97316" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#f97316" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>

  <!-- Top accent bar -->
  <rect x="0" y="0" width="1200" height="6" fill="#f97316"/>

  <!-- Eyebrow -->
  <g transform="translate(80,140)">
    <rect x="0" y="0" width="14" height="14" fill="#f97316"/>
    <text x="28" y="13"
      font-family="'Helvetica Neue', Helvetica, Arial, sans-serif"
      font-size="20" font-weight="700"
      fill="#fb923c" letter-spacing="4">
      DCRADER / TRADE TEMPLATES
    </text>
  </g>

  <!-- Title -->
  <text x="80" y="285"
    font-family="'Helvetica Neue', Helvetica, Arial, sans-serif"
    font-size="92" font-weight="800"
    fill="#ffffff" letter-spacing="-1">
    Trades Template
  </text>
  <text x="80" y="385"
    font-family="'Helvetica Neue', Helvetica, Arial, sans-serif"
    font-size="92" font-weight="800"
    fill="#ffffff" letter-spacing="-1">
    Collection
  </text>

  <!-- Subtitle -->
  <text x="80" y="455"
    font-family="'Helvetica Neue', Helvetica, Arial, sans-serif"
    font-size="30" font-weight="400"
    fill="#cbd5e1">
    Modern websites for trade services
  </text>

  <!-- Bottom divider -->
  <line x1="80" y1="535" x2="1120" y2="535" stroke="#ffffff" stroke-opacity="0.12" stroke-width="1"/>

  <!-- Corner attribution -->
  <text x="80" y="575"
    font-family="'Helvetica Neue', Helvetica, Arial, sans-serif"
    font-size="22" font-weight="600"
    fill="#94a3b8" letter-spacing="2">
    dcrader.dev
  </text>

  <!-- Right side: 5 swatches representing the variants -->
  <g transform="translate(820,540)">
    <rect x="0"   y="0" width="48" height="48" fill="#0f2855" stroke="#ffffff" stroke-opacity="0.18"/>
    <rect x="56"  y="0" width="48" height="48" fill="#2dd4bf" stroke="#ffffff" stroke-opacity="0.18"/>
    <rect x="112" y="0" width="48" height="48" fill="#c4622d" stroke="#ffffff" stroke-opacity="0.18"/>
    <rect x="168" y="0" width="48" height="48" fill="#ef4444" stroke="#ffffff" stroke-opacity="0.18"/>
    <rect x="224" y="0" width="48" height="48" fill="#c9a96e" stroke="#ffffff" stroke-opacity="0.18"/>
  </g>
</svg>`;

await mkdir(dirname(out), { recursive: true });
await sharp(Buffer.from(svg))
  .png({ compressionLevel: 9 })
  .toFile(out);
console.log('Wrote', out);
