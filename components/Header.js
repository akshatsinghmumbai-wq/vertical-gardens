import Link from 'next/link';

export default function Header() {
  return (
    <header className="main-header">
      <div className="logo">
        <Link href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/logo/Logo_Black-removebg-preview.png" 
            alt="Mayflower's Horticulture" 
            style={{ height: '100px', objectFit: 'contain' }}
          />
        </Link>
      </div>
      <nav>
        <ul>
          <li><Link href="/" className="active">HOME</Link></li>
          <li><Link href="/gallery">PORTFOLIO</Link></li>
          <li><Link href="/about">CONTACT</Link></li>
        </ul>
      </nav>
    </header>
  );
}
