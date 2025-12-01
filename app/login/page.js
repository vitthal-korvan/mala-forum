'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from '../auth.module.css';

export default function Login() {
  return (
    <div className={styles.container}>
      <motion.div 
        className={styles.card}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className={styles.title}>Welcome Back</h1>
        <p className={styles.subtitle}>Login to access your account</p>
        
        <form onSubmit={(e) => e.preventDefault()}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Email Address</label>
            <input type="email" className={styles.input} placeholder="your@email.com" />
          </div>
          
          <div className={styles.formGroup}>
            <label className={styles.label}>Password</label>
            <input type="password" className={styles.input} placeholder="********" />
          </div>
          
          <button type="submit" className={styles.submitBtn}>Login</button>
        </form>
        
        <div className={styles.footer}>
          <p>Don't have an account? <Link href="/signup" className={styles.link}>Sign Up</Link></p>
        </div>
      </motion.div>
    </div>
  );
}
