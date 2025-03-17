import { useSelector } from "react-redux";
import { VscLiveShare } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa6";

const Card = ({ title, links, substring, description }) => {
    const { textColor, textHover, textBg } = useSelector((state) => state.color);

    return (
        <div className={`border rounded-lg p-6 shadow-lg ${textBg}`}>
            <h3 className={`text-xl italic ${textColor}`}>{title}</h3>
            <p className="text-gray-400 font-sans">{description}</p>
            <p className="text-gray-500 text-sm  font-mono mt-2">{substring}</p>
            <div className="mt-4 flex gap-4">
                <a
                    href={links.github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-3 py-1  rounded-md ${textHover} ${textColor} transition hover:opacity-80`}
                >
                    <FaGithub />
                    <span className="hidden sm:block">GitHub</span>
                </a>
                <a
                    href={links.live.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-3 py-1  rounded-md ${textHover} ${textColor} transition hover:opacity-80`}
                >
                    <VscLiveShare />
                    <span className="hidden sm:block">Live Demo</span>
                </a>
            </div>
        </div>
    );
};

export default Card;
