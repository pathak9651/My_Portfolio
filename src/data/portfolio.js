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
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'React Native'],
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
];

export const projects = [
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
    demo: 'https://your-demo-link.com',
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
    role: 'Ex Intern',
    company: 'Invas Technologies',
    period: '45 Days',
    description:
      'Completed a professional internship with hands-on exposure to real-world software development, backend implementation, and project delivery practices.',
  },
];

export const socials = [
  { label: 'GitHub', href: profile.github },
  { label: 'LinkedIn', href: profile.linkedin },
  { label: 'Email', href: `mailto:${profile.email}` },
  { label: 'Phone', href: 'tel:+917307645571' },
];




