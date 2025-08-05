import { FaGraduationCap, FaLaptopCode, FaUniversity } from "react-icons/fa";
import { MdSchool } from "react-icons/md";

export const educations = [
  {
    id: 1,
    title: "B.Tech (Computer Science)",
    institution: "Jawaharlal Nehru Technological University (CGPA: 8.5)",
    duration: "2019-2023",
    description:
     "Completed Graduation in Computer Science, gaining in-depth knowledge in programming, algorithms, and software engineering. Applied academic learning to real-world scenarios through projects and collaborative work.",
    icon: FaGraduationCap,
    completed: true
  },
  {
    id: 2,
    title: "Higher Secondary Certificate",
    duration: "2017-2019",
    institution: "Vignan Junior College (CGPA: 10.0)",
    description:
      "Completed higher secondary education with a specialization in Biology and Mathematics, building the groundwork for advanced technical studies.",
    completed: true,
    icon: FaLaptopCode
  },
  {
    id: 3,
    title: "SSLC",
    duration: "2016 - 2017",
    institution: "Apex Techno School (CGPA: 10.0)",
    description:
      "Successfully completed secondary education with a focus on core academic subjects, maintaining consistent performance and discipline.",
      icon: MdSchool,
    completed: true
  },
];
