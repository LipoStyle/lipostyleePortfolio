// src/pages/portfolio/data/projectsData.js
// lipostyle portfolio website
import protfolioImage from '../../../images/portofolioimages/lipostyleePortfolioWebsite.png'
import protfolioImageLogo from '../../../images/logo/logo.svg'

// E-nutritionist  website
import enutritionistImage from '../../../images/portofolioimages/EnutritionistWebsite.png'
import enutritionistimageLogo from '../../../images/portofolioimages/enutritionistLogo.svg'

// Smart Ride website
import smartRideImage from '../../../images/portofolioimages/smartrideWebsite.png'
import smartRideImageLogo from '../../../images/portofolioimages/smartrideLogo.png'
const projects = [
  {
    id: 'project1',
    title: 'Portfolio Website',
    description: 'A modern personal portfolio built with React and styled with CSS modules.',
    techStack: ['React', 'CSS', 'JavaScript'],
    image: protfolioImage,
    logo: protfolioImageLogo,
    github: 'https://github.com/LipoStyle/lipostyleePortfolio',
    live: 'https://lipostylee.com',
  },
  {
    id: 'project2',
    title: 'E-Nutritionist',
    description: 'An e-commerce web app with full checkout and admin dashboard.',
    techStack: ['Next.js', 'Tailwind', 'Stripe'],
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
    image: smartRideImage,
    logo: smartRideImageLogo,
    github: 'https://github.com/yourusername/bookingapp',
    live: 'https://bookingapp.com',
  },
];

export default projects;
