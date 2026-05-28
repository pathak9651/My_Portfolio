export const profile = {
  name: 'Ayush Dutt Pathak',
  initials: 'AD',
  title: 'Full Stack Developer | Software Engineering Student | ML Enthusiast',
  tagline:
    'Aspiring software engineer focused on building scalable web applications and intelligent solutions.',
  email: 'pathakayush8194@gmail.com',
  secondaryEmail: 'ayush.23190503020@cuj.ac.in',
  phone: '+91 7307645571',
  github: 'https://github.com/',
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
  { label: 'Projects Delivered', value: '5+' },
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
    title: 'Continental Cafe',
    description:
      'Built a polished cafe website experience to showcase the brand, menu, and online presence with a clean, responsive layout.',
    stack: ['React.js', 'Tailwind CSS', 'JavaScript', 'HTML5'],
    features: [
      'Responsive layout optimized for desktop and mobile',
      'Brand-focused presentation for food and cafe offerings',
      'Direct access to live demo and source code',
    ],
    github: 'https://github.com/pathak9651/Continental_Cafe',
    demo: 'https://continental-cafe.vercel.app',
  },
  {
    title: 'Sone Physiotherapy Website',
    description:
      'Built a modern, responsive physiotherapy website focused on showcasing home-visit services and making appointment booking simple through direct mobile contact.',
    stack: ['React.js', 'Tailwind CSS', 'JavaScript', 'HTML5'],
    features: [
      'Clean and responsive UI with mobile-first design',
      'Interactive sections including Navbar, Carousel, Services, About, and Contact',
      'Direct appointment booking via phone without database integration',
      'Optimized for fast loading and real-world client usability',
    ],
    github: 'https://github.com/pathak9651/sone_physiotherapy',
    demo: 'https://sone-physiotherapy-bice.vercel.app',
  },
  {
    title: 'Appointment Booking System',
    description:
      'Developed a full-stack web application for managing appointments with booking, rescheduling, and cancellation workflows.',
    stack: ['Java', 'JSP', 'Servlets', 'MySQL'],
    features: ['User authentication', 'Appointment tracking', 'Admin approval/rejection system'],
    github: 'https://github.com/pathak9651/Physiowebb',
    demo: 'https://your-demo-link.com',
  },
  {
    title: 'ZipMart',
    description:
      'Built a comprehensive e-commerce ecosystem that includes a full-stack web platform and mobile applications connected through shared backend services.',
    stack: ['React', 'React Native', 'Node.js', 'MongoDB'],
    features: ['Full-stack web application', 'Mobile applications', 'RESTful APIs', 'Product and user management'],
    github: 'https://github.com/pathak9651/spMart',
    demo: 'https://zipmart-roan.vercel.app',
  },
  {
    title: 'Fire Safety System',
    description:
      'Created a MERN-based safety monitoring and management system with an interactive dashboard and scalable backend architecture.',
    stack: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    features: ['Real-time data handling', 'Dashboard interface', 'Scalable architecture'],
    github: 'https://github.com/pathak9651/fireSefaty',
    demo: 'https://fire-sefaty.vercel.app',
  },
  {
    title: 'Happy Birthday Agent',
    description:
      'Created an AI-powered automation system that generates personalized birthday messages and streamlines delivery workflows.',
    stack: ['Node.js', 'AI APIs'],
    features: ['AI-generated messages', 'Automation workflows', 'Custom prompt handling'],
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

