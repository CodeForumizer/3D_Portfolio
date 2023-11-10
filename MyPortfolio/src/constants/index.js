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
    goc,
    carms,
    nw,
    td,
    ac,
    mobileapp,
    sumz,
    jobsift,
    threejs,
   

  } from "../assets";
  import {dm,rs,prad} from "../assets"
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web & Mobile App Developer",
      icon: web,
    },
    {
      title: "Full-Stack Architecture Design",
      icon: mobile,
    },
    {
      title: "API Development & Integration",
      icon: backend,
    },
    {
      title: "Testing & Debugging",
      icon: creator,
    },
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Programmer Analyst, Application Development",
      company_name: "Statistics Canada [ Government of Canada ]",
      icon: goc,
      iconBg: "#FAF5F4",
      date: "May 2021 - May 2023",
      points: [
        "Independently developed a sophisticated mobile app from scratch, collaborating with cross-functional teams to boost user engagement by 25%.",
        "Led the successful launch of the StatsCAN app with 8.9k downloads on Apple Store and 2.1k downloads on Google Play, maintaining a high average rating of 4-5 stars.",
        "Resolved a critical bug, reducing app crashes by 30%. Mentored new developers and actively contributed to feature development efforts, ensuring high-quality code and fostering a collaborative team culture."
      ],
    },
    {
      title: "Web Developer Co-op",
      company_name: "The Canadian Resident Matching Service",
      icon: carms,
      iconBg: "#F6fdfd",
      date: "Jan 2021 - April 2022",
      points: [
       "Developed a Robot Automation Framework from scratch for two large-scale applications, reducing manual testing efforts by 80% and increasing test coverage by 50%.",
       "Integrated Oracle database using custom Python methods, enhancing test data management within the framework.",
       "Resolved multiple bugs and implemented key enhancements, improving web functionality and boosting site engagement by 20%."
      ],
    },
    {
      title: "Full Stack Developer (Remote)",
      company_name: "NexWave Abstracting Group",
      icon: nw,
      iconBg: "#F6fdfd",
      date: "Jan 2019 - Dec 2019",
      points: [
       "Spearheaded the end-to-end development of an internal title search application, optimizing order processing workflows, resulting in a notable 25% improvement in efficiency and accuracy.",
       "Proficiently managed both front-end & back-end tasks, enhancing the overall user experience by implementing an intuitive interface using React and Node.js.",
       "Played a pivotal role in database architecture & maintenance, ensuring optimal storage and retrieval of extensive datasets through SQL databases, contributing to a 30% increase in data management efficiency."
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "CNET Technologies",
      icon: td,
      iconBg: "#F6fdfd",
      date: "Aug 2017 - July 2018",
      points: [
       "Collaborated with UI/UX designers to create a more user-friendly interface for the Tender Information Service, contributing to a 10% improvement in overall client engagement.",
       "Implemented advanced data analytics tools, leveraging CRM data, & realized a 20% enhancement in sales decision-making.",
       "Ensured a robust & secure CRM system, implementing security measures that fortified databases and protected sensitive client information, contributing to a 15% increase in data security."
      ],
    },
   
  
  ];
  
  const testimonials = [
    {
      testimonial:
        "Forum's exceptional design understanding, client insights, and creative input surpassed expectations. Her clean code and mobile expertise are invaluable. During the Dev lead's leave, she guided decisions and enhanced our product. An outstanding performer and asset to any organization.",
      name: "Rajat Sen",
      designation: "Product Designer",
      company: "Statistics Canada",
      image: rs,
    },
    {
      testimonial:
        "Forum is a great asset as a web developer and is quite talented with automation tools. She helped our team by building automation test suites for our web app. She communicates well and shows a willingness to learn.",
      name: "Pradyumna Addala",
      designation: "Senior Software Engineer",
      company: "Glassdoor",
      image: prad,
    },
    {
      testimonial:
        "Forum's tech expertise, stellar communication, and problem-solving shone throughout the project. She delivered a visually appealing, user-friendly website tailored to our needs. Her dedication and attention to detail ensured project success, earning compliments. Highly recommended as a skilled and reliable software developer.",
      name: "Diana Marunda",
      designation: "Staffing & Recruiter Advisor",
      company: "Fisheries & Oceans Canada",
      image: dm,
    },
  ];
  
  const projects = [
    {
      name: "StatsCAN",
      description:
        "This app provides a wealth of information on Canada's economy, society, and environment, including expert analysis, engaging visuals, intriguing short stories, and insightful articles. It's a comprehensive tool that brings together data and tools to keep you up to date with the latest developments in Canada.",
      tags: [
        {
          name: "react native",
          color: "blue-text-gradient",
        },
        {
          name: "expo",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
      ],
      image: mobileapp,
      source_code_link: "https://www.statcan.gc.ca/en/sc/mobile-applications?HPA=1",
    },
    {
      name: "Sumz",
      description:
        "This application uses OpenAI's GPT model for article summarization. The application is built using ReactJS and Vite, and features a responsive and visually appealing user interface designed with Tailwind CSS. It also includes advanced RTK query API requests that fire conditionally, local storage to save history and more.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "OpenAI",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
      ],
      image: sumz,
      source_code_link: "https://github.com/CodeForumizer/Sumz",
    },
    {
      name: "Jobsift",
      description:
        "Jobsift is an ultra-fast and simple job search tool that gathers job postings from popular websites like LinkedIn, Indeed, Glassdoor, ZipRecruiter, and BeBee. Its functionalities include fetching data from an external API, implementing search and pagination features, creating custom API data fetching hooks, and ensuring clean, organized, and maintainable code with proper architecture.",
      tags: [
        {
          name: "react native",
          color: "blue-text-gradient",
        },
        {
          name: "mobile app",
          color: "green-text-gradient",
        },
        {
          name: "jobstorm",
          color: "pink-text-gradient",
        },
      ],
      image: jobsift,
      source_code_link: "https://github.com/CodeForumizer/Jobsift/tree/main/JobStorm",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  