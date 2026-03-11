import { FaBookOpen, FaChalkboardTeacher, FaMicroscope, FaLaptopCode } from "react-icons/fa";

export const teachingAreas = [
  {
    icon: <FaBookOpen className="text-blue-900 text-3xl mb-2" />,
    title: "Undergraduate Courses",
    description:
      "We offer foundational and advanced undergraduate courses in civil engineering, computational methods, organizational behavior, and engineering leadership, designed to build critical thinking and hands-on skills."
  },
  {
    icon: <FaChalkboardTeacher className="text-blue-900 text-3xl mb-2" />,
    title: "Graduate Courses & Seminars",
    description:
      "Our seminars and graduate-level courses explore contemporary research topics including numerical methods, geotechnics, structural mechanics, and modern HR practices, fostering inquiry and professional growth."
  },
  {
    icon: <FaMicroscope className="text-blue-900 text-3xl mb-2" />,
    title: "Mentored Research",
    description:
      "Students and mentees participate in customized research experiences spanning computational modeling, high-performance computing, organizational culture, and interdisciplinary engineering projects."
  },
  {
    icon: <FaLaptopCode className="text-blue-900 text-3xl mb-2" />,
    title: "Workshops & Training",
    description:
      "We facilitate career-enabling skill workshops in coding, simulation software, contemporary HR tools, and leadership—connecting research, industry, and lifelong learning."
  }
];