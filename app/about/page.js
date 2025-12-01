'use client';

import Section from '@/components/Section';
import { motion } from 'framer-motion';
import styles from './about.module.css';

export default function About() {
  return (
    <>
      <div className={styles.hero}>
        <div className="container">
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Mala Community
          </motion.h1>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Honoring our past, celebrating our present, and building our future together.
          </motion.p>
        </div>
      </div>

      <Section>
        <div className="container">
          <h2 className={styles.sectionTitle}>Our Mission</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', fontSize: '1.1rem', lineHeight: '1.8' }}>
            <p>
              The Mala Holeya Samajh aims to unite all community members under one roof to foster social, educational, and economic growth. We are committed to preserving our unique cultural heritage while embracing modernity. Our mission is to empower every individual in our community to achieve their full potential.
            </p>
          </div>
        </div>
      </Section>

      <Section className={styles.history}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Our Journey</h2>
          <div className={styles.timeline}>
            <div className={`${styles.timelineItem} ${styles.left}`}>
              <div className={styles.content}>
                <span className={styles.year}>1950</span>
                <h3>Foundation</h3>
                <p>The Samajh was officially formed by a group of visionary elders.</p>
              </div>
            </div>
            <div className={`${styles.timelineItem} ${styles.right}`}>
              <div className={styles.content}>
                <span className={styles.year}>1985</span>
                <h3>First Community Hall</h3>
                <p>Inauguration of our first dedicated community center in Bangalore.</p>
              </div>
            </div>
            <div className={`${styles.timelineItem} ${styles.left}`}>
              <div className={styles.content}>
                <span className={styles.year}>2000</span>
                <h3>Educational Trust</h3>
                <p>Establishment of the scholarship fund for meritorious students.</p>
              </div>
            </div>
            <div className={`${styles.timelineItem} ${styles.right}`}>
              <div className={styles.content}>
                <span className={styles.year}>2025</span>
                <h3>Digital Era</h3>
                <p>Launch of our global digital platform to connect members worldwide.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
