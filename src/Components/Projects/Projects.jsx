import { projects } from "../../Data/Project";
import Card from "../Card";
import { MdOutlineAdsClick } from "react-icons/md";
import { useSelector } from "react-redux";

const Projects = () => {
  const { textColor, textHover } = useSelector((state) => state.color);

  return (
    <div className={`my-5 p-4 sm:w-xl w-full ${textColor}`}>
      <h2 className="text-xl font-itallic text-white">Projects</h2>
      <p className="mt-7 text-sm font-serif">
        I've built many projects using different technologies. Here are some of my notable works.
      </p>
      <div className="mt-9 mb-7 grid grid-cols-1 gap-5">
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            links={project.links} // Pass the entire `links` object
            substring={project.stack.trim().split(",").join(" · ")}
            description={project.description}
          />
        ))}
      </div>
      <a
        href="https://github.com/HimanshuTamoli24"
        target="_blank"
        rel="noopener noreferrer"
        className={`text-sm font-medium hover:underline flex items-center gap-1.5 hover:decoration-rose-300/30 hover:underline-offset-2 hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70 ${textColor} ${textHover}/80`}
      >
        View more projects <MdOutlineAdsClick />
      </a>
    </div>
  );
};

export default Projects;
