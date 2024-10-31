import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Accomplished Software Developer with a Master’s in Computer Science and recipient of a prestigious graduate academic scholarship. Nearly 3 years of industry expertise in React, .NET, Python, and JavaScript, managing projects for diverse clients with budgets exceeding $1 million. Eager to drive innovation within collaborative development teams.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "March 2024 - Present",
    role: "Software Developer",
    company: "Zeus Solutions INC ",
    description: `• Developed a React dashboard with effects, page object model, Material UI, and Recharts, integrating real-time data on
renewable energy and carbon credits. Enhanced UI and API efficiency, reducing data loading times by 20%.`,
    technologies: [
      "React.js",
      "Azure",
      "mongoDB",
      "Javascript",
      "Node.js",
      "Express",
      "HTML",
      "CSS",
    ],
  },
  {
    year: "January 2023 - December 2023",
    role: "Teaching Assistant (Computer Vision)",
    company: "Rochester Institute of Technology",
    description: `• Collaborated with professors to streamline grading processes, reducing grading time by 30% while maintaining accuracy.
    • Tutored students, clarifying concepts and providing personalized guidance, boosting exam scores by 25%.`,
    technologies: ["OpenCV", "Python", "C++", "MATLAB"],
  },
  {
    year: "January 2018 - August 2020",
    role: "Analyst & advisory intern",
    company: "Deloitte ",
    description: `• Addressed and rectified critical design gaps in legacy and microservices framework for clients, leading to a notable 30% reduction
    in the customer support team tickets and incidents, improving overall system stability and performance.
    • Implemented Agile development methodologies to streamline the design and deployment process of the BI dashboard, reducing
    time-to-market by 25% and ensuring timely delivery of valuable insights to clients.`,
    technologies: ["NodeJS", "React", "Three.js", "Postgres", "Linux"],
  },
  {
    year: "May 2016 - Jun 2016 ",
    role: "UI/UX Developer",
    company: "Pitchtion.com(Pitchtion Consultancy Pvt. Ltd)",
    description: `Expertly transformed and refined UI elements into visually appealing and intuitive designs, leveraging advanced skills in Figma and Adobe Illustrator.
    
    •Conducted research and analysis of leading industry trends in user experience, identifying key design elements that significantly enhanced user engagement, resulting in a 20% increase in website interaction metrics.    •Engaged in rapid prototyping and iterative design processes, effectively incorporating user feedback to refine and enhance UI/UX designs.`,
    technologies: ["Figma", "Adobe Illustrator", "HTML", "CSS", "Javascript"],
  },
];

export const PROJECTS = [
  {
    title: "Viby: Mood-based music recommendation system",
    image: project1,
    description:
      "Devised a mood analysis tool with 90% accuracy using CNNs and ANNs, seamlessly integrated with the Spotify API to recommend music that aligns with users' current emotions and personal tastes.",
    technologies: [
      "DeepFace",
      "Spotify API",
      "Spotipy",
      "Flask",
      "HTML",
      "CSS",
      "Jinja2",
      "Bootstrap",
    ],
  },
  {
    title: "Flask with flask",
    image: project2,
    description:
      "Architectured an educational blog platform with encrypted user account management and content rendering that adjusts dynamically, while reducing code complexity by 25% through refactoring.",
    technologies: [
      "Flask",
      "HTML",
      "CSS",
      "Jinja2",
      "Bootstrap",
      "SQLAlchemy",
      "SQLite",
    ],
  },
  // {
  //   title: "Portfolio Website",
  //   image: project3,
  //   description:
  //     "A personal portfolio website showcasing projects, skills, and contact information.",
  //   technologies: ["HTML", "CSS", "React", "Bootstrap"],
  // },
  {
    title: "NYC Taxis Data: Database Implementation and Insights Generation ",
    image: project3,
    description:
      "Designed a complex data schema in PostgreSQL and MongoDB to optimize data quality and retrieval capabilities for the Kaggle Taxis data set, resulting in a 30% increase in query speed and efficiency.",
    technologies: ["PostgreSQL", "MongoDB", "Python"],
  },
  {
    title: "Lane detection for automated vehicles",
    image: project4,
    description:
      "Developed and tested a lane detection algorithm using computer vision techniques such as color threshold, edge detection, and Hough transform, resulting in an 80% accuracy rate in identifying lane lines from dash cam videos. Enhanced implementation using Homography transformation to convert the input to a bird’s eye point of view, leading to more accurate lane detection results and increasing overall accuracy to 95%",
    technologies: ["C++", "OpenCV", "Computer Vision"],
  },
  {
    title: "Soccer event detection",
    image: project2,
    description:
      "Developed and tested a lane detection algorithm using computer vision techniques such as color threshold, edge detection, and Hough transform, resulting in an 80% accuracy rate in identifying lane lines from dash cam videos. Enhanced implementation using Homography transformation to convert the input to a bird’s eye point of view, leading to more accurate lane detection results and increasing overall accuracy to 95%",
    technologies: [
      "Python, TensorFlow, Transformers, Parallel GPU Training, AWS, YOLO, Data Labelling Annotation",
    ],
  },
];

export const EDUCATION = [
  {
    school: "Rochester Institute of Technology",
    address: "Rochester, New York",
    degree:
      "MS. in Computer Science with advanced degree in Artificial Intelligence",
    year: "August 2021 - December 2023",
  },
  {
    school: "Kalinga Institute of Industrial Technology",
    address: "Odisha, India",
    degree: "B.Tech in Information Tech",
    year: "June 2014 - May 2018",
  },
];

export const CONTACT = {
  address: "9514, Highland Park Dr, Roseville California",
  phoneNo: "+1 585 710 8365 ",
  email: "muskanmall2202@gmail.com",
};

// • Developed a React Employee Portal with a Node.js and Express backend, utilizing Azure SQL Databases with Sequelize for
//advanced data management. Optimized database queries and implemented lazy loading, resulting in a 20% improvement in
// loading speed and enhanced user experience through efficient data retrieval and real-time updates.
