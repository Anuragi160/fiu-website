import { FaMicroscope, FaServer, FaChalkboardTeacher, FaTools } from "react-icons/fa";

export const facilities = [
    {
      icon: <FaMicroscope className="text-blue-600 text-3xl mb-2" />,
      title: "Advanced Simulation Lab",
      description:
        "Equipped with high-powered workstations and industry-standard software for advanced computational mechanics, design analysis, and simulation of discrete systems and materials."
    },
    {
      icon: <FaServer className="text-blue-600 text-3xl mb-2" />,
      title: "High-Performance Computing Cluster",
      description:
        "Local HPC resources for large-scale parallel computing, numerical modeling, and solving complex multi-physics problems, integrated with cloud-enabled tools for scalable research."
    },
    {
      icon: <FaTools className="text-blue-600 text-3xl mb-2" />,
      title: "Materials & Geotechnical Testing Center",
      description:
        "Instrumentation for physical testing, including soil and material strength analysis, load frames, and data acquisition systems supporting cross-disciplinary experimentation."
    },
    {
      icon: <FaChalkboardTeacher className="text-blue-600 text-3xl mb-2" />,
      title: "Collaboration & Innovation Space",
      description:
        "A flexible hub for brainstorming, team seminars, workshops, and hybrid collaboration with remote connectivity for global engagement."
    }
  ];