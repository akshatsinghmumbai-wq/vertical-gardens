import { createClient } from '@supabase/supabase-js';

// These variables will be injected by Vercel from your environment settings.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/* 
  NOTE: 
  To use real data from Supabase instead of the local JSON file:
  1. Uncomment the code below.
  2. Map it to your UI in page.js / [id]/page.js.

export async function fetchProducts() {
  const { data, error } = await supabase.from('products').select('*');
  if (error) console.error('Error fetching products:', error);
  return data;
}
*/
