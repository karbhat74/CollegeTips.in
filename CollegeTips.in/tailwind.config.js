// tailwind.config.js
module.exports = {
    theme: {
      extend: {
        colors: {
          gold: {
            300: '#FFD700', // Gold
            400: '#B8860B', // Dark Goldenrod
            500: '#DAA520', // Goldenrod
            600: '#CD7F32', // Bronze (for borders)
            800: '#6B4226', // Darker Bronze
          },
        },
        fontFamily: {
          'playfair-display': ['"Playfair Display"', 'serif'],
          'lora': ['Lora', 'serif'], // Added Lora as an option
          'inter': ['Inter', 'sans-serif'],
        },
        boxShadow: {
          'gold-glow': '0 0 15px rgba(255, 215, 0, 0.6), 0 0 30px rgba(255, 215, 0, 0.4)',
        },
        backdropFilter: {
            'none': 'none',
            'blur': 'blur(20px)', // You can add more blur values if needed
          },
          filter: { // For the background blur and brightness effect
            'none': 'none',
            'blur-darken': 'blur(10px) brightness(0.5)',
          },
      },
    },
    plugins: [
        require('@tailwindcss/typography'), // Example if you have other plugins
        // Add this if you need explicit backdrop-filter utility:
        function({ addUtilities }) {
          const newUtilities = {
            '.backdrop-blur-md': {
              backdropFilter: 'blur(12px)',
            },
            // You might also need these for `filter` if not already default
            '.filter-blur-darken': {
              filter: 'blur(10px) brightness(0.5)',
            }
          }
          addUtilities(newUtilities, ['responsive', 'hover'])
        }
      ],
  };