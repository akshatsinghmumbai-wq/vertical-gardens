import ProductCard from '../../components/ProductCard';
import { products } from '../../data/products';

export const metadata = {
  title: 'Catalog | VertiGrow',
  description: 'Browse our full collection of 25 premium vertical gardens.',
};

export default function Catalog() {
  return (
    <div>
      <div style={{ background: 'var(--dark)', color: 'white', padding: '4rem 5%', textAlign: 'center' }}>
        <h1 style={{ color: 'white' }}>Our Complete Collection</h1>
        <p style={{ color: '#aaa' }}>Explore all 25 of our stunning vertical gardens.</p>
      </div>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
