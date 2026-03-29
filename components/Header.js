import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className="logo">
        <span style={{ fontSize: '2rem' }}>🌿</span> VertiGrow
      </div>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/catalog">Catalog</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
