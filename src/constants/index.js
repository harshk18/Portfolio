import {
  web,
  software,
  backend,
  sport,
  cpp,
  github2,
  nextjs,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  threejs,
  git,
  SchoolLogo,
  MaitLogo,
  meals,
  youtube,
  codepen,
  meetups,
  expense,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Software Developer(C++)",
    icon: software,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Sports Enthusiast",
    icon: sport,
  },
];

const technologies = [
  {
    name: "CPP",
    icon: cpp,
  },
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
    name: "Next JS",
    icon: nextjs,
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
    name: "git",
    icon: git,
  },
  {
    name: "Github",
    icon: github2,
  },
];

const education = [
  {
    title: "Secondary School",
    institute_name: "Lilawati Vidya Mandir Sr. Sec. School",
    icon: SchoolLogo,
    iconBg: "#E6DEDD",
    date: "2017 - 2018",
    points: [
      "Secured 91.6% in Secondary School Examination, march 2018 conducted by CBSE",
    ],
  },
  {
    title: "Senior Secondary School",
    institute_name: "Lilawati Vidya Mandir Sr. Sec. School",
    icon: SchoolLogo,
    iconBg: "#E6DEDD",
    date: "2019 -  2020",
    points: [
      "Secured 91.6% in Senior School Certificate Examination, 2020 conducted by CBSE",
    ],
  },
  {
    title: "B.Tech ECE",
    institute_name: "Maharaja Agrasen Institute of Technology (MAIT) (GGSIPU)",
    icon: MaitLogo,
    iconBg: "#E6DEDD",
    date: "2020 -  2024",
    points: [
      "Pursuing B.Tech in Electronics and Communication Engineering(ECE) with an Aggregate CGPA of 9.321",
    ],
  },
];

const projects = [
  {
    name: "React Meals",
    description:
      "User-friendly food ordering website: homepage displays items, Add button updates cart. Cart shows ordered items and total cost. Users can modify orders by adding/removing items. Checkout with Order button, fill customer details in form, Confirm button sends order",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: meals,
    deployment_link: "https://reactmealsorder.netlify.app/",
    source_code_link: "https://github.com/harshk18/FoodOrderApp",
  },
  {
    name: "Youtube-Clone",
    description:
      "A fully functional and fully responsive YouTube clone single-page application. With this YouTube clone, users can search for videos, watch them and even get custom video recommendations.The app is designed to look and function just like the real YouTube website, with a clean and modern UI.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Youtube API",
        color: "pink-text-gradient",
      },
    ],
    image: youtube,
    deployment_link: "https://harsh-youtube-clone.netlify.app/",
    source_code_link: "https://github.com/harshk18/Youtube-Clone",
  },
  {
    name: "Codepen-Clone",
    description:
      "A codepen clone which detects HTML, CSS and JavaScript codes written on its collapsable and expandable editors and renders the output according to the code written on these editors. On reloading the webpage the content of the editors remains saved on local storage and doesn't wipe out.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Material UI",
        color: "green-text-gradient",
      },
      {
        name: "CodeMirror",
        color: "pink-text-gradient",
      },
    ],
    image: codepen,
    deployment_link: "https://codepenclone1.netlify.app/",
    source_code_link: "https://github.com/harshk18/Codepen-Clone",
  },
  {
    name: "React Meetups",
    description:
      "React Meetups is a demo application which displays a list of meetups available along with their details. The users can also add new meetups to the list using a simple form. Core features of this app are server-side rendering, responsive design and simplified file based routing.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "Mongo DB",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
    ],
    image: meetups,
    deployment_link: "https://reactmeetupsnextjs.vercel.app/",
    source_code_link:
      "https://github.com/harshk18/React-Meetups_Next.js-Project",
  },
  {
    name: "Expense-Tracker",
    description:
      "A great tool to keep track of all your expenditures throughout the year. With this users can easily input expenses and categorize them by date, amount, and category. Dashboard displays all of user's expenses in a clear and concise way and can also filter your expenses by year.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: expense,
    deployment_link: "https://yearly-expense-tracker.netlify.app/",
    source_code_link: "https://github.com/harshk18/Expense-Tracker",
  },
];

export { services, technologies, education, projects };
