import project1 from "../assets/projects/mood.jpg";
import project2 from "../assets/projects/blog.png";
import project3 from "../assets/projects/nyc.jpg";
import project4 from "../assets/projects/lane.jpg";

export const HERO_CONTENT = `I’m a full-stack software developer with over 3 years of experience in building, designing, and deploying versatile and reliable software solutions. I’m proficient in programming languages such as JavaScript, Python, C#, and C++, with expertise in backend technologies including ExpressJS, Axios, Flask, and ASP.NET. My skills encompass designing and implementing secure and efficient API architectures (HTTP/RESTful) for seamless data exchange. Experienced in managing SQL and non-relational databases (e.g., SQL Server, PostgreSQL, MySQL, MongoDB), I excel in crafting backend data management layers with integrated search capabilities for efficient data manipulation. On the frontend, I leverage tools like React, React Query, Next.js, TypeScript, Redux, Tailwind, HTML5, CSS3, Jinja2, and Material-UI to build dynamic and responsive applications. I also utilize Git for streamlined workflows and robust version control.`;
export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "March 2024 - Present",
    role: "Software Developer",
    company: "Zeus Solutions INC",
    description: `• Well Site Asset Management System: Created a scalable Well Site Asset System with React, leveraging React Query hooks (useQuery, useMutation, useInfiniteQuery) for efficient real-time stock tracking, order updates, and pagination.
• Engineered a data layer with Express.js, MongoDB, and Microsoft SQL Server, building 31 APIs to handle data from files, SQL databases, and MongoDB, enabling seamless retrieval, storage, and advanced data manipulation with search functionality.
    
• Field Operations Management System: Constructed a Field Operations Management Tool with Next.js, Material UI, and Tailwind CSS, using hooks like useContext, useReducer, and useMemo to create 22 reusable components for a responsive interface.
• Designed a secure backend with Express.js and PostgreSQL, enhancing data interactions through React Query for faster retrieval and reducing API calls by 10%.
    
• Employee Portal Development: Created an Employee Portal in React, optimizing page load speeds by 10% with lazy loading, and employed Material UI and AG Grid for advanced component styling and data display.
• Designed a cloud-hosted architecture in .NET with Entity Framework, deploying 30 APIs and integrating Azure Databases with SCD4 history tables and custom triggers to ensure data integrity.`,
    technologies: [
      "React.js",
      "Next.js",
      "Material UI",
      "Tailwind CSS",
      "React Query",
      "Express.js",
      "MongoDB",
      "Microsoft SQL Server",
      ".NET",
      "Entity Framework",
      "Azure",
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
    role: "Analyst & Advisory Intern",
    company: "Deloitte",
    description: `• Agile BI Dashboard Development: Developed a BI dashboard in React, utilizing D3.js and Chart.js for visualization, achieving 30% component reusability and implementing device-responsive design with Tailwind CSS for adaptable screen displays within an Agile environment.
  • Website Performance Enhancement: Leveraged Next.js for server-side rendering and pre-rendering pages to optimize website performance, improving loading times by 20% on both desktop and mobile devices.
  • Efficient Data Fetching and API Integration: Orchestrated data fetching with Fetch/Axios and RESTful APIs for asynchronous communication, boosting data retrieval efficiency by 25% and enabling smooth, real-time updates throughout the application.`,
    technologies: [
      "React",
      "D3.js",
      "Chart.js",
      "Tailwind CSS",
      "Next.js",
      "Fetch",
      "Axios",
      "RESTful APIs",
    ],
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
  email: "mmall.connect96@gmail.com",
};

// • Developed a React Employee Portal with a Node.js and Express backend, utilizing Azure SQL Databases with Sequelize for
//advanced data management. Optimized database queries and implemented lazy loading, resulting in a 20% improvement in
// loading speed and enhanced user experience through efficient data retrieval and real-time updates.
