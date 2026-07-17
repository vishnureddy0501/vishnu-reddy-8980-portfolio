import { FaGraduationCap, FaLaptopCode } from "react-icons/fa";
import { MdSchool } from "react-icons/md";

export const educations = [
    {
        id: 1,
        title: "B.Tech in Computer Science and Engineering",
        institution: "University College of Engineering, JNTUK · Kakinada, Andhra Pradesh",
        duration: "Aug 2019 – May 2023",
        description:
            "Graduated with a CGPA of 8.5 and ranked among the top four students in the department. Solved 1,000+ competitive-programming problems across platforms including LeetCode and CodeChef.",
        icon: FaGraduationCap,
        completed: true,
    },
    {
        id: 2,
        title: "Higher Secondary Certificate",
        duration: "2017-2019",
        institution: "Vignan Junior College (CGPA: 10.0)",
        description:
            "Completed higher secondary education with a specialization in Physics and Mathematics, building the groundwork for advanced technical studies.",
        completed: true,
        icon: FaLaptopCode,
    },
    {
        id: 3,
        title: "SSLC",
        duration: "2016 - 2017",
        institution: "Apex Techno School (CGPA: 10.0)",
        description:
            "Successfully completed secondary education with a focus on core academic subjects, maintaining consistent performance and discipline.",
        icon: MdSchool,
        completed: true,
    },
];
