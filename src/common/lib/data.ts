import React from 'react';

import campwithusImg from '@/../public/images/camp-with-us.png';
import carcatalogImg from '@/../public/images/car-catalog.png';
import project3 from '@/../public/images/project3.png';
import projectmanagementImg from '@/../public/images/project-management.png';
import reactfoodImg from '@/../public/images/react-food.png';
import surgeImg from '@/../public/images/surge.png';
import portfolioImg from '@/../public/images/portfolio.png';
import project1 from '@/../public/images/project1.png';
import project2 from '@/../public/images/project2.png';
import { BookIcon, BriefcaseBusinessIcon } from 'lucide-react';

export const links = [
  {
    name: 'Home',
    id: 'home',
  },
  {
    name: 'About',
    id: 'about',
  },
  {
    name: 'Projects',
    id: 'projects',
  },
  {
    name: 'Experience',
    id: 'experience',
  },
  {
    name: 'Skills',
    id: 'skills',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'INTERN ARCHITECT',
    location: 'PDC Architects, Gujarat, India',
    description:
      'Developed technical drawings for projects and created schematic designs, presentations for concept proposals.',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'January 2019 - May 2019',
  },
  {
    title: 'ARCHITECT AND PROJECT MANAGER',
    location: 'Earthscapes Consultancy Pvt. Ltd, Gujarat, India.',
    description:
      'Led sustainable landscape design for large-scale urban and institutional projects, blending ecology, functionality, and stakeholder collaboration.',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'April 2021 - May 2022 ',
  },
] as const;

export const images = {
  campwithusImg,
  carcatalogImg,
  project3,
  projectmanagementImg,
  reactfoodImg,
};

export const projectsData = [
  {
    title: 'Landscape Development of Degraded Mining Site',
    description: `A 77-acre eco-park proposal for an abandoned coal mine in Dhori, Jharkhand, focused on ecological restoration through native planting, bioremediation, and topographic transformation.`,
    tags: ['Ecological Restoration', 'Landscape Planning', 'Rewilding', 'GIS'],
    imageUrl: project1,
    link: '',
  },
  {
    title: 'Revival of Badkhal Lake',
    description:
      'A lake rejuvenation project in Faridabad, Haryana, transforming a dried-up site into a biodiversity hub using urban resilience, floating wetlands, and sustainable water systems.',
    tags: ['Urban Lake Restoration', 'Biodiversity', 'Water Management', 'Landscape Design'],
    imageUrl: project2,
    link: '',
  },
  {
    title: 'Police Training Center, Gujarat',
    description:
      'A sustainable master plan for a 150-acre police training center with climate-sensitive design, native landscaping, and green infrastructure. Created with studio Ardete & Dhruva Landscape.',
    tags: ['Master Planning', 'Sustainable Landscape', 'Professional Practice'],
    imageUrl: project3,
    link: '',
  },
  {
    title: 'Portfolio',
    description: `Portfolio that you're currently viewing! This project showcases my work and provides information about me.`,
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'Framer Motion',
      'Cloudinary',
      'React Email',
      'Tailwind',
    ],
    imageUrl: portfolioImg,
    link: 'https://github.com/bbyc4kes/portfolio',
  },

  {
    title: 'Surge',
    description:
      'Service that allows users to build and manage their own websites with integrated payment processing.',
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'MySQL',
      'Clerk',
      'Stripe Connect',
      'Shadcn',
      'Tailwind',
    ],
    imageUrl: surgeImg,
    link: 'https://github.com/bbyc4kes/surge',
  },
] as const;

export const skillsData = [
  ['JavaScript', '/svgs/javascript-js.svg'],
  ['TypeScript', '/svgs/typescript-icon.svg'],
  ['React', '/svgs/react.svg'],
  ['Next.js', '/svgs/nextjs.svg'],
  ['Node.js', '/svgs/node-js.svg'],
  ['Express', '/svgs/express-original.svg'],
  ['Tailwind', '/svgs/tailwind-css.svg'],
  ['Framer', '/svgs/framer.svg'],
  ['Shadcn', '/svgs/shadcnui.svg'],
  ['Headless', '/svgs/brand-headlessui.svg'],
  ['Redux', '/svgs/redux-original.svg'],
  ['Prisma', '/svgs/file-type-light-prisma.svg'],
  ['MongoDB', '/svgs/mongodb-original.svg'],
  ['PostgreSQL', '/svgs/postgresql.svg'],
  ['MySQL', '/svgs/MySQL.svg'],
  ['Tanstack Query', '/svgs/react-query-seeklogo.svg'],
  ['Tanstack Table', '/svgs/db-table-svgrepo-com.svg'],
  ['Cloudinary', '/svgs/cloudinary.svg'],
  ['Golang', '/svgs/golang.svg'],
  ['Docker', '/svgs/Docker.svg'],
  ['Clerk', '/svgs/clerk.svg'],
  ['Axios', '/svgs/axios.svg'],
  ['HTML', '/svgs/file-type-html.svg'],
  ['CSS', '/svgs/file-type-css.svg'],
  ['Sass', '/svgs/Sass.svg'],
  ['Git', '/svgs/git.svg'],
  ['GitHub', '/svgs/github.svg'],
  ['', '/svgs/etc.svg'],
] as const;
