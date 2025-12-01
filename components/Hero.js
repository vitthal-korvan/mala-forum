'use client';

import { gsap } from 'gsap';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.to(titleRef.current, { y: 0, opacity: 1, duration: 1, delay: 0.2 })
      .to(subtitleRef.current, { y: 0, opacity: 1, duration: 1 }, '-=0.6')
      .to(btnRef.current, { y: 0, opacity: 1, duration: 1 }, '-=0.6');
  }, []);

  return (
    <section className={styles.hero} ref={heroRef}>
      <div className={styles.backgroundPattern}></div>
      <div className={styles.content}>
        <h1 className={styles.title} ref={titleRef}>
          Mala Holeya Samajh
        </h1>
        <p className={styles.subtitle} ref={subtitleRef}>
          Unity, Tradition & Progress
        </p>
        <Link href="/shaadi" className={styles.ctaButton} ref={btnRef}>
          Find Bride/Groom
        </Link>
      </div>
    </section>
  );
}
