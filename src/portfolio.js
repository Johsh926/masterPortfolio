/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Joshua's Portfolio",
  description: "Someone who is practicing, learning, and applying coding.",
  og: {
    title: "Joshua Porras Portfolio",
    type: "website",
    url: "https://www.facebook.com/joshua.porras2002//",
  },
};

//Home Page
const greeting = {
  title: "Joshua Porras",
  logo_name: "JoshuaPorras",
  nickname: "Johsh",
  subTitle: "Someone who is practicing, learning, and applying coding.",
  resumeLink: "https://drive.google.com/drive/u/0/my-drive",
  portfolio_repository: "https://github.com/Johsh926/masterPortfolio",
  githubProfile: "https://github.com/Johsh926",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  //github: "https://github.com/Johsh926",
  // linkedin: "https://www.linkedin.com/in/a shutosh-hathidara-88710b138/",
  //gmail: "joshuaporras12345@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  //facebook: "https://www.facebook.com/joshua.porras2002/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/Johsh926",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@johsh6570",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:joshuaporras12345@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/joshua.porras2002/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ An amateur and currently learning about python",
        "⚡ Learning more about algorithms",
        "⚡ Future data scientist???",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Learning more about the front-end",
        "⚡ Learning more about the back-end",
        "⚡ Currently using express and node for the back-end",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Not experience working on multiple cloud platforms",
        "⚡ Not hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Not deploying deep learning models on cloud to use on mobile devices",
        "⚡ Not setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Willing to learn",
        "⚡ Can get inspirations fast",
        "⚡ Trying art sometimes",
      ],
      softwareSkills: [
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/joshuaporras",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Western Institute of Iloilo",
      subtitle: "B.S. in Information Technology",
      logo_path: "wit.png",
      alt_name: "wit logo",
      duration: "2024 - ",
      descriptions: [
        "⚡ I have studied the basics of HTML, Java, Javascript, CSS, Python, and PHP ",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I am currently studying, 2nd Year.",
      ],
      website_link: "https://westerninstituteoftechnology.com/",
    },
  ],
};

const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship, and Volunteership",
  description:
    "I currently have no work experience but I am willing to join if it means I can improve my coding skills and learn more.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Machine Learning Engineer",
          company: "TikTok Inc.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "June 2023 - Present",
          location: "San Jose, CA, USA",
          description:
            "Improving ads ranking models on the core TikTok product. Experience working on modeling two-tower architectures like DeepFM, Wide & deep learning, etc. Working on Large Language Models (LLM) pretraining and Large Multi-modal Model (LMM) finetuning strategies.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [],
    },
    {
      title: "Volunteerships",
      experiences: [],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects uses the basics of multiple different languages, but I do try.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "awesome-todos-app",
      name: "Awesome-todos-app",
      createdAt: "2025-03-11T00:00:00Z",
      description: "An app that shows your todos.",
      url: "https://awesome-todos-app-yu0y.onrender.com",
    },
    {
      id: "portfolio",
      name: "My Portfolio",
      createdAt: "2025-03-31T00:00:00Z",
      description: "Forked and edited a portfolio",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "me.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I'll help with the best of my abilities.",
  },
  blogSection: {
    title: "Blogs",
    subtitle: "The blogs of the person where I forked this from.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "The guy's address, Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
