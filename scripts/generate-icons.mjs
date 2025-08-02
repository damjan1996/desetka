import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const SOURCE_IMAGE = path.join(PUBLIC_DIR, 'logo.svg');

async function generateIcons() {
  try {
    // Check if source image exists
    if (!fs.existsSync(SOURCE_IMAGE)) {
      console.error('Source logo.svg not found in public directory');
      
      // Create placeholder icons
      const svg = `
        <svg width="512" height="512" xmlns="http://www.w3.org/2000/svg">
          <rect width="512" height="512" fill="#18181b"/>
          <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="200" fill="white" text-anchor="middle" dominant-baseline="middle">DS</text>
        </svg>
      `;
      
      // Generate 192x192 icon
      await sharp(Buffer.from(svg))
        .resize(192, 192)
        .png()
        .toFile(path.join(PUBLIC_DIR, 'icon-192x192.png'));
      
      // Generate 512x512 icon
      await sharp(Buffer.from(svg))
        .resize(512, 512)
        .png()
        .toFile(path.join(PUBLIC_DIR, 'icon-512x512.png'));
      
      console.log('Placeholder icons created successfully');
      return;
    }

    // Generate icons from source image
    await sharp(SOURCE_IMAGE)
      .resize(192, 192)
      .png()
      .toFile(path.join(PUBLIC_DIR, 'icon-192x192.png'));

    await sharp(SOURCE_IMAGE)
      .resize(512, 512)
      .png()
      .toFile(path.join(PUBLIC_DIR, 'icon-512x512.png'));

    console.log('Icons generated successfully');
  } catch (error) {
    console.error('Error generating icons:', error);
  }
}

generateIcons();