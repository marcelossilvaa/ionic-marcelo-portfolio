import Html from '../arquive/icons/html-5.png';
import Javascript from '../arquive/icons/js.png';
import React from '../arquive/icons/react.png';
import Nextjs from '../arquive/icons/nextjs.png';
import Git from '../arquive/icons/git.png';
import TypeScript from '../arquive/icons/typescript.svg';
import Css from '../arquive/icons/css-3.png';
import Tailwind from '../arquive/icons/tailwind.png';

import UFS from '../arquive/assets/ufs.png';
import UniAmerica from '../arquive/assets/uniamerica.png';
import Alura from '../arquive/assets/alura.png';
import XPe from '../arquive/assets/xpe.png';
import DIO from '../arquive/assets/dio.png';


import AIESEC from '../arquive/assets/AIESEC.png';
import CEMP from '../arquive/assets/CEMP.png';
import CEJP from '../arquive/assets/CEJP.png';
import inkPen from '../arquive/assets/inkPen.jpg';
import Vasta from '../arquive/assets/vasta.png';

import NostalgiaFlix from '../arquive/assets/projectsImage/NostalgiaFlix.png';
import AluraGeek from '../arquive/assets/projectsImage/AluraGeek.png';
import Box33 from '../arquive/assets/projectsImage/Box33.png';
import Flamengo from '../arquive/assets/projectsImage/Flamengo.png';
import GDXConsultoria from '../arquive/assets/projectsImage/GDXConsultoria.png';
import inkPenSite from '../arquive/assets/projectsImage/inkPenSite.png';


export const dataHeader = [
  {
    id: 1,
    href: '#aboutMe',
    text: 'Sobre mim',
  },
  {
    id: 2,
    href: '#skills',
    text: 'Skills',
  },
  {
    id: 3,
    href: '#academicEducation',
    text: 'Formação',
  },
  {
    id: 4,
    href: '#projects',
    text: 'Projetos',
  },
  {
    id: 5,
    href: '#contact',
    text: 'marcelo_810@hotmail.com',
  },
];

export const dataBanner = [
  {
    id: 1,
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/marcelossilva1/',
  },
  {
    id: 2,
    title: 'GitHub',
    link: 'https://github.com/marcelossilvaa',
  },
  {
    id: 3,
    title: 'Currículo',
    link: 'https://drive.google.com/drive/folders/1ALrPuM_eH1-gyth63X7OcetRmCWdrWlY?usp=share_link',
  },
  {
    id: 4,
    title: 'Instagram',
    link: 'https://www.instagram.com/marcelossilva1/',
  },
];

export const dataSkills = [
  {
    id: 1,
    icon: Html,
    text: 'HTML',
  },
  {
    id: 2,
    icon: Css,
    text: 'CSS',
  },
  {
    id: 3,
    icon: Javascript,
    text: 'JavaScript',
  },
  {
    id: 4,
    icon: Git,
    text: 'Git e GitHub',
  },
  {
    id: 5,
    icon: TypeScript,
    text: 'TypeScript',
  },
  {
    id: 6,
    icon: Tailwind,
    text: 'TailwindCSS',
  },
  {
    id: 7,
    icon: React,
    text: 'React',
  },
  {
    id: 8,
    icon: Nextjs,
    text: 'NextJS',
  },
];

export const dataAcademic = [
  {
    id: 1,
    image: UFS,
    title: 'Engenharia de Petróleo',
    date: '2019 - 2022 | trancado',
    institution: 'UFS',
  },
  {
    id: 2,
    image: UniAmerica,
    title: 'Ciência da Computação',
    date: '2021 - em andamento',
    institution: 'UniAmerica',
  },
  {
    id: 3,
    image: Alura,
    title: 'Formação Front-End',
    date: '2022 - 2023',
    institution: 'Alura',
  },
  {
    id: 4,
    image: XPe,
    title: 'Bootcamp React',
    date: '2023',
    institution: 'XPe',
  },
  {
    id: 4,
    image: DIO,
    title: 'Bootcamp TypeScript',
    date: '2024 - até o momento',
    institution: 'DIO',
  },
];

export const dataProfessional = [
  {
    id: 1,
    image: AIESEC,
    title: 'Voluntariado',
    date: '2021',
    institution: 'AIESEC',
  },
  {
    id: 2,
    image: CEMP,
    title: 'Educação Empreendedora',
    date: '2022',
    institution: 'CEMP - UFS',
  },
  {
    id: 3,
    image: CEJP,
    title: 'Professor',
    date: '2023',
    institution: 'CEJP',
  },
  {
    id: 4,
    image: inkPen,
    title: 'Co Founder & Dev Front End',
    date: '2023 - 2024',
    institution: 'inkPen',
  },
  {
    id: 5,
    image: Vasta,
    title: 'Desenvolvedor Front End',
    date: '2024 - até o momento',
    institution: 'Vasta',
  },
];

export const projectsData = [
  {
    id: '1',
    title: 'Alura Geek',
    subTitle: 'Simulação ecommerce',
    repoLink: '',
    demoLink: 'https://alura-geek-ruby.vercel.app/',
    image: AluraGeek,
    technologies: [
      {
        name: 'React',
        image: React,
      },
      {
        name: 'Tailwind',
        image: Tailwind,
      },
    ],
  },
  {
    id: '2',
    title: 'Nostalgia Flix',
    subTitle: 'Simulação de streaming',
    repoLink: 'https://github.com/marcelossilvaa/AluraFlix',
    demoLink: 'https://nostalgia-flix.vercel.app/',
    image: NostalgiaFlix,
    technologies: [
      {
        name: 'Next',
        image: Nextjs,
      },
      {
        name: 'Tailwind',
        image: Tailwind,
      },
    ],
  },
  {
    id: '3',
    title: 'Box33 Enigmas',
    subTitle: 'Site de Enigmas',
    repoLink: 'https://github.com/marcelossilvaa/Box33',
    demoLink: 'https://box33enigmas.vercel.app/',
    image: Box33,
    technologies: [
      {
        name: 'React',
        image: React,
      },
      {
        name: 'Tailwind',
        image: Tailwind,
      },
    ],
  },
  {
    id: '4',
    title: 'Elenco Flamengo',
    subTitle: 'Exibição 2023',
    repoLink: 'https://github.com/marcelossilvaa/flamengo-team-roster',
    demoLink: 'https://flamengo-team-roster.vercel.app/',
    image: Flamengo,
    technologies: [
      {
        name: 'React',
        image: React,
      },
      {
        name: 'Tailwind',
        image: Tailwind,
      },
    ],
  },
  {
    id: '5',
    title: 'GDX Consultoria',
    subTitle: 'Resolução de problemas aereos',
    repoLink: '',
    demoLink: 'http://www.aerodemandas.com.br/',
    image: GDXConsultoria,
    technologies: [
      {
        name: 'NextJs',
        image: Nextjs,
      },
      {
        name: 'Tailwind',
        image: Tailwind,
      },
    ],
  },
  {
    id: '6',
    title: 'inkPen',
    subTitle: 'Site de apresentação do MVP',
    repoLink: '',
    demoLink: 'http://www.inkpen.com.br/',
    image: inkPenSite,
    technologies: [
      {
        name: 'NextJs',
        image: Nextjs,
      },
      {
        name: 'Tailwind',
        image: Tailwind,
      },
    ],
  },
];
