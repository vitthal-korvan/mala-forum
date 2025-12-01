'use client';

import Section from '@/components/Section';
import { motion } from 'framer-motion';
import { Clock, MapPin } from 'lucide-react';
import styles from './events.module.css';

export default function Events() {
  const events = [
    { id: 1, title: "Sankranti Utsav", day: "15", month: "Jan", time: "10:00 AM", venue: "Community Main Hall, Bangalore", desc: "Join us for the grand celebration of Makar Sankranti with traditional rituals, food, and cultural programs." },
    { id: 2, title: "Annual General Meeting", day: "10", month: "Feb", time: "02:00 PM", venue: "Conference Center, Mysore", desc: "All members are requested to attend the AGM to discuss future plans, budget approval, and elect new committee members." },
    { id: 3, title: "Youth Career Workshop", day: "05", month: "Mar", time: "09:30 AM", venue: "Virtual (Zoom)", desc: "A workshop for students and young professionals on career guidance, resume building, and interview skills." },
    { id: 4, title: "Ugadi Celebration", day: "22", month: "Mar", time: "06:00 PM", venue: "Open Air Theatre, Mangalore", desc: "Celebrate the New Year with music, dance, and a grand feast. Special performances by community artists." },
  ];

  return (
    <>
      <div className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>Upcoming Events</h1>
          <p>Mark your calendars for these community gatherings</p>
        </div>
      </div>

      <Section>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {events.map((event, index) => (
            <motion.div 
              key={event.id}
              className={styles.eventCard}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className={styles.dateBox}>
                <span className={styles.day}>{event.day}</span>
                <span className={styles.month}>{event.month}</span>
              </div>
              <div className={styles.details}>
                <h3 className={styles.eventTitle}>{event.title}</h3>
                <div className={styles.meta}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Clock size={16} /> {event.time}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><MapPin size={16} /> {event.venue}</span>
                </div>
                <p className={styles.description}>{event.desc}</p>
              </div>
              <div className={styles.action}>
                <button className={styles.registerBtn}>Register</button>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}
