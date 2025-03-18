import React from "react";
import { IoIosMail } from "react-icons/io";
import { social } from "../../Data/Social";
import { useSelector } from "react-redux";

function Footer() {
    const { textColor, textHover, textBg } = useSelector((state) => state.color);

    return (
        <div className="my-5 p-3.5 w-full sm:w-xl">
            <div className="flex  justify-between w-full items-center sm:gap-8">
                <div className="flex flex-col gap-3 my-12">
                    <h1 className={`text-xl italic text-white ${textColor}`}>
                        Wanna Connect with me?
                    </h1>

                    <h6 className={`text-sm font-serif opacity-80 ${textColor}`}>
                        Feel free to reach out—I'd love to connect!
                    </h6>

                    <div className="hover:text-white/80">
                        <a
                            className={`flex items-center gap-2 hover:underline ${textHover} ${textColor}`}
                            href="mailto:himanshutamoli24@gmail.com"
                        >
                            <IoIosMail className="text-lg" /> himanshutamoli24@gmail.com
                        </a>
                    </div>

                    <span className={`w-full border-b border-current ${textColor}`}></span>
                </div>

                <img
                    src="https://i.pinimg.com/originals/bb/dd/16/bbdd1661c0f5bcbb82d8ead3074b4fab.gif"
                    alt="Pinterest Inspiration"
                    className={`w-25  rounded-2xl  border-2 border-current/70 ${textColor} mx-1 sm:w-30`}
                />
            </div>

            {/* Social Icons */}
            <div className="w-full flex gap-x-5 py-2.5 justify-center items-center">
                {social.map((social, index) => (
                    <a
                        key={index}
                        className={`text-2xl hover:opacity-75 rounded-full ${textColor} ${textHover} ${textBg}`}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {social.icon}
                    </a>
                ))}
            </div>

            <p className="text-[10px] text-center text-white/50">Thank you for your visit.</p>
        </div>
    );
}

export default Footer;
