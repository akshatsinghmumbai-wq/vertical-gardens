import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <Link href={`/product/${product.id}`} className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p style={{ color: '#777', fontSize: '0.9rem' }}>{product.shortDec}</p>
        <div className="product-price">${product.price}</div>
      </div>
    </Link>
  );
}
