export const profile = {
  name: 'Ayush Dutt Pathak',
  initials: 'AD',
  title: 'Full Stack Developer | Software Engineering Student | ML Enthusiast',
  tagline:
    'Aspiring software engineer focused on building scalable web applications and intelligent solutions.',
  email: 'pathakayush8194@gmail.com',
  secondaryEmail: 'ayush.23190503020@cuj.ac.in',
  phone: '+91 7307645571',
  github: 'https://github.com/pathak9651',
  linkedin: 'https://www.linkedin.com/in/ayush-dutt-pathak-2b8936323',
  resume: '/resume.pdf',
  education: {
    degree: 'Integrated B.Tech + M.Tech in Computer Science',
    specialization: 'Machine Learning and Data Science',
    university: 'Central University of Jharkhand',
  },
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const stats = [
  { label: 'Projects Delivered', value: '8+' },
  { label: 'Core Stack', value: 'Full Stack' },
  { label: 'Internship', value: '45 Days' },
];

export const skills = [
  {
    title: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'React Native'],
    level: 90,
  },
  {
    title: 'Backend',
    items: ['Java', 'Servlets', 'JSP', 'Node.js'],
    level: 85,
  },
  {
    title: 'Database',
    items: ['MySQL', 'MongoDB', 'Firebase'],
    level: 80,
  },
  {
    title: 'Tools',
    items: ['Git & GitHub', 'Postman', 'VS Code', 'Eclipse IDE'],
    level: 88,
  },
  {
    title: 'Programming Languages',
    items: ['C', 'C++', 'Python', 'Java'],
    level: 86,
  },
  {
    title: 'Development Workflow',
    items: ['Debugging', 'API Testing', 'Version Control', 'Documentation', 'Continuous Learning'],
    level: 89,
  },
  {
    title: 'Professional Skills',
    items: ['Communication', 'Leadership', 'Team Collaboration', 'Project Ownership'],
    level: 84,
  },
];

export const projects = [
  {
    title: 'SG Fire — Premium Fire Safety Platform',
    description:
      'Built a complete e-commerce and service management platform for India\'s fire safety industry. The platform allows users to browse ISI-certified products, book professional installation and inspection services, manage orders, and access 24/7 emergency support — all within a polished, production-ready Next.js storefront.',
    stack: ['Next.js', 'Tailwind CSS', 'Node.js', 'MongoDB', 'TypeScript'],
    features: [
      'Full e-commerce flow: product catalog, cart, checkout, and order tracking for ISI-certified fire safety equipment',
      'Appointment booking system for professional services — installation, inspection, AMC plans, and 24/7 emergency response',
      'Category-driven product browsing: fire extinguishers, smoke detectors, alarms, and sprinklers with dark/light mode support',
      'User authentication with sign-in, profile management, and real-time service appointment scheduling',
      'Responsive storefront with hero slider, featured products, fire safety awareness section, and expert services dashboard',
    ],
    github: 'https://github.com/pathak9651',
    demo: 'https://share.google/QRO8R5uycupE3gwbe',
  },
  {
    title: 'SalonAtHome — Mobile Salon Booking App',
    description:
      'Built a fully functional React Native mobile application that lets users discover, browse, and book professional salon services directly at their home. The app delivers a complete end-to-end booking experience — from browsing services and stylist profiles to scheduling, payment, and real-time order tracking — all packaged as a production-ready Android APK.',
    stack: ['React Native', 'Expo', 'Node.js', 'MongoDB', 'JavaScript'],
    type: 'mobile',
    features: [
      'Full service booking flow: browse haircuts, skincare, makeup, and more — select a slot and confirm at-home appointments',
      'Stylist profiles with ratings, specializations, and real-time availability for location-based matching',
      'Cart management and order summary with service breakdown before confirmation',
      'User authentication, profile management, and booking history with status tracking',
      'Production-ready Android APK built with React Native and Expo for real device installation',
    ],
    github: 'https://github.com/pathak9651',
    demo: 'https://wf-artifacts.eascdn.net/builds/store-rg/0ed7539d-960d-4070-b670-8e3db3076420/52fc12d4-58eb-48ac-a1ed-a32606a1ef7a/019eb082-80af-738d-9da3-4bb763aa2a23/application-52fc12d4-58eb-48ac-a1ed-a32606a1ef7a.apk?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=75d871a1a44e598975dd84fa2341c9b0%2F20260622%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260622T154701Z&X-Amz-Expires=900&X-Amz-Signature=0ccb255525ae059bc91afdb135c1ba9b2719700f6b0b68207d444169e9e98c08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject',
    apk: true,
  },
  {
    title: 'Continental Cafe — Premium Next.js Storefront',
    description:
      'Designed and developed a luxurious, modern cafe website featuring an interactive menu and elegant visual storytelling. Built with a responsive dark-mode aesthetic to highlight artisan coffee and dining offerings, utilizing smooth animations and custom typography to deliver a premium user experience.',
    stack: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'Lucide Icons'],
    features: [
      'Interactive, animated menu with category-based filtering (Coffee, Food, Desserts) and dietary tag indicators',
      'Premium brand identity: Elegant dark-mode layout with custom typography, custom cursors, and parallax background sections',
      'Table reservation workflow simulation with client-side form validation and interactive date-time selection',
      'Dynamic shopping cart simulation featuring real-time quantity updates, subtotal calculations, and checkout modals',
      'Responsive design and fluid layouts optimized for all viewport sizes (from mobile screens to large desktop monitors)',
    ],
    github: 'https://github.com/pathak9651/Continental_Cafe',
    demo: 'https://continental-cafe.vercel.app',
  },
  {
    title: 'Sone Physiotherapy Clinic Portal',
    description:
      'Developed a modern healthcare platform for a home-visit physiotherapy clinic. Focused on local SEO, clear service categorization, and streamlined appointment scheduling workflows to connect patients directly with certified therapists.',
    stack: ['React.js', 'Tailwind CSS', 'Framer Motion', 'React Router', 'HTML5'],
    features: [
      'Patient booking integration: Structured service reservation flows with direct click-to-call and messaging triggers',
      'Detailed medical service taxonomy: Specialized sections for orthopedic, neurological, pediatric, and geriatric care plans',
      'Interactive patient testimonials and FAQ accordion panels built with smooth CSS transitions for enhanced UX',
      'High-performance asset optimization: Responsive image styling and code-splitting for fast load times on mobile devices',
      'Semantic HTML structure and metadata tags for optimized local Search Engine Optimization (SEO) rankings',
    ],
    github: 'https://github.com/pathak9651/sone_physiotherapy',
    demo: 'https://sone-physiotherapy-bice.vercel.app',
  },
  {
    title: 'Physiowebb — Appointment Booking System',
    description:
      'Built a robust, enterprise-tier full-stack clinic booking management system. Features secure role-based access, appointment scheduling rules, and an administrative dashboard to manage patient queues and therapist availability.',
    stack: ['Java EE', 'Servlets', 'JSP', 'MySQL', 'JDBC', 'Bootstrap'],
    features: [
      'Role-Based Access Control (RBAC): Distinct modules for Patients (booking/rescheduling) and Admins/Doctors (queue management)',
      'Availability matching algorithm: Dynamically validates date-time slots to prevent double-bookings or therapist schedule conflicts',
      'Secure session management and authentication using Java Servlet filters and secure password hashing algorithms',
      'Relational database architecture: Normalized MySQL schemas with JDBC transactions and clean connection pool management',
      'Admin reports dashboard: Ability to search, filter, and export patient booking logs and operational metrics as structured data',
    ],
    github: 'https://github.com/pathak9651/Physiowebb',
    demo: 'https://github.com/pathak9651/Physiowebb',
  },
  {
    title: 'ZipMart — Cross-Platform E-Commerce Platform',
    description:
      'Developed a comprehensive e-commerce ecosystem consisting of a web administration dashboard, a consumer mobile application, and a shared backend REST API service. Enables seamless product listing, shopping cart operations, and order tracking.',
    stack: ['React', 'React Native', 'Node.js', 'Express.js', 'MongoDB', 'Redux Toolkit'],
    features: [
      'Shared API integration: Unified Node.js/Express backend servicing both the React web panel and the React Native mobile app',
      'End-to-end shopping workflow: Browse products, filter by categories, manage cart state locally, and place secure orders',
      'Merchant management panel: Comprehensive CRUD interfaces for products, categories, stock levels, and transaction history',
      'JWT-based secure authentication: Protected API endpoints with Token-based access validation and secure storage configurations',
      'Non-relational database design: Optimized MongoDB schemas for horizontal scaling, rapid queries, and flexible product attributes',
    ],
    github: 'https://github.com/pathak9651/zipMart',
    demo: 'https://zipmart-roan.vercel.app',
  },
  {
    title: 'Fire Safety System — IoT Monitoring Dashboard',
    description:
      'Completed as part of a technical internship, this project delivers a MERN-stack IoT monitoring platform for commercial buildings. Integrates mock IoT sensors to display temperature, smoke levels, and alert logs on a live operational dashboard.',
    stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Socket.io', 'Recharts'],
    features: [
      'Real-time IoT telemetry: WebSocket-based streaming of simulated sensor metrics (smoke, gas, temperature) directly to the dashboard',
      'Interactive metrics visualization: Dynamic graphs and historical charts generated using Recharts to track safety trends',
      'Automated warning engine: Instant alert banners and audio-visual triggers when sensor metrics exceed safety thresholds',
      'Building/Zone configuration management: Dynamic control panel for registering and assigning IoT sensors to physical building zones',
      'Scalable MERN architecture: Optimized backend middleware for logging API requests, validating payloads, and securing routes',
    ],
    github: 'https://github.com/pathak9651/fireSefaty',
    demo: 'https://fire-sefaty.vercel.app',
  },
  {
    title: 'Happy Birthday Agent — AI Automation System',
    description:
      'Created an AI-driven marketing and greeting automation platform. Integrates Large Language Models to craft personalized messages, connected with scheduling workers to deliver greetings automatically via email at the optimal time.',
    stack: ['Node.js', 'React.js', 'Gemini API', 'Nodemailer', 'Tailwind CSS', 'Node-Cron'],
    features: [
      'Generative AI personalization: Integrated Gemini API to write contextual, custom greetings based on user profiles and tone settings',
      'Automated scheduling engine: Background worker powered by Node-Cron to scan database records and send emails on schedule',
      'Bulk list management: Import contacts via CSV, group recipients into cohorts, and assign default message styles',
      'Interactive UI console: React dashboard to monitor pending greetings, test prompt outputs, and review outbound email logs',
      'Secure delivery pipelines: Configured SMTP transport layers with secure environment variables and automated retry policies',
    ],
    github: 'https://github.com/pathak9651/Happy_Birthday_Agent',
    demo: 'https://happy-birthday-agent-frontend.vercel.app/',
  },
];


export const experiences = [
  {
    role: 'Full Stack Summer Intern',
    company: 'Invas Technologies',
    period: 'Current · 2 Months',
    status: 'Current',
    description:
      'Working on Smart Kheti, a full stack agriculture-focused platform that combines web development with machine learning for practical farming support.',
    points: [
      'Building and improving website features for the Smart Kheti project.',
      'Working on a plant disease detection machine learning model.',
      'Integrating the ML model with the web platform to support intelligent crop-health analysis.',
      'Collaborating on frontend, backend, and model-integration workflows in a real project environment.',
    ],
    stack: ['Full Stack Development', 'Machine Learning', 'Model Integration', 'Smart Kheti'],
  },
  {
    role: 'Intern',
    company: 'Invas Technologies',
    period: '45 Days',
    status: 'Completed',
    description:
      'Completed an internship focused on the Fire Safety project, where I worked on IoT-enabled website integration and management dashboard workflows.',
    points: [
      'Worked on the Fire Safety System project with a practical safety-monitoring use case.',
      'Integrated IoT device workflows with the fire safety website.',
      'Contributed to the management dashboard for monitoring, data handling, and operational visibility.',
      'Gained hands-on exposure to real-world software development, project delivery, and technical collaboration.',
    ],
    stack: ['Fire Safety System', 'IoT Integration', 'Management Dashboard', 'Web Development'],
  },
];

export const achievements = [
  {
    title: 'Data Science Workshop',
    organization: 'IIT Kanpur',
    period: '2 Days',
    description:
      'Completed a two-day workshop focused on data science concepts, practical learning, and analytical problem-solving.',
  },
  {
    title: 'Paper Presentation',
    organization: 'Central University of Jharkhand',
    period: '2-Day National Seminar',
    description:
      'Presented a paper at the national seminar on Cybersecurity in the Age of AI and ML, exploring the intersection of security, artificial intelligence, and machine learning.',
  },
];

export const socials = [
  { label: 'GitHub', href: profile.github },
  { label: 'LinkedIn', href: profile.linkedin },
  { label: 'Email', href: `mailto:${profile.email}` },
  { label: 'Phone', href: 'tel:+917307645571' },
];

