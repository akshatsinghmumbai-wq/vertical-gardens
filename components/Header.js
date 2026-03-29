import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className="logo">
        <Link href="/">
          <img src="/logo.png" alt="May Flowers Horticulture Logo" style={{ height: '60px', objectFit: 'contain', cursor: 'pointer' }} />
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
