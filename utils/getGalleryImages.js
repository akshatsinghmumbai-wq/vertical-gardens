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
          const src = '/' + relativePath.replace(/\\/g, '/');
          
          // Generate beautiful plant name from filename
          let name = path.basename(file, ext);
          // Remove sizes like "200kb", "3mb", etc.
          name = name.replace(/\d+(kb|mb|mp)/gi, '');
          // Remove leftover numbers and special characters, replace with spaces
          name = name.replace(/[-_0-9]+/g, ' ');
          // Trim extra spaces and capitalize each word
          name = name.trim().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
          
          // Fallback if name ends up empty
          if (!name) name = "Beautiful Vertical Garden";

          images.push({ src, name });
        }
      }
    });
  }

  readDirectory(directoryPath);
  return images;
}
