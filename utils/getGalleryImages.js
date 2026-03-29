import fs from 'fs';
import path from 'path';

export function getGalleryImages() {
  const directoryPath = path.join(process.cwd(), 'public', 'gallery');
  let images = [];

  function readDirectory(dir) {
    if (!fs.existsSync(dir)) return;
    
    const files = fs.readdirSync(dir);

    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        readDirectory(filePath);
      } else {
        const ext = path.extname(file).toLowerCase();
        if (['.jpeg', '.jpg', '.png', '.webp', '.gif', '.jfif'].includes(ext)) {
          // Calculate the public URL path
          const relativePath = path.relative(path.join(process.cwd(), 'public'), filePath);
          images.push('/' + relativePath.replace(/\\/g, '/'));
        }
      }
    });
  }

  readDirectory(directoryPath);
  return images;
}
