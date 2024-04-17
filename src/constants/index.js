import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Blockchain Developer',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Full Stack Developer Intern',
    company_name: 'Datreon',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Jan 2019 - Dec 2020',
  },
  {
    title: 'Full Stack Developer Intern',
    company_name: 'Pactreon',
    icon: microverse,
    iconBg: '#333333',
    date: 'may 2021 - July 2022',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Pactreon',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Aug 2022 - Aug 2023',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Feooh ',
    icon: dcc,
    iconBg: '#333333',
    date: 'December 2023 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Greens Project',
    description: 'Efficient mapping of green energy production and transactions.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: '',
    demo: '',
  },
  {
    id: 'project-2',
    name: 'Tender Bullet',
    description:
      'Transparent procurement system using blockchain technology.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: '',
    demo: '/',
  },
  {
    id: 'project-3',
    name: 'KisaanChain',
    description: 'Blockchain platform for Indian agriculture to increase transparency and reduce intermediaries.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: '',
    demo: '',
  },
  {
    id: 'project-4',
    name: 'E-Pandit',
    description: ` Developed React Native UI for a user-priest interaction platform.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: '',
    demo: '',
  },
  {
    id: 'project-5',
    name: 'Akasa Airlines',
    description:
      'Created UI components and reusable elements for the booking workflow',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: '',
    demo: '',
  },
];

export { services, technologies, experiences, projects };
