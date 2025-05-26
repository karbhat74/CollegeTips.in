CollegeTips.in


🌟 Overview
"CollegeTips.in" is a dynamic and visually opulent web gallery built for Collegetips.in. This project serves as a premium showcase of the vibrant college experience, capturing moments of triumph, inspiration, and student life. Leveraging modern web technologies, it delivers a smooth, engaging, and highly interactive user experience.

The gallery is designed to reflect Collegetips.in's mission to make student life "easy and happening" by visually celebrating the journey of higher education.

✨ Features
Opulent & Responsive Design: A meticulously crafted UI with a rich, golden-themed aesthetic, fully responsive across all devices.
Dynamic Image Gallery: Displays curated images of collegiate moments in an aesthetically pleasing grid.
Interactive Lightbox Modal:
Clicking an image opens a full-screen, detailed view.
Background Blur Effect: The main content gracefully blurs and darkens when the modal is open, focusing user attention on the selected image.
Smooth entry and exit animations using GSAP.
Advanced GSAP Animations:
Hero Section Entrance: Engaging fade-in and scale animations for the title and subtitle.
Scroll-Triggered Gallery Items: Images animate into view with subtle scale, opacity, and rotation effects as the user scrolls.
Interactive Hover Effects: Detailed animations on gallery items, including border reveals and image scaling.
"We Are Quite Popular!!" News Scroller:
A dedicated section showcasing logos of prominent news channels, emphasizing Collegetips.in's media presence.
Logos move infinitely horizontally, appearing and disappearing seamlessly at the edges.
Subtle grayscale to color transition on hover for engagement.
Optimized Performance: Built with Next.js for efficient rendering and fast page loads.
🚀 Technologies Used
Next.js 14+: React Framework for production.
React: JavaScript library for building user interfaces.
Tailwind CSS: A utility-first CSS framework for rapid UI development.
GSAP (GreenSock Animation Platform): Industry-standard JavaScript animation library for highly performant and complex animations.
gsap/ScrollTrigger: GSAP plugin for scroll-based animations.
Vercel: Platform for deployment.
💻 Local Development Setup
Follow these steps to get the project running on your local machine.

Prerequisites
Ensure you have Node.js (v18.x or later recommended) and npm (or Yarn) installed.

Installation
Clone the repository:

Bash

git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
(Replace your-username/your-repo-name with your actual repository path)

Install dependencies:
If you did not select Tailwind CSS during create-next-app initialization:

Bash

npm install
# or
yarn install
If you did select Tailwind CSS during create-next-app, you still need GSAP:

Bash

npm install gsap
# or
yarn add gsap
Image Assets
This project uses static image assets. Please ensure you have the following directory structure and images placed within your public folder:

public/
├── img1.jpg
├── img2.jpg
├── ... (up to img10.jpg, and any other gallery images)
├── hero-bg.jpg  (Image for the hero section background)
├── zee-news.png
├── nbt.png
├── toi.png
├── ht.png
├── ndtv.png
├── aajtak.png
└── placeholder.png (Generic placeholder for all image errors)




Running the Development Server
Start the development server:

Bash

npm run dev
# or
yarn dev
Open in your browser:
The application will be accessible at http://localhost:3000.

⚙️ Configuration
Tailwind CSS Customization
The project uses a customized tailwind.config.js to define custom colors (gold-series, lime-400), fonts (font-playfair-display, font-lora), and shadows (shadow-gold-glow). It also includes a custom utility for backdrop-blur.

Ensure your tailwind.config.js includes the following structure for theme.extend and the custom plugin:

JavaScript

// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'gold-100': '#FFFDD0', // Champagne
        'gold-200': '#FDD280', // Pale Gold
        'gold-300': '#FFD700', // Classic Gold
        'gold-400': '#DAA520', // Goldenrod
        'gold-500': '#B8860B', // Dark Goldenrod
        'gold-600': '#8B4513', // Saddle Brown (for deeper accents)
        'gold-700': '#654321', // Darker Brown
        'gold-800': '#36220E', // Very Dark Brown
        'lime-400': '#A3E635', // For "QUITE POPULAR" text
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'playfair-display': ['"Playfair Display"', 'serif'],
        'lora': ['Lora', 'serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 15px rgba(255, 215, 0, 0.6), 0 0 30px rgba(255, 215, 0, 0.4)',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.backdrop-blur-md': {
          backdropFilter: 'blur(12px)',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}
🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

📄 License
This project is open source and available under the MIT License.

📧 Contact
For any inquiries or feedback, please reach out to karthikasbhat74@gmail.com or connect via your professional social media.
