import React from "react";
import { IoIosMail } from "react-icons/io";
import { social } from "../../Data/Social";
import { useSelector } from "react-redux";

function Footer() {
    const {textColor,textHover,textBg} = useSelector((state) => state.color);

    return (
        <div className="my-5 p-3.5">
            <div className="flex flex-col gap-3 my-12">
                <h1 className={`text-xl font-itallic text-white ${textColor}`}>
                    Wanna Connect with me?
                </h1>
                <h6 className={`text-sm font-serif opacity-80 ${textColor}`}>
                    Feel free to connect with me anyway you like, I would love to meet new people.
                </h6>

                <div className="hover:text-white/80">
                    <a
                        className={`flex items-center gap-2 hover:underline  opacity-65  ${textHover} ${textColor}`}
                        href="mailto:himanshutamoli24@gmail.com"
                    >
                        <IoIosMail className=" font-sans text-lg" /> himanshutamoli24@gmail.com
                    </a>
                </div>

                <span className={`w-full border-b border-current ${textColor}`}></span>
            </div>

            {/* Social Icons */}
            <div className="w-full flex gap-x-5 py-2.5 justify-center items-center">
                {social.map((social, index) => (
                    <a key={index} className={`text-2xl hover:opacity-75 ${textColor}   rounded-full ${textHover} ${textBg}`} href={social.link} target="_blank" rel="noopener noreferrer">
                        {social.icon}
                    </a>
                ))}
            </div>

            <p className={`text-[10px] text-center text-white/50`}>
                Thank you for your visit.
            </p>
        </div>
    );
}

export default Footer;
