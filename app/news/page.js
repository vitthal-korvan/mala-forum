'use client';

import Card from '@/components/Card';
import Section from '@/components/Section';
import { motion } from 'framer-motion';
import styles from './news.module.css';

export default function News() {
  const newsItems = [
    { id: 1, title: "Community Hall Inauguration", date: "Dec 01, 2025", desc: "The new community hall in Bangalore was inaugurated by the state minister, marking a significant milestone for our Samajh." },
    { id: 2, title: "Scholarship Program Announced", date: "Nov 20, 2025", desc: "Applications are now open for the annual merit scholarship for students pursuing higher education." },
    { id: 3, title: "Health Camp Success", date: "Nov 15, 2025", desc: "Over 500 members benefited from the free health checkup camp organized in association with City Hospital." },
    { id: 4, title: "Cultural Fest 2025", date: "Oct 25, 2025", desc: "A vibrant display of our traditions and talents at the annual cultural festival." },
    { id: 5, title: "Youth Wing Meeting", date: "Oct 10, 2025", desc: "The youth wing met to discuss new initiatives for skill development and career guidance." },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <>
      <div className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>Latest News</h1>
          <p>Stay updated with the latest happenings in our community</p>
        </div>
      </div>

      <Section>
        <div className={styles.featured}>
          <div className={styles.featuredImage} style={{ backgroundImage: 'url("https://placehold.co/800x600/800000/FFFFFF?text=Featured+News")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <div className={styles.featuredContent}>
            <span style={{ color: 'var(--saffron)', fontWeight: 'bold', marginBottom: '10px' }}>FEATURED • DEC 01, 2025</span>
            <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: 'var(--maroon)' }}>Grand Opening of New Community Center</h2>
            <p style={{ lineHeight: '1.6', color: '#555', marginBottom: '30px' }}>
              We are proud to announce the opening of our state-of-the-art community center. This facility will serve as a hub for all our cultural, educational, and social activities.
            </p>
            <button style={{ 
              padding: '12px 30px', 
              backgroundColor: 'var(--maroon)', 
              color: 'white', 
              borderRadius: '50px', 
              fontWeight: 'bold',
              alignSelf: 'flex-start'
            }}>
              Read Full Story
            </button>
          </div>
        </div>

        <motion.div 
          className={styles.grid}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {newsItems.map((news) => (
            <motion.div key={news.id} variants={item}>
              <Card 
                date={news.date}
                title={news.title}
                description={news.desc}
                link={`/news/${news.id}`}
                image={true}
              />
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </>
  );
}
