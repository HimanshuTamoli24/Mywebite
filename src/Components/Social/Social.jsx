import React from "react";
import { social } from "../../Data/Social.jsx";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Social = () => {
    const {textColor,textBg,textHover} = useSelector((state) => state.color);

    return (
        <div className="my-5 p-3.5">
            <h6 className={`  text-xl  text-white ${textColor}`}>
                Connect
            </h6>
            <div className="flex gap-3 mt-4">
                {social.map((social, index) => (
                    <Link
                        key={index}
                        to={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-1 border-[1px] rounded-sm px-1 sm:px-2 py-1 hover:opacity-75 ${textHover} ${textBg} border-current  ${textColor}`}
                    >
                        {social.icon}
                        <span className="hidden sm:block">{social.name}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Social;
