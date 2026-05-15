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
          
          // Look up plant data in our AI database
          const baseName = path.basename(file, ext).toLowerCase();
          
          let plantData = null;
          try {
            const dbPath = path.join(process.cwd(), 'utils', 'plantData.json');
            if (fs.existsSync(dbPath)) {
              const dbContent = fs.readFileSync(dbPath, 'utf8');
              const db = JSON.parse(dbContent);
              
              // Attempt to match the exact filename or a partial match
              if (db[baseName]) {
                plantData = db[baseName];
              } else {
                // Try fuzzy match
                const matchKey = Object.keys(db).find(k => baseName.includes(k) || k.includes(baseName));
                if (matchKey) plantData = db[matchKey];
              }
            }
          } catch (e) {
            console.error("Error reading plant database:", e);
          }

          let name = plantData ? plantData.name : "Beautiful Vertical Garden Plant";
          let description = plantData ? plantData.description : "A stunning, lush tropical plant that thrives in vertical installations, adding rich texture and vibrant greenery to any space.";

          images.push({ src, name, description });
        }
      }
    });
  }

  readDirectory(directoryPath);
  return images;
}
