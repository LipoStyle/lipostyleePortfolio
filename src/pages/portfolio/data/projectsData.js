// src/pages/portfolio/data/projectsData.js

// Portfolio Website
import protfolioImage from '../../../images/portofolioimages/lipostyleePortfolioWebsite.png';
import protfolioImageLogo from '../../../images/logo/logo.svg';

// E-nutritionist Website
import enutritionistImage from '../../../images/portofolioimages/EnutritionistWebsite.png';
import enutritionistimageLogo from '../../../images/portofolioimages/enutritionistLogo.svg';

// Smart Ride Website
import smartRideImage from '../../../images/portofolioimages/smartrideWebsite.png';
import smartRideImageLogo from '../../../images/portofolioimages/smartrideLogo.png';

const projects = [
  {
    id: 'project1',
    title: 'Lipostyle Portfolio Website',
    description:
      "A modern portfolio website built with React.js using a fully modular component-based architecture. Each UI section is developed with its own JSX and CSS file for better scalability and maintainability. The site emphasizes responsive design, smooth animations, and a clean user experience. Source code is hosted on GitHub, and the live site is deployed via HostGator.",
    purpose: {
      paragrapgh:
        "The portfolio serves as a central hub for potential clients, collaborators, and employers to:",
      itemlist: [
        "Learn about my background, skills, and web development journey.",
        "Explore detailed previews of my featured projects.",
        "Easily get in touch for opportunities or inquiries through the contact page."
      ]
    },
    pagesNfeatures: [
      {
        page: "Home Page",
        pageDescription: [
          {
            sectionName: "Hero Section",
            sectionDescritpion:
              "Introduces who I am with clear CTA buttons to view work, contact, or download CV."
          },
          {
            sectionName: "About Preview",
            sectionDescritpion:
              "Quick overview of my background and career shift into web development."
          },
          {
            sectionName: "Skills Preview",
            sectionDescritpion:
              "Highlights key technologies and tools in a responsive carousel layout."
          },
          {
            sectionName: "Portfolio Preview",
            sectionDescritpion:
              "Showcases selected projects in card format with links to detailed pages and live demos."
          }
        ]
      },
      {
        page: "Portfolio Page",
        pageDescription: [
          {
            sectionName: "Side Navigation",
            sectionDescritpion:
              "Enables seamless navigation between different projects."
          },
          {
            sectionName: "Project Details",
            sectionDescritpion:
              "Dedicated layout for in-depth project descriptions, features, and links."
          }
        ]
      },
      {
        page: "About Page",
        pageDescription:
          "Provides a personal narrative about my career journey and development philosophy."
      },
      {
        page: "Contact Page",
        pageDescription: [
          {
            sectionName: "Contact Information",
            sectionDescritpion:
              "Provides professional channels like email, phone, and social links."
          },
          {
            sectionName: "Contact Form",
            sectionDescritpion:
              "Interactive form for visitors to send inquiries, collaboration requests, or feedback."
          }
        ]
      }
    ],

    // Improved Tech Stack
    techStack: [
      {
        icon: '⚛️',
        name: 'React.js',
        note: 'Component-Based Architecture'
      },
      {
        icon: '🎨',
        name: 'Custom CSS Modules',
        note: 'Scoped Styling'
      },
      {
        icon: '📜',
        name: 'JavaScript',
        note: 'ES6+'
      },
      {
        icon: '📱',
        name: 'Responsive & Animated UI Design',
        note: 'Optimized for all screen sizes'
      },
      {
        icon: '🐙',
        name: 'GitHub',
        note: 'Version Control & Deployment'
      },
      {
        icon: '🌐',
        name: 'HostGator',
        note: 'Live Hosting'
      }
    ],

    // Key Highlights
    features: [
      {
        icon: '✨',
        title: 'Modern UI/UX',
        description:
          'Minimalist, professional design with smooth animations and fully responsive layouts.'
      },
      {
        icon: '🧩',
        title: 'Component‑Based Architecture',
        description:
          'Each section is modular for better maintainability, scalability, and reusability.'
      },
      {
        icon: '🎨',
        title: 'Glassmorphic & Thematic Elements',
        description:
          'Subtle visual enhancements for a polished, modern aesthetic with background overlays.'
      },
      {
        icon: '📱',
        title: 'Mobile‑First Approach',
        description:
          'Optimized for different screen sizes and devices for seamless accessibility.'
      }
    ],

    image: protfolioImage,
    logo: protfolioImageLogo,
    github: 'https://github.com/LipoStyle/lipostyleePortfolio',
    live: 'https://lipostylee.com'
  },

  // Keep other projects unchanged for now
  {
    id: 'project2',
    title: 'E-Nutritionist',
    description: 'An e-commerce web app with full checkout and admin dashboard.',
    techStack: ['Next.js', 'Tailwind', 'Stripe'],
    features: [],
    image: enutritionistImage,
    logo: enutritionistimageLogo,
    github: 'https://github.com/LipoStyle/e-nutritionist_nextjs',
    live: 'https://e-nutritionist.com/',
  },
  {
    id: 'project3',
    title: 'Smart Ride',
    description: 'A multilingual booking platform for nutrition consultations.',
    techStack: ['React', 'Node.js', 'PostgreSQL'],
    features: [],
    image: smartRideImage,
    logo: smartRideImageLogo,
    github: 'https://github.com/yourusername/bookingapp',
    live: 'https://bookingapp.com',
  }
];

export default projects;
