import { products } from '../../../data/products';
import Link from 'next/link';

// Generate static params so Next.js builds these pages at build time
export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export function generateMetadata({ params }) {
  const product = products.find(p => p.id === params.id) || products[0];
  return {
    title: `${product.name} | VertiGrow`,
    description: product.shortDec,
  };
}

export default function ProductPage({ params }) {
  const product = products.find(p => p.id === params.id);

  if (!product) {
    return <div style={{ textAlign: 'center', padding: '10rem 0' }}><h2>Product Not Found</h2><Link href="/catalog" className="btn" style={{marginTop: '1rem'}}>Back to Catalog</Link></div>;
  }

  return (
    <div className="details-container">
      <img src={product.image} alt={product.name} className="details-image" />
      <div className="details-info">
        <Link href="/catalog" style={{ color: '#888', textDecoration: 'underline', marginBottom: '1rem', display: 'inline-block' }}>
           ← Back to Catalog
        </Link>
        <h1>{product.name}</h1>
        <div className="price">${product.price}</div>
        <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '2rem' }}>{product.description}</p>
        
        <h3>Premium Features:</h3>
        <ul className="features-list">
          {product.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        <button className="btn" style={{ marginTop: '1rem', width: '100%', fontSize: '1.2rem', padding: '1rem' }}>
          Add to Cart 🛒
        </button>
      </div>
    </div>
  );
}
