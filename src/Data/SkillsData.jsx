
import {
    FaJs,
    FaCuttlefish,
    FaPython,
    FaGitAlt,
    FaHtml5,
    FaCss3Alt
} from "react-icons/fa";
import { FaJava } from "react-icons/fa";

import { DiReact } from "react-icons/di";
import {
    SiExpress,
    SiNextdotjs,
    SiMongodb,
    SiRedux,
    SiTypescript,
    SiGraphql,

} from "react-icons/si";

import { AiOutlineAppstoreAdd } from "react-icons/ai"; export const skills = [
    {
        category: "Languages",
        items: [
            { name: "C++", icon: <FaCuttlefish className="text-blue-600" /> },
            { name: "Java", icon: <FaJava className="text-blue-600" /> },
            { name: "Python", icon: <FaPython className="text-blue-400" /> },
        ],
    },
    {
        category: "Frontend",
        items: [
            { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
            { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
            { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
            { name: "Tailwind", icon: <FaCuttlefish className="text-teal-500" /> },
            { name: "ReactJS", icon: <DiReact className="text-blue-400" /> },
            { name: "Rtk", icon: <SiRedux className="text-purple-500" /> },
            { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
        ],
    },
    {
        category: "Backend",
        items: [
            { name: "Node.js", icon: <FaCuttlefish className="text-green-500" /> },
            { name: "ExpressJS", icon: <SiExpress className="text-gray-500" /> },
            { name: "JWT", icon: <AiOutlineAppstoreAdd className="text-green-500" /> },
        ],
    },
    {
        category: "Database & Cloud",
        items: [
            { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
            { name: "Mongoose", icon: <FaCuttlefish className="text-red-500" /> },
            { name: "Cloudinary", icon: <FaCuttlefish className="text-blue-500" /> },
            { name: "Appwrite", icon: <FaCuttlefish className="text-pink-500" /> },
        ],
    },
    {
        category: "Tools & Others",
        items: [
            { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
            { name: "Postman", icon: <FaCuttlefish className="text-red-500" /> },
            { name: "Vercel", icon: <FaCuttlefish className="text-gray-900" /> },
            { name: "GraphQL", icon: <SiGraphql className="text-pink-500" /> },
        ],
    },

];
