import type { ImageMetadata } from 'astro';

const modules = import.meta.glob<{ default: ImageMetadata }>('./*.jpg', { eager: true });

const bySeed: Record<string, ImageMetadata> = {};
for (const [path, mod] of Object.entries(modules)) {
  const seed = path.replace(/^\.\//, '').replace(/\.jpg$/, '');
  bySeed[seed] = mod.default;
}

export function getProjectImage(seedOrUrl: string): ImageMetadata {
  const m = seedOrUrl.match(/picsum\.photos\/seed\/([^/?#]+)/);
  const seed = m ? m[1] : seedOrUrl;
  const img = bySeed[seed];
  if (!img) {
    throw new Error(`No local image for seed "${seed}" — drop a JPG into src/assets/projects/${seed}.jpg`);
  }
  return img;
}

export { bySeed };
