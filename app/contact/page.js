'use client';

import Section from '@/components/Section';
import { motion } from 'framer-motion';
import styles from './contact.module.css';

export default function Contact() {
  return (
    <Section>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '3rem', color: 'var(--maroon)', marginBottom: '10px' }}>Get in Touch</h1>
          <p>We'd love to hear from you. Send us a message or visit our office.</p>
        </div>

        <div className={styles.wrapper}>
          <motion.div 
            className={styles.infoBox}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.infoTitle}>Contact Information</h2>
            
            <div className={styles.infoItem}>
              <h4>Address</h4>
              <p>Mala Community Hall,<br />#123, Temple Road, Malleshwaram,<br />Bangalore - 560003</p>
            </div>
            
            <div className={styles.infoItem}>
              <h4>Phone</h4>
              <p>+91 98765 43210<br />+91 80 1234 5678</p>
            </div>
            
            <div className={styles.infoItem}>
              <h4>Email</h4>
              <p>info@malacommunity.com<br />support@malacommunity.com</p>
            </div>
            
            <div className={styles.infoItem}>
              <h4>Office Hours</h4>
              <p>Monday - Saturday<br />9:00 AM - 6:00 PM</p>
            </div>
          </motion.div>

          <motion.div 
            className={styles.formBox}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.formTitle}>Send Message</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Full Name</label>
                <input type="text" className={styles.input} placeholder="Your Name" />
              </div>
              
              <div className={styles.formGroup}>
                <label className={styles.label}>Email Address</label>
                <input type="email" className={styles.input} placeholder="your@email.com" />
              </div>
              
              <div className={styles.formGroup}>
                <label className={styles.label}>Subject</label>
                <input type="text" className={styles.input} placeholder="How can we help?" />
              </div>
              
              <div className={styles.formGroup}>
                <label className={styles.label}>Message</label>
                <textarea className={styles.textarea} placeholder="Write your message here..."></textarea>
              </div>
              
              <button type="submit" className={styles.submitBtn}>Send Message</button>
            </form>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
