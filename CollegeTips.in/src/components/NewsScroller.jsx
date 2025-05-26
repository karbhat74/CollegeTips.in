// components/NewsScroller.js (Create this new file)
// This will be a separate component for the news channel scroller for better organization.
'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const newsLogos = [
  { id: 1, src: '/zee.png', alt: 'Zee News' },
  { id: 2, src: '/nbt.png', alt: 'Navbharat Times' },
  { id: 3, src: '/toi.png', alt: 'Times of India' }, // Placeholder, add your own images!
  { id: 4, src: '/ht.png', alt: 'Hindustan Times' }, // Placeholder
  { id: 5, src: '/ndtv.png', alt: 'NDTV' },     // Placeholder
  { id: 6, src: '/aaj-tak.png', alt: 'Aaj Tak' }, // Placeholder
  // Duplicate for a seamless loop if needed
  { id: 1, src: '/zee.png', alt: 'Zee News' },
  { id: 2, src: '/nbt.png', alt: 'Navbharat Times' },
  { id: 3, src: '/toi.png', alt: 'Times of India' }, // Placeholder, add your own images!
  { id: 4, src: '/ht.png', alt: 'Hindustan Times' }, // Placeholder
  { id: 5, src: '/ndtv.png', alt: 'NDTV' },     // Placeholder
  { id: 6, src: '/aaj-tak.png', alt: 'Aaj Tak' }, // Placeholder
];

const NewsScroller = () => {
  const scrollerRef = useRef(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    // Duplicate content for seamless loop
    const innerContent = scroller.querySelector('.scroller-inner');
    if (!innerContent) return;
    scroller.appendChild(innerContent.cloneNode(true)); // Clone and append

    gsap.to(innerContent, {
      xPercent: -50, // Move 50% of its width to the left (half the duplicated content)
      ease: 'none',
      duration: 25, // Adjust speed
      repeat: -1, // Infinite loop
    });

    // Animate the entire scroller section into view
    gsap.fromTo(scroller,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: scroller,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        }
      }
    );
  }, []);

  return (
    <section className="relative py-16 bg-gradient-to-r from-[#1A1A1A] to-[#0A0A0A] overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-playfair-display font-bold text-gold-300 drop-shadow-md">
          WE ARE <span className="text-red-400">QUITE POPULAR!!</span>
        </h2>
        <p className="text-lg md:text-xl font-lora text-white opacity-80 mt-4">
          That's why. We are always in News.
        </p>
      </div>

      <div
        ref={scrollerRef}
        className="relative w-full overflow-hidden whitespace-nowrap py-4"
      >
        <div className="scroller-inner inline-block min-w-full">
          {newsLogos.map((logo, index) => (
            <img
              key={logo.id + '-' + index} // Use index in key for duplicates
              src={logo.src}
              alt={logo.alt}
              className="inline-block h-16 md:h-20 lg:h-24 mx-8 object-contain transition-all duration-300 hover:scale-110 grayscale hover:grayscale-0"
              style={{ filter: 'grayscale(100%) brightness(150%)' }} // Initially bright grayscale
              onError={(e) => { e.target.onerror = null; e.target.src = '/images/news/placeholder.png'; }} // Placeholder for missing images
            />
          ))}
        </div>
      </div>
      {/* Optional: Add a subtle overlay to create fade-in/out effect at edges */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#1A1A1A] to-transparent pointer-events-none z-10"></div>
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#1A1A1A] to-transparent pointer-events-none z-10"></div>
    </section>
  );
};

export default NewsScroller;
