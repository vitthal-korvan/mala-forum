'use client';

import { gsap } from 'gsap';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isScrolled) {
      gsap.to(headerRef.current, {
        padding: '10px 0',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        duration: 0.3,
      });
    } else {
      gsap.to(headerRef.current, {
        padding: '20px 0',
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        duration: 0.3,
      });
    }
  }, [isScrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header ref={headerRef} className={styles.header}>
        <div className={`container ${styles.nav}`}>
          <Link href="/" className={styles.logo} onClick={closeMenu}>
            Mala <span>Community</span>
          </Link>
          
          <nav className={styles.menu}>
            <Link href="/about" className={styles.link}>About</Link>
            <Link href="/shaadi" target='_blank' className={styles.link}>Shaadi</Link>
            <Link href="/news" className={styles.link}>News</Link>
            <Link href="/events" className={styles.link}>Events</Link>
            <Link href="/contact" className={styles.link}>Contact</Link>
            <Link href="/login" className={styles.authBtn}>Login / Sign Up</Link>
          </nav>

          <button className={styles.mobileMenuBtn} onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`${styles.overlay} ${isMenuOpen ? styles.open : ''}`} 
        onClick={closeMenu}
      ></div>

      {/* Mobile Menu Sidebar */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
        <Link href="/about" className={styles.link} onClick={closeMenu}>About</Link>
        <Link href="/shaadi" className={styles.link} onClick={closeMenu}>Shaadi</Link>
        <Link href="/news" className={styles.link} onClick={closeMenu}>News</Link>
        <Link href="/events" className={styles.link} onClick={closeMenu}>Events</Link>
        <Link href="/contact" className={styles.link} onClick={closeMenu}>Contact</Link>
        <Link href="/login" className={styles.authBtn} onClick={closeMenu}>Login / Sign Up</Link>
      </div>
    </>
  );
}
