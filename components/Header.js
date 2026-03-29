import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className="logo">
        <Link href="/">
          <img src="/logo/Logo_White.png" alt="May Flowers Horticulture" style={{ height: '40px', objectFit: 'contain', cursor: 'pointer', marginTop: '5px' }} />
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
