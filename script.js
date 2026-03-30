tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-surface-variant": "#ababab",
        "surface-container-highest": "#262626",
        "on-surface": "#ffffff",
        "surface-variant": "#262626",
        "secondary-fixed": "#efe754",
        "on-secondary-container": "#fffac4",
        "surface-tint": "#e1fd78",
        "error": "#ff7351",
        "inverse-primary": "#546600",
        "surface": "#0e0e0e",
        "primary": "#e1fd78",
        "surface-container-high": "#1f1f1f",
        "primary-fixed-dim": "#cde967",
        "tertiary-dim": "#edcd35",
        "inverse-surface": "#f9f9f9",
        "on-secondary": "#575400",
        "on-secondary-fixed": "#444100",
        "secondary-container": "#656100",
        "on-tertiary-fixed-variant": "#675700",
        "on-primary-fixed": "#3c4a00",
        "tertiary-container": "#fcdc43",
        "on-secondary-fixed-variant": "#625e00",
        "secondary-dim": "#e1d947",
        "primary-container": "#92ab2f",
        "outline-variant": "#484848",
        "on-primary-fixed-variant": "#556800",
        "surface-bright": "#2c2c2c",
        "on-error": "#450900",
        "on-tertiary-fixed": "#473b00",
        "inverse-on-surface": "#555555",
        "surface-dim": "#0e0e0e",
        "tertiary": "#ffeb9c",
        "surface-container-low": "#131313",
        "secondary": "#efe754",
        "error-container": "#b92902",
        "on-primary-container": "#1e2600",
        "on-error-container": "#ffd2c8",
        "on-tertiary-container": "#5c4e00",
        "surface-container": "#191919",
        "on-tertiary": "#665600",
        "outline": "#757575",
        "surface-container-lowest": "#000000",
        "secondary-fixed-dim": "#e1d947",
        "primary-fixed": "#dbf773",
        "on-background": "#ffffff",
        "tertiary-fixed-dim": "#edcd35",
        "background": "#000000",
        "on-primary": "#4f6100",
        "primary-dim": "#d3ef6c",
        "tertiary-fixed": "#fcdc43",
        "error-dim": "#d53d18"
      },
      fontFamily: {
        "headline": ["Epilogue"],
        "body": ["Plus Jakarta Sans"],
        "label": ["Plus Jakarta Sans"]
      },
      borderRadius: {"DEFAULT": "1rem", "lg": "2rem", "xl": "3rem", "full": "9999px"},
    },
  },
}

// Functionality
document.addEventListener('DOMContentLoaded', () => {
    // Helper function for smooth scroll
    const smoothScroll = (targetId) => {
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Contact button (header)
    const contactBtn = document.getElementById('contact-btn');
    if (contactBtn) {
        contactBtn.addEventListener('click', () => smoothScroll('contacto'));
    }

    // Navigation links
    const navTrabajos = document.getElementById('nav-trabajos');
    if (navTrabajos) {
        navTrabajos.addEventListener('click', (e) => {
            e.preventDefault();
            smoothScroll('trabajos');
        });
    }

    const navSobreMi = document.getElementById('nav-sobre-mi');
    if (navSobreMi) {
        navSobreMi.addEventListener('click', (e) => {
            e.preventDefault();
            smoothScroll('sobre-mi');
        });
    }

    // Logo (scroll to top)
    const navLogo = document.getElementById('nav-logo');
    if (navLogo) {
        navLogo.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
