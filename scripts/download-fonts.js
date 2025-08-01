const https = require('https');
const fs = require('fs');
const path = require('path');

const FONTS_DIR = path.join(__dirname, '..', 'public', 'fonts');

// Ensure fonts directory exists
if (!fs.existsSync(FONTS_DIR)) {
  fs.mkdirSync(FONTS_DIR, { recursive: true });
}

// Download Inter font
const INTER_URL = 'https://rsms.me/inter/font-files/InterVariable.woff2';
const INTER_PATH = path.join(FONTS_DIR, 'inter-var.woff2');

console.log('Downloading Inter font...');

const file = fs.createWriteStream(INTER_PATH);
https.get(INTER_URL, (response) => {
  response.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('Inter font downloaded successfully!');
  });
}).on('error', (err) => {
  fs.unlink(INTER_PATH, () => {});
  console.error('Error downloading font:', err.message);
});