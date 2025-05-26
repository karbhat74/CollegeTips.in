// app/page.js (or wherever your main App component is)
'use client'
import NewsScroller from '@/components/NewsScroller'; // Import the new component
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Sample gallery data (replace with your actual data)
const galleryItems = [
  {
    id: 1,
    src: '/img1.jpg', // Updated path
    alt: 'Students celebrating graduation',
    title: 'Triumph in Emerald Halls',
    description: 'A moment of profound achievement, marking the culmination of years of dedication and growth. The future unfurls like a golden scroll. This image captures the jubilation and pride associated with reaching a significant academic milestone, inspiring future generations.',
    category: 'achievements'
  },
  {
    id: 2,
    src: '/img2.jpg', // Updated path
    alt: 'Students walking on a vibrant campus',
    title: 'Vibrant Campus Tapestry',
    description: 'The bustling heart of collegiate life, where friendships are forged and ideas ignite under the warm glow of shared experiences. Every pathway tells a story of diverse individuals coming together.',
    category: 'campus'
  },
  {
    id: 3,
    src: '/img4.jpg', // Updated path
    alt: 'Student working in a lab',
    title: 'Alchemy of Discovery',
    description: 'In the quiet hum of the laboratory, a breakthrough emerges, illuminating new pathways for knowledge and innovation. This represents the relentless pursuit of answers and solutions.',
    category: 'achievements'
  },
  {
    id: 4,
    src: '/img5.jpg', // Updated path
    alt: 'Student studying in a grand library',
    title: 'Sanctuary of Wisdom',
    description: 'Amidst ancient tomes and modern screens, the pursuit of knowledge finds its serene sanctuary, fostering contemplation and insight. The library stands as a testament to the timeless value of learning.',
    category: 'campus'
  },
  {
    id: 5,
    src: '/img7.jpg', // Updated path
    alt: 'Students viewing art exhibition',
    title: 'Canvas of Creativity',
    description: 'A vibrant display of student artistry, where imagination takes form and expression finds its boldest voice. It celebrates the diverse talents and innovative spirit within the collegiate community.',
    category: 'student-life'
  },
  {
    id: 6,
    src: '/img8.jpg', // Updated path
    alt: 'Students cheering at a sports event',
    title: 'Echoes of Victory',
    description: 'The roar of the crowd, the thrill of competition – moments of shared passion and unforgettable triumphs on the field. This embodies the spirit of teamwork, dedication, and sportsmanship.',
    category: 'student-life'
  },
  {
    id: 7,
    src: '/img9.jpg', // Updated path
    alt: 'Students collaborating on a project',
    title: 'Symphony of Minds',
    description: 'Diverse perspectives converge, weaving together ideas into a harmonious tapestry of collaborative innovation and shared success. It highlights the power of collective intelligence in academic pursuits.',
    category: 'achievements'
  },
  {
    id: 8,
    src: '/img10.jpg', // Updated path
    alt: 'Students participating in a club activity',
    title: 'Guild of Aspirations',
    description: 'Where passions find their community, and shared interests blossom into lifelong connections and enriching experiences. This represents the vibrant social and extra-curricular life of students.',
    category: 'student-life'
  },
];

// Main App Component
const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const galleryRef = useRef(null);
  const modalRef = useRef(null);
  const heroRef = useRef(null);
  const contentRef = useRef(null); // Ref for the main content to apply blur

  // GSAP animation for hero section entrance
  useEffect(() => {
    gsap.fromTo(heroRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' }
    );
    gsap.fromTo('.hero-title',
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.5, delay: 0.5, ease: 'back.out(1.7)' }
    );
    gsap.fromTo('.hero-subtitle',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.5, delay: 1, ease: 'power3.out' }
    );
  }, []);

  // GSAP animation for gallery items on scroll
  useEffect(() => {
    const items = gsap.utils.toArray('.gallery-item');
    items.forEach((item, index) => {
      gsap.fromTo(item,
        { opacity: 0, y: 50, scale: 0.9, rotationX: -10 }, // Added rotationX for more depth
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationX: 0, // Reset rotation
          duration: 1.2, // Slightly longer duration
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    });
  }, []);

  // Open modal function with GSAP animation and blur
  const openModal = (item) => {
    setSelectedImage(item);
    setIsModalOpen(true);

    gsap.to(contentRef.current, {
      filter: 'blur(10px) brightness(0.5)', // Apply blur and darken
      duration: 0.5,
      ease: 'power2.out',
    });

    gsap.fromTo(modalRef.current,
      { opacity: 0, scale: 0.9, y: 50 }, // Start slightly below
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.6,
        ease: 'back.out(1.7)',
        onStart: () => {
          document.body.style.overflow = 'hidden';
          modalRef.current.classList.remove('hidden'); // Ensure it's not hidden by Tailwind
        }
      }
    );
  };

  // Close modal function with GSAP animation and un-blur
  const closeModal = () => {
    gsap.to(contentRef.current, {
      filter: 'blur(0px) brightness(1)', // Remove blur and brightness
      duration: 0.4,
      ease: 'power2.in',
    });

    gsap.to(modalRef.current, {
      opacity: 0,
      scale: 0.9,
      y: -50, // Animate slightly upwards as it closes
      duration: 0.4,
      ease: 'power2.in',
      onComplete: () => {
        setIsModalOpen(false);
        setSelectedImage(null);
        document.body.style.overflow = '';
        modalRef.current.classList.add('hidden'); // Hide completely after animation
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A] text-white font-inter overflow-x-hidden relative">
      {/* Main content container for blur effect */}
      <div ref={contentRef} className="transition-filter duration-500 ease-out will-change-filter">
        {/* Hero Section */}
        <header ref={heroRef} className="relative h-96 flex items-center justify-center text-center p-4 overflow-hidden">
          {/* Using a specific image path for hero */}
          <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('/img1.jpg')" }}></div>
          <div className="relative z-10">
            <h1 className="hero-title text-5xl md:text-7xl font-playfair-display font-bold text-gold-400 drop-shadow-lg mb-4">
              The Golden Archive
            </h1>
            <p className="hero-subtitle text-xl md:text-2xl font-lora text-white opacity-80 max-w-2xl mx-auto">
              A Collegiate Odyssey: Unveiling Moments of Triumph & Inspiration
            </p>
          </div>
        </header>

        {/* Main Gallery Section */}
        <main className="container mx-auto px-4 py-16">
          <h2 className="text-4xl md:text-5xl font-playfair-display font-bold text-center text-gold-300 mb-12 drop-shadow-md">
            Curated Wonders
          </h2>

          <div ref={galleryRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="gallery-item relative bg-[#1A1A1A] rounded-xl overflow-hidden shadow-2xl group cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-gold-glow"
                onClick={() => openModal(item)}
                onMouseEnter={(e) => {
                  gsap.to(e.currentTarget.querySelector('.image-overlay'), { opacity: 0.2, duration: 0.3 });
                  gsap.to(e.currentTarget.querySelector('.item-title'), { y: -5, color: '#FFD700', duration: 0.3 });
                  gsap.to(e.currentTarget.querySelector('.gold-border'), { scaleX: 1, scaleY: 1, duration: 0.5, ease: 'power3.out' });
                  gsap.to(e.currentTarget.querySelector('img'), { scale: 1.05, duration: 0.5, ease: 'power2.out' }); // Image scale on hover
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.currentTarget.querySelector('.image-overlay'), { opacity: 0, duration: 0.3 });
                  gsap.to(e.currentTarget.querySelector('.item-title'), { y: 0, color: '#FFD700', duration: 0.3 });
                  gsap.to(e.currentTarget.querySelector('.gold-border'), { scaleX: 0, scaleY: 0, duration: 0.5, ease: 'power3.out' });
                  gsap.to(e.currentTarget.querySelector('img'), { scale: 1, duration: 0.5, ease: 'power2.out' }); // Image scale out
                }}
              >
                {/* Gold Border Effect */}
                <div className="gold-border absolute inset-0 border-2 border-gold-400 rounded-xl transform scale-x-0 scale-y-0 origin-center transition-all duration-500 ease-out z-10"></div>

                <img
                  src={item.src}
                  alt={item.alt}
                  // Ensured image object-cover for consistent grid look, height is fixed but responsive aspect could be explored
                  className="w-full h-64 md:h-72 object-cover rounded-t-xl transition-transform duration-500"
                  onError={(e) => { e.target.onerror = null; e.target.src = `/images/gallery/placeholder.png`; }} // Updated placeholder path
                />
                {/* Image Overlay for dramatic effect */}
                <div className="image-overlay absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 transition-opacity duration-300 rounded-t-xl"></div>

                <div className="p-6">
                  <h3 className="item-title text-xl font-lora font-semibold text-gold-300 mb-2 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm font-inter leading-relaxed">
                    {item.description.substring(0, 100)}...
                  </p>
                  <div className="mt-4 text-right">
                    <span className="text-gold-500 text-sm font-semibold group-hover:underline">View Details →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* New "Popularity" Section with News Channel Scroller */}
        <NewsScroller />

        {/* Footer */}
        <footer className="bg-[#0A0A0A] text-gray-500 text-center py-8 px-4 mt-16 border-t border-gold-800">
          <p className="text-sm font-inter">&copy; 2025 Collegetips.in. All rights reserved..</p>
        </footer>
      </div>

      {/* Modal / Lightbox (Outside of contentRef for blur, but styled to appear above it) */}
      {/* Added 'hidden' to initially hide it, removed by GSAP on open */}
      <div
        ref={modalRef}
        className={`fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50 opacity-0 scale-90 ${isModalOpen ? '' : 'hidden'}`}
        onClick={closeModal} // Close modal when clicking outside content
      >
        {selectedImage && ( // Only render modal content if an image is selected
          <div
            className="relative bg-[#0A0A0A] rounded-2xl shadow-gold-glow max-w-4xl w-full h-auto max-h-[90vh] overflow-y-auto flex flex-col lg:flex-row"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside content
          >
            <button
              className="absolute top-4 right-4 text-white text-3xl z-10 p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-80 transition-all duration-300"
              onClick={closeModal}
            >
              &times;
            </button>
            <div className="lg:w-1/2 p-6 flex items-center justify-center">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[calc(90vh-80px)] object-contain rounded-lg border-2 border-gold-600 shadow-lg"
                onError={(e) => { e.target.onerror = null; e.target.src = `/images/gallery/placeholder.png`; }}
              />
            </div>
            <div className="lg:w-1/2 p-8 flex flex-col justify-center">
              <h3 className="text-4xl font-playfair-display font-bold text-gold-300 mb-4">
                {selectedImage.title}
              </h3>
              <p className="text-gray-300 text-lg font-inter leading-relaxed mb-6">
                {selectedImage.description}
              </p>
              <p className="text-gold-500 text-sm font-semibold mt-auto">Category: {selectedImage.category.replace('-', ' ').toUpperCase()}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;