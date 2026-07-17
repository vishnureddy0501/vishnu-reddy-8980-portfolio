import { FaLaptopCode } from "react-icons/fa";
import { BsLightningCharge } from "react-icons/bs";
import { FiCpu } from "react-icons/fi";

export const experiences = [
    {
        id: 1,
        title: "Software Engineer",
        company: "Aviso AI",
        duration: "Feb 2025 – Present",
        location: "Remote",
        icon: BsLightningCharge,
        tech: [
            "Vue.js", "Vuex", "React.js", "Node.js", "Express.js", "REST APIs",
            "Microservices", "Microfrontends", "MongoDB", "Redis", "AG Grid",
            "D3.js", "Highcharts", "Chart.js", "Axios",
        ],
        points: [
            "Contributed to multiple product modules including Customer Success Intelligence, Sales Engagement, Notification System, and Miki Chat, delivering end-to-end features across the application.",
            "Led a team of four engineers, conducted code reviews, mentored team members, and collaborated with cross-functional teams to ensure high-quality, scalable software delivery.",
            "Built interactive dashboards and data visualizations for real-time KPI tracking and business analytics.",
            "Resolved production issues, debugged complex edge cases, and improved application reliability and stability.",
            "Optimized frontend and backend performance by reducing page-load times and API-response latency, improving overall application efficiency.",
        ],
    },
    {
        id: 2,
        title: "Associate Software Engineer",
        company: "Aviso AI",
        duration: "Oct 2023 – Feb 2025",
        location: "Remote",
        icon: BsLightningCharge,
        tech: [
            "Vue.js", "Vuex", "React.js", "Node.js", "Express.js", "REST APIs",
            "Redis", "MongoDB", "Microservices", "Microfrontends", "AG Grid",
            "D3.js", "RxJS",
        ],
        points: [
            "Worked on core modules including Deals, Forecasts, Activity Intelligence, and Relationship Intelligence, contributing to key product enhancements and performance improvements.",
            "Implemented scalable, modular architectures using microfrontends and optimized application performance through code splitting and lazy loading.",
            "Contributed to theme revamps, complex analytics visualizations, and dynamic data-management features to improve usability and insights.",
            "Resolved customer-reported production issues under tight deadlines, led the Vue 2 to Vue 3 migration, eliminated RxJS across the application, and refactored production code to improve maintainability.",
        ],
    },
    {
        id: 3,
        title: "Full Stack Developer Intern",
        company: "Backflipt Software Limited",
        duration: "Feb 2023 – May 2023",
        location: "Hyderabad, Telangana",
        icon: FaLaptopCode,
        tech: [
            "React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "Balkan.js",
            "shadcn/ui", "Tailwind CSS", "JWT", "Gmail OAuth", "Email Verification",
        ],
        points: [
            "Resolved critical UI production issues for a no-code app builder platform, ensuring a seamless user experience and platform stability.",
            "Leveraged Balkan.js to build interactive organizational hierarchy visualizations and implemented relationship graphs and influence mapping for faster collaboration and organizational insight.",
            "Developed a secure authentication system with encryption, JWT-based login, Gmail OAuth, and email verification, along with theme enhancements to improve UI/UX consistency.",
        ],
    },
    {
        id: 4,
        title: "Software Developer Intern",
        company: "Centre for Development of Advanced Computing (C-DAC)",
        duration: "Jun 2022 – Sep 2022",
        location: "Remote",
        icon: FiCpu,
        tech: [
            "Vue.js", "Vuex", "JavaScript", "Tailwind CSS", "Node.js",
            "Express.js", "MongoDB", "Graph Visualization", "Data Visualization",
        ],
        points: [
            "Designed and developed graph-based prototypes for Teletraffic Engineering, translating telecom-network concepts into interactive web visualizations.",
            "Built visual network simulations for telecom structures using reusable Vue.js components and responsive Tailwind CSS interfaces.",
            "Implemented analytics charts and graph visualizations to help users inspect traffic patterns and network behavior.",
            "Integrated Express.js APIs with MongoDB to support network data storage, retrieval, and visualization workflows.",
        ],
    },
];
