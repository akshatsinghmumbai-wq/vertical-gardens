export const metadata = {
  title: 'About Us | VertiGrow',
  description: 'Learn about our mission to bring premium vertical gardens to modern spaces.',
};

export default function About() {
  return (
    <div style={{ maxWidth: '800px', margin: '4rem auto', padding: '0 2rem', textAlign: 'center', animation: 'fadeIn 1s ease' }}>
      <h1 style={{ fontSize: '3rem', color: 'var(--primary)' }}>About VertiGrow</h1>
      <p style={{ fontSize: '1.2rem', color: '#555', marginTop: '2rem', lineHeight: '1.8' }}>
        We believe that everyone deserves a touch of nature, no matter where they live or work. 
        Founded out of a passion for sustainable design and urban agriculture, VertiGrow provides 
        premium, modern vertical gardens that are both beautiful and fully functional. Our mission is 
        to merge technology with biology, creating effortless ecosystems that breathe life into your home.
      </p>
    </div>
  );
}
