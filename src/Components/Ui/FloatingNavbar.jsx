import React, { useState } from "react";
import ColorSelector from "../Selector/Selector";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "motion/react";
import { cn } from "../../lib/utils";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const FloatingNav = ({ navItems, className }) => {
    const { scrollYProgress } = useScroll();
    const [visible, setVisible] = useState(false);
    const { textColor, textBg, textHover } = useSelector((state) => state.color);

    useMotionValueEvent(scrollYProgress, "change", (current) => {
        if (typeof current === "number") {
            let previous = scrollYProgress.getPrevious() || 0;
            let direction = current - previous;
            setVisible(scrollYProgress.get() >= 0.05 && direction < 0);
        }
    });

    return (
        <AnimatePresence mode="wait">
            {visible && (
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.2 }}
                    className={cn(
                        `flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-current/50
                        rounded-full ${textBg} shadow-lg z-[5000] 
                        pr-2 pl-8 py-1 items-center justify-center space-x-4`,
                        className
                    )}
                >
                    {navItems.map((navItem, idx) =>
                        navItem.link.startsWith("http") ? (
                            // ✅ External Links (Opens in a New Tab)
                            <a
                                key={`link-${idx}`}
                                href={navItem.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`relative items-center flex space-x-1 text-sm ${textColor} ${textHover}`}
                            >
                                <span className="sm:block">{navItem.name}</span>
                            </a>
                        ) : (
                            // ✅ Internal Links
                            <Link
                                key={`link-${idx}`}
                                to={navItem.link}
                                onClick={(e) => {
                                    if (navItem.link === "/") {
                                        e.preventDefault();
                                        window.scrollTo({ top: 0, behavior: "smooth" });
                                    }
                                }}
                                className={`relative items-center flex space-x-1 text-sm ${textColor} ${textHover}`}
                            >
                                <span className="sm:block">{navItem.name}</span>
                            </Link>
                        )
                    )}

                    {/* Color Selector Button */}
                    <div className={`rounded-full ${textColor} border-current`}>
                        <ColorSelector />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
