'use client';

import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.column}>
            <h3>Mala Community</h3>
            <p>Unity, Tradition & Progress. Connecting our community for a better future.</p>
          </div>
          
          <div className={styles.column}>
            <h3>Quick Links</h3>
            <div className={styles.links}>
              <Link href="/about">About Us</Link>
              <Link href="/shaadi">Shaadi Portal</Link>
              <Link href="/news">Latest News</Link>
              <Link href="/events">Upcoming Events</Link>
              <Link href="/contact">Contact Us</Link>
            </div>
          </div>
          
          <div className={styles.column}>
            <h3>Contact</h3>
            <div className={styles.links}>
              <p>Email: info@malacommunity.com</p>
              <p>Phone: +91 98765 43210</p>
              <p>Address: Bangalore, Karnataka</p>
            </div>
          </div>
        </div>
        
        <div className={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} Mala Holeya Samajh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
