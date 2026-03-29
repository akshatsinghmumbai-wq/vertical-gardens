-- Copy and paste this script into your Supabase SQL Editor to create your database!

create table products (
  id text primary key,
  name text not null,
  shortDec text,
  description text,
  price numeric(10, 2),
  features text[],
  image text
);

-- Insert the first 3 products as an example. You can add the rest later!
insert into products (id, name, shortDec, description, price, features, image) values
('vg-1', 'The Emerald Cascade', 'A stunning vertical garden designed for maximum aesthetic.', 'Experience the vibrant life of a vertical garden in your home.', 149.99, ARRAY['Smart self-watering system', 'Built-in LED glow lights', 'Premium organic soil'], 'https://images.unsplash.com/photo-1534063228303-3ca4a1c0d51a?w=800&q=80'),
('vg-2', 'Urban Oasis Starter Kit', 'A stunning vertical garden designed for maximum aesthetic.', 'Experience the vibrant life of a vertical garden in your home.', 169.99, ARRAY['Modular stackable design', 'Built-in LED glow lights'], 'https://images.unsplash.com/photo-1534063228303-3ca4a1c0d51a?w=800&q=80'),
('vg-3', 'Eden Wall Planter', 'A stunning vertical garden designed for maximum aesthetic.', 'Experience the vibrant life of a vertical garden in your home.', 189.99, ARRAY['Smart self-watering system', 'Modular stackable design', 'Built-in LED glow lights'], 'https://images.unsplash.com/photo-1534063228303-3ca4a1c0d51a?w=800&q=80');
