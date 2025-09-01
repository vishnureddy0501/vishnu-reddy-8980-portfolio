import { FaLaptopCode } from "react-icons/fa";
import { FiCpu } from "react-icons/fi";
import { BsLightningCharge } from "react-icons/bs";

export const experiences = [
    {
        id: 1,
        title: "Software Engineer",
        company: "Aviso AI",
        duration: "Oct 2023 – Present",
        location: "Remote",
        icon: BsLightningCharge,
        tech: "Vue JS, Vuex, SCSS, React Native, AG-Grid",
        points: [
            "Implemented software development best practices to ensure optimal performance.",
            "Optimized frontend with code splitting, lazy loading, and caching for speed and scalability.",
            "Integrated email connectivity with OAuth and developed a Gmail inbox module.",
            "Created an email editor with Quill templates and integrated Calendly for scheduling.",
            "Built a dialer feature using Twilio for seamless outbound calling.",
            "Revamped themes and built advanced analytics with D3.js and Ag-Grid.",
            "Addressed critical bugs and drove features under tight deadlines.",
        ],
    },
    {
        id: 2,
        title: "Full Stack Developer Intern",
        company: "Backflipt Software Limited",
        duration: "Feb 2023 – May 2023",
        location: "Hyderabad, Telangana",
        icon: FaLaptopCode,
        tech: "React, Next.js, Express JS, MongoDB, Shadcn/ui, Tailwind",
        points: [
            "Resolved production UI issues for a no-code app builder.",
            "Implemented organization charts with Balkan JS and influence graphs.",
            "Built secure login system with encryption, JWT, Gmail OAuth, and email verification.",
            "Led theme updates for better UI/UX.",
        ],
    },
    {
        id: 3,
        title: "Software Developer Intern",
        company: "Centre for Development of Advanced Computing",
        duration: "June 2022 – Sep 2022",
        location: "Remote",
        icon: FiCpu,
        tech: "Vue JS, Tailwind CSS, Express JS, MongoDB",
        points: [
            "Designed and developed graph-based prototypes for Teletraffic Engineering.",
            "Built visual network simulations for telecom structures.",
            "Implemented analytics charts for traffic pattern insights.",
        ],
    },
];
