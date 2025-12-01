'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function Section({ children, className = '', id = '' }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    
    gsap.fromTo(
      el,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id={id} 
      className={`container ${className}`} 
      style={{ padding: '80px 20px' }}
    >
      {children}
    </section>
  );
}
