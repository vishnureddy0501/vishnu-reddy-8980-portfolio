const data = {
  personal: {
    name: "Vishnu Vardhan Reddy Gujjula",
    designation: "Full Stack Software Engineer",
    description:
      "Full Stack Software Engineer with 3+ years of experience building scalable web applications, high-performance frontend and backend systems, and distributed architectures.",
    email: "vishnureddy8980@gmail.com",
    phone: "+91 9121808980",
    address: "Ongole, Andhra Pradesh, India",
    github: "https://github.com/vishnureddy0501/",
    linkedIn: "https://www.linkedin.com/in/vishnu-vardhan-reddy-gujjula/",
    leetcode: "https://leetcode.com/u/vishnureddy8980/",
    resume: "https://drive.google.com/file/d/1oQIgvJzXzszKP-RNqyQ3_oYt31bd-ZVo/view?usp=sharing",
  },
  experience: [
    {
      title: "Software Engineer",
      company: "Aviso AI",
      duration: "Feb 2025 – Present",
      technologies: ["Vue.js", "Vuex", "React.js", "Node.js", "Express.js", "REST APIs", "Microservices", "Microfrontends", "MongoDB", "Redis", "AG Grid", "D3.js", "Highcharts", "Chart.js", "Axios"],
      highlights: [
        "Delivered features across Customer Success Intelligence, Sales Engagement, Notification System, and Miki Chat.",
        "Led four engineers, conducted code reviews, and mentored team members.",
        "Built real-time KPI dashboards and improved application performance, reliability, and stability.",
      ],
    },
    {
      title: "Associate Software Engineer",
      company: "Aviso AI",
      duration: "Oct 2023 – Feb 2025",
      technologies: ["Vue.js", "Vuex", "React.js", "Node.js", "Express.js", "REST APIs", "Redis", "MongoDB", "Microservices", "Microfrontends", "AG Grid", "D3.js", "RxJS"],
      highlights: [
        "Enhanced Deals, Forecasts, Activity Intelligence, and Relationship Intelligence.",
        "Built modular microfrontends and led the Vue 2 to Vue 3 migration.",
        "Removed RxJS and refactored production code for maintainability.",
      ],
    },
    {
      title: "Full Stack Developer Intern",
      company: "Backflipt Software Limited",
      duration: "Feb 2023 – May 2023",
      technologies: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "Balkan.js", "shadcn/ui", "Tailwind CSS", "JWT", "Gmail OAuth"],
      highlights: [
        "Resolved production UI issues in a no-code app builder.",
        "Built organizational visualizations and secure JWT and Gmail OAuth authentication.",
      ],
    },
    {
      title: "Software Developer Intern",
      company: "Centre for Development of Advanced Computing (C-DAC)",
      duration: "Jun 2022 – Sep 2022",
      technologies: ["Vue.js", "Vuex", "JavaScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Graph Visualization", "Data Visualization"],
      highlights: [
        "Developed graph-based Teletraffic Engineering prototypes and interactive telecom-network simulations.",
        "Built analytics charts for inspecting traffic patterns and network behavior.",
        "Integrated Express.js APIs and MongoDB for network-data visualization workflows.",
      ],
    },
  ],
  projects: [
    {
      name: "Sales Engagement Platform",
      technologies: ["Vue.js", "Vuex", "JavaScript", "Node.js", "Express.js", "MongoDB", "REST APIs", "Quill.js", "Gmail API", "OAuth", "Responsive Design"],
      result: "Improved user productivity by 30% and campaign response rates by 25%.",
    },
    {
      name: "Customer Success Intelligence",
      technologies: ["Vue.js", "Vuex", "JavaScript", "Node.js", "Express.js", "MongoDB", "REST APIs", "AG Grid", "Microfrontends", "RBAC", "Responsive Design", "Performance Optimization"],
      result: "Unified customer health, account activity, ticket, meeting, usage, and engagement data.",
    },
    {
      name: "Real-Time Chat Application",
      technologies: ["React.js", "JavaScript", "Node.js", "Express.js", "MongoDB", "REST APIs", "WebSockets", "JWT", "RBAC", "Amazon S3", "Responsive Design"],
      result: "Delivered secure low-latency messaging, presence, media sharing, and responsive UI.",
    },
  ],
  education: {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "University College of Engineering, JNTUK",
    duration: "Aug 2019 – May 2023",
    cgpa: "8.5",
    highlights: ["Top four in the department", "Solved 1,000+ competitive-programming problems"],
  },
  achievements: [
    "Solved 800+ LeetCode problems; global rank 55,772",
    "AP EAMCET rank 430, among the top 1%",
    "JEE Main rank 22,000, among the top 2%",
  ],
  skills: {
    languages: ["Python", "C++", "JavaScript", "TypeScript"],
    frontend: ["React.js", "Next.js", "Vue.js", "Vuex", "Redux", "React Native", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "REST APIs", "JWT", "OAuth"],
    data: ["MongoDB", "Redis", "Amazon S3"],
    architecture: ["Microservices", "Microfrontends", "Event-Driven Architecture", "Distributed Systems", "RBAC"],
    tools: ["Git/GitHub", "Docker", "AG Grid", "D3.js", "WebSockets"],
  },
};

export default JSON.stringify(data);
