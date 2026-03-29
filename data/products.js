const names = [
  "The Emerald Cascade", "Urban Oasis Starter Kit", "Eden Wall Planter", "Living Canvas Pro",
  "Botanica Vertical Frame", "Lush Vine Trellis", "Verdant Tower Mini", "EcoWall Premium",
  "Modern Flora Structure", "Moss Masterpiece", "Succulent Skyline", "Air Purifying Jungle Wall",
  "Kitchen Herb Spire", "Balcony Bloom Box", "Zenith Plant Display", "Aura Green Partition",
  "Breathe Easy Garden", "Nature's Curtain", "The Grand Arboretum", "Petite Fern Haven",
  "Timber & Leaf Shelf", "Acoustic Moss Panel", "Hydroponic Helix", "Sunlit Flora Mesh",
  "Midnight Bloom Setup"
];

export const products = names.map((name, i) => ({
  id: `vg-${i + 1}`,
  name: name,
  shortDec: `A stunning vertical garden setup designed for maximum aesthetic and space efficiency.`,
  description: `Experience the lush, vibrant life of a vertical garden right in your home or office with the ${name}. Features self-watering technology, full-spectrum LED grow lights, and a stunning modular design perfect for any environment.`,
  price: (149.99 + (i * 20)).toFixed(2),
  features: [
    "Smart self-watering system",
    "Modular stackable design",
    "Built-in LED glow lights",
    "Premium organic soil pods included"
  ],
  image: `https://images.unsplash.com/photo-1534063228303-3ca4a1c0d51a?w=800&q=80` // Placeholder vibrant garden image
}));
