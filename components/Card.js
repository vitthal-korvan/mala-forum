'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import styles from './Card.module.css';

export default function Card({ title, description, date, image, link, linkText = 'Read More' }) {
  return (
    <motion.div 
      className={styles.card}
      whileHover={{ y: -10 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {image && (
        <div className={styles.imageWrapper}>
          {/* Placeholder for image, in real app use Next.js Image */}
          <div style={{ width: '100%', height: '100%', backgroundColor: '#ddd' }} />
        </div>
      )}
      <div className={styles.content}>
        {date && <span className={styles.date}>{date}</span>}
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        
        {link && (
          <div className={styles.footer}>
            <Link href={link} className={styles.link}>
              {linkText} <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  );
}
