import Card from '@/components/Card';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Hero />
      
      <Section id="about">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--maroon)', marginBottom: '20px' }}>About Mala Community</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#444', marginBottom: '30px' }}>
              The Mala Holeya Samajh is dedicated to fostering unity, preserving our rich traditions, and driving progress for all community members. We believe in the power of connection and the strength of our shared heritage.
            </p>
            <Link href="/about" style={{ 
              color: 'var(--saffron)', 
              fontWeight: 'bold', 
              fontSize: '1.1rem',
              textDecoration: 'underline'
            }}>
              Learn more about our history &rarr;
            </Link>
          </div>
          <div style={{ 
            height: '400px', 
            backgroundColor: '#f0f0f0', 
            borderRadius: '20px',
            backgroundImage: 'url("https://placehold.co/600x400/800000/FFFFFF?text=Community+Image")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}></div>
        </div>
      </Section>

      <Section id="shaadi">
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--maroon)', marginBottom: '10px' }}>Shaadi Portal</h2>
          <p style={{ fontSize: '1.2rem', color: '#666' }}>Find your perfect match within the community</p>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '30px',
          marginBottom: '40px'
        }}>
          <Card 
            title="Priya, 26" 
            description="Software Engineer, Bangalore. Looking for a partner with similar values."
            image={true}
            link="/shaadi/profile/1"
            linkText="View Profile"
          />
          <Card 
            title="Rahul, 29" 
            description="Doctor, Mysore. Passionate about community service and travel."
            image={true}
            link="/shaadi/profile/2"
            linkText="View Profile"
          />
          <Card 
            title="Anjali, 24" 
            description="Teacher, Mangalore. Loves music and traditional arts."
            image={true}
            link="/shaadi/profile/3"
            linkText="View Profile"
          />
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <Link href="/shaadi" style={{ 
            display: 'inline-block',
            padding: '12px 30px',
            backgroundColor: 'var(--maroon)',
            color: 'white',
            borderRadius: '50px',
            fontWeight: 'bold'
          }}>
            Browse All Profiles
          </Link>
        </div>
      </Section>

      <Section id="news-events" style={{ backgroundColor: 'var(--off-white)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
          <div>
            <h2 style={{ fontSize: '2rem', color: 'var(--maroon)', marginBottom: '30px' }}>Latest News</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <Card 
                date="Dec 01, 2025"
                title="Community Hall Inauguration" 
                description="The new community hall in Bangalore was inaugurated by the state minister."
                link="/news/1"
              />
              <Card 
                date="Nov 20, 2025"
                title="Scholarship Program Announced" 
                description="Applications are now open for the annual merit scholarship for students."
                link="/news/2"
              />
            </div>
          </div>
          
          <div>
            <h2 style={{ fontSize: '2rem', color: 'var(--maroon)', marginBottom: '30px' }}>Upcoming Events</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <Card 
                date="Jan 15, 2026"
                title="Sankranti Utsav" 
                description="Join us for the grand celebration of Makar Sankranti at the Main Hall."
                link="/events/1"
                linkText="Event Details"
              />
              <Card 
                date="Feb 10, 2026"
                title="Annual General Meeting" 
                description="All members are requested to attend the AGM to discuss future plans."
                link="/events/2"
                linkText="Event Details"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section id="join">
        <div style={{ 
          backgroundColor: 'var(--maroon)', 
          color: 'white', 
          padding: '60px', 
          borderRadius: '20px',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: 'var(--gold)' }}>Join Our Community</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>
            Become a member today to access exclusive benefits, participate in events, and connect with your roots.
          </p>
          <Link href="/signup" style={{ 
            display: 'inline-block',
            padding: '15px 40px',
            backgroundColor: 'var(--white)',
            color: 'var(--maroon)',
            borderRadius: '50px',
            fontWeight: 'bold',
            fontSize: '1.1rem'
          }}>
            Register Now
          </Link>
        </div>
      </Section>
    </>
  );
}
