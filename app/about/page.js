export const metadata = {
  title: 'About Us | May Flowers Horticulture',
  description: 'Learn about our mission to bring premium vertical gardens to modern spaces.',
};

export default function About() {
  return (
    <div style={{ maxWidth: '800px', margin: '4rem auto', padding: '0 2rem', textAlign: 'center', animation: 'fadeIn 1s ease' }}>
      <h1 style={{ fontSize: '3rem', color: 'var(--primary)' }}>About May Flowers Horticulture</h1>
      <p style={{ fontSize: '1.2rem', color: '#555', marginTop: '2rem', lineHeight: '1.8' }}>
        We believe that everyone deserves a touch of nature, no matter where they live or work. 
        Founded out of a passion for sustainable design and urban agriculture, May Flowers Horticulture provides 
        premium, modern vertical gardens that are both beautiful and fully functional. Our mission is 
        to merge technology with biology, creating effortless ecosystems that breathe life into your home.
      </p>
      
      <div style={{ marginTop: '4rem', padding: '2rem', background: '#f9f9f9', borderRadius: '15px', border: '1px solid #eee' }}>
        <h2 style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>Get in Touch for Enquiries</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '1.2rem', color: '#444' }}>
          <p><strong>Contact Person:</strong> Chandan Singh</p>
          <p><strong>Phone:</strong> <a href="tel:+919822584154" style={{ color: 'var(--primary)', textDecoration: 'none' }}>+91 9822584154</a></p>
          <p><strong>Email:</strong> <a href="mailto:mfhmumbai@gmail.com" style={{ color: 'var(--primary)', textDecoration: 'none' }}>mfhmumbai@gmail.com</a></p>
        </div>
      </div>
    </div>
  );
}
