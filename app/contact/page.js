export const metadata = {
  title: 'Contact | May Flowers Horticulture',
  description: 'Get in touch with the May Flowers Horticulture team.',
};

export default function Contact() {
  return (
    <div style={{ maxWidth: '600px', margin: '4rem auto', padding: '0 2rem', animation: 'slideUp 0.5s ease' }}>
      <h1 style={{ textAlign: 'center', color: 'var(--primary)', marginBottom: '1rem' }}>Get in Touch</h1>
      <p style={{ textAlign: 'center', color: '#777', marginBottom: '2rem' }}>Questions about our setups? Send us a message.</p>
      
      <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input type="text" placeholder="Your Name" style={{ padding: '1rem', borderRadius: '10px', border: '1px solid #ccc', fontSize: '1rem' }} />
        <input type="email" placeholder="Your Email" style={{ padding: '1rem', borderRadius: '10px', border: '1px solid #ccc', fontSize: '1rem' }} />
        <textarea placeholder="Your Message" rows="5" style={{ padding: '1rem', borderRadius: '10px', border: '1px solid #ccc', fontSize: '1rem' }}></textarea>
        <button type="button" className="btn" style={{ width: '100%', border: 'none', cursor: 'pointer', fontSize: '1.1rem' }}>Send Message</button>
      </form>
    </div>
  );
}
