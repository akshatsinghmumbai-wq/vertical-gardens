import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className="logo">
        <Link href="/" style={{ color: '#fff', fontSize: '1.1rem', fontWeight: '400', letterSpacing: '1px' }}>
          MAY FLOWERS HORTICULTURE
        </Link>
      </div>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/gallery">Our Work</Link></li>
          <li><Link href="/about">About & Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
