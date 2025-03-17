import React from "react";
import { FloatingNav } from "../Ui/FloatingNavbar";
import { TextGenerateEffect } from "../Ui/TextEffect";
import Social from "../Social/Social";
import { useSelector } from "react-redux";

const navItems = [
    { name: "Home", link: "/" },
    { name: "Akshra ", link: "/" },
    { name: "Resume", link: "https://drive.google.com/file/d/11RfUhICJztrDTq9rf4JBYY7eolC2aofNd/view?usp=drive_link" },
];

function Header() {
    const { textColor, textHover } = useSelector((state) => state.color);

    return (
        <div className="sm:w-xl w-full mt-32 justify-center items-center">
            {/* Floating Navbar with Dynamic Text Color */}
            <FloatingNav className={textColor} navItems={navItems} />

            {/* Profile Section */}
            <div className="flex w-full items-center p-3.5 justify-center sm:justify-start gap-3.5">
                <div className={`border-2 rounded-full p-1 ${textColor}`}>
                    {/* 1,2,6,9 */}
                    <img className="w-14 h-14 object-cover rounded-full" src="/9.JPG" alt="Logo" />
                </div>
                <div>
                    <h1 className={`text-2xl sm:text-4xl  ${textColor}`}>
                        Himanshu Tamoli
                    </h1>
                    <h6 className={`text-sm   ${textHover} ${textColor}`}>
                        Backend-Frontend Developer
                    </h6>
                </div>
            </div>

            {/* About Section */}
            <div className="my-5 p-3.5">
                <h6 className={` font-itallic text-xl text-white`}>About</h6>
                <TextGenerateEffect
                    className={`w-full flex-wrap font-serif ${textColor}`}
                    words="Hello, I'm a 20-year-old developer from New Delhi. I’m deeply passionate about creating high-performance backend APIs. I love reading Books & People."
                />
            </div>

            {/* Social Links */}
            <Social />
        </div>
    );
}

export default Header;
