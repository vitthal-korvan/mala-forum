'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from '../auth.module.css';

export default function Signup() {
  return (
    <div className={styles.container}>
      <motion.div 
        className={styles.card}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className={styles.title}>Create Account</h1>
        <p className={styles.subtitle}>Join the Mala Community today</p>
        
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
            <label className={styles.label}>Mobile Number</label>
            <input type="tel" className={styles.input} placeholder="+91 98765 43210" />
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Date of Birth</label>
              <input type="date" className={styles.input} />
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.label}>Gender</label>
              <select className={styles.input}>
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          
          <div className={styles.formGroup}>
            <label className={styles.label}>Password</label>
            <input type="password" className={styles.input} placeholder="********" />
          </div>
          
          <button type="submit" className={styles.submitBtn}>Sign Up</button>
        </form>
        
        <div className={styles.footer}>
          <p>Already have an account? <Link href="/login" className={styles.link}>Login</Link></p>
        </div>
      </motion.div>
    </div>
  );
}
