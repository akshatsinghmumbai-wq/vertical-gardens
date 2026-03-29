import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-col">
          <div className="logo" style={{ color: 'white', marginBottom: '1rem', justifyContent: 'center' }}>
            🌿 VertiGrow
          </div>
          <p>The premium vertical gardening solution.</p>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/catalog">Shop All</Link></li>
            <li><Link href="/about">About Us</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Legal</h4>
          <ul>
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms of Service</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Connect</h4>
          <ul>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Facebook</a></li>
          </ul>
        </div>
      </div>
      <p style={{ marginTop: '2rem', color: '#888' }}>&copy; {new Date().getFullYear()} VertiGrow. All rights reserved.</p>
    </footer>
  );
}
