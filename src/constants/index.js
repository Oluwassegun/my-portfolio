import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    screenshot,
    auth

  } from "../assets";
  
  export const navLinks = [
    {
      id: "About",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Front End Developer",
      icon: web,
    },
    {
      title: "Full Stack Developer",
      icon: web,
    }
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
   
    {
      name: "git",
      icon: git,
    },
    
  ];
  
  const experiences = [
    {
      title: "Full Stack Developer",
      company_name: "FreeLancer",
  
      iconBg: "#383E56",
      date: "2022 - present",
      points: [
        "Utilized Next.js and associated technologies to develop and maintain web applications for clients.",
        "Fostered collaboration with cross-functional teams, including designers, product managers, and fellow developers, to deliver top-notch products.",
        "Implemented responsive design techniques and ensured compatibility across various browsers.",
        "Actively participated in code reviews, offering valuable feedback to enhance the work of other developers.",
         "Database migrations"
      ],
    },
    {
      title: "Front End Developer",
      company_name: "Avover",
      iconBg: "#E6DEDD",
      date: "FEB 2022 - present",
      points: [
        "Created responsive user interfaces using modern front-end technologies for engaging media experiences.",
        "Implemented robust front-end security measures for user data protection.",
        "Led development and maintenance of the news company's website, ensuring a dynamic and current user experience.",
        "Customised and managed content management systems (CMS) to streamline news article publication and content management.",
        "Designed and implemented responsive, cross-browser compatible user interfaces for both desktop and mobile users.",
        "Developed and maintained server-side applications, databases, and APIs for efficient content retrieval and user data management.",
        "Designed, maintained, and optimised databases to handle large volumes of news articles, user-generated content, and comments.",
        "Implemented robust user authentication and authorisation systems to ensure secure access to premium content and user accounts."
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "E-commerce",
      description:
        "Web-based platform that allows users to search and order most played games, providing a convenient and efficient solution for Gaming needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Next.js",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: 'redux',
          color: 'green-text-gradient'
        },
        {
          name: 'sanity',
          color: 'green-text-gradient'
        },
        {
          name: 'TypeScript',
          color: 'blue-text-gradient'
        },
        {
          name: 'MongoDb',
          color: 'green-text-gradient'
        }
      ],
      image: screenshot,
      source_code_link: "https://nexjs-ecommerce-seven.vercel.app/",
    },
    {
      name: "Next Auth V5",
      description:
        "The application provides secure authentication features, allowing users to seamlessly login, register, and verify their identities. Once logged in, users can easily update their personal information, including their names and details, ensuring a personalized and flexible user experience within the platform.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Next.js",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: 'Prisma',
          color: 'green-text-gradient'
        },
        {
          name: 'PostgreSQL ',
          color: 'green-text-gradient'
        },
        {
          name: 'TypeScript',
          color: 'blue-text-gradient'
        }
      ],
      image: auth,
      source_code_link: "https://next14-auth-masterclass-liart.vercel.app/",
    },

    
  ];
  
  export { services, technologies, experiences, testimonials, projects };