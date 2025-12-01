'use client';

import Card from '@/components/Card';
import Section from '@/components/Section';
import Link from 'next/link';
import styles from './shaadi.module.css';

export default function Shaadi() {
  const profiles = [
    { id: 1, name: "Priya", age: 26, location: "Bangalore", profession: "Software Engineer", desc: "Looking for a partner with similar values." },
    { id: 2, name: "Rahul", age: 29, location: "Mysore", profession: "Doctor", desc: "Passionate about community service and travel." },
    { id: 3, name: "Anjali", age: 24, location: "Mangalore", profession: "Teacher", desc: "Loves music and traditional arts." },
    { id: 4, name: "Vikram", age: 28, location: "Hubli", profession: "Businessman", desc: "Family oriented and ambitious." },
    { id: 5, name: "Sneha", age: 25, location: "Bangalore", profession: "Architect", desc: "Creative and loves to travel." },
    { id: 6, name: "Arjun", age: 30, location: "Shimoga", profession: "Engineer", desc: "Sports enthusiast and tech lover." },
  ];

  return (
    <>
      <div className={styles.banner}>
        <div className="container">
          <h1 className={styles.bannerTitle}>Find Your Perfect Match</h1>
          <p>Connecting hearts within the Mala Community</p>
        </div>
      </div>

      <Section>
        <div className={styles.filters}>
          <select className={styles.select} defaultValue="">
            <option value="" disabled>Age</option>
            <option value="20-25">20-25</option>
            <option value="26-30">26-30</option>
            <option value="30+">30+</option>
          </select>
          <select className={styles.select} defaultValue="">
            <option value="" disabled>Location</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Mysore">Mysore</option>
            <option value="Mangalore">Mangalore</option>
          </select>
          <select className={styles.select} defaultValue="">
            <option value="" disabled>Profession</option>
            <option value="Engineer">Engineer</option>
            <option value="Doctor">Doctor</option>
            <option value="Business">Business</option>
          </select>
          <button className={styles.searchBtn}>Search</button>
        </div>

        <div className={styles.grid}>
          {profiles.map((profile) => (
            <Card 
              key={profile.id}
              title={`${profile.name}, ${profile.age}`}
              description={`${profile.profession}, ${profile.location}. ${profile.desc}`}
              image={true}
              link={`/shaadi/profile/${profile.id}`}
              linkText="View Full Profile"
            />
          ))}
        </div>

        <div className={styles.loginCta}>
          <h2>Want to see more details?</h2>
          <p style={{ margin: '15px 0 25px' }}>Register or Login to view full profiles and contact details.</p>
          <Link href="/login" style={{ 
            padding: '12px 30px', 
            backgroundColor: 'var(--maroon)', 
            color: 'white', 
            borderRadius: '50px', 
            fontWeight: 'bold' 
          }}>
            Login / Sign Up
          </Link>
        </div>
      </Section>
    </>
  );
}
