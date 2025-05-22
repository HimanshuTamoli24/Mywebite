import { useDispatch } from "react-redux";
import { setTheme } from "../../Store/ColorSlice";
import { useState, useEffect, useRef } from "react";
import { GrRadialSelected } from "react-icons/gr";

const colors = {
    CustomGreen: {
        textColor: "text-[#2cda5c]",
        textHover: "hover:text-[#249c47]",
        textBg: "bg-[#2cda5c]/10",
        Bg: "bg-[#2cda5c]"
    },
    CustomYellow: {
        textColor: "text-[#ffd125]",
        textHover: "hover:text-[#cc9c1e]",
        textBg: "bg-[#ffd125]/10",
        Bg: "bg-[#ffd125]"
    },
    CustomBlue: {
        textColor: "text-[#41a0fb]",
        textHover: "hover:text-[#3478c2]",
        textBg: "bg-[#41a0fb]/10",
        Bg: "bg-[#41a0fb]"
    },
    CustomPeace: {
        textColor: "text-[#ff685d]",
        textHover: "hover:text-[#e55b52]",
        textBg: "bg-[#ff685d]/10",
        Bg: "bg-[#ff685d]"
    },
    CustomLavender: {
        textColor: "text-[#be95be]",
        textHover: "hover:text-[#9a7a9a]",
        textBg: "bg-[#be95be]/10",
        Bg: "bg-[#be95be]"
    },
};

function ColorSelector() {
    const dispatch = useDispatch();
    const [selectedColor, setSelectedColor] = useState(colors.CustomGreen);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleColorChange = (colorObj) => {
        setSelectedColor(colorObj);
        dispatch(setTheme(colorObj));
        setIsOpen(false);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative inline-block" ref={dropdownRef}>
            <GrRadialSelected
                className={`w-8 h-8 m-1 cursor-pointer text-whi te/50 rounded-full transition-all duration-300`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle color selector"
                title="Toggle color selector"
            />

            {isOpen && (
                <div className={`absolute z-50 mt-2 rounded-lg shadow-lg p-2 ${selectedColor.Bg}/20`}>
                    {Object.entries(colors).map(([name, colorObj]) => (
                        <button
                            key={name}
                            onClick={() => handleColorChange(colorObj)}
                            className={`w-6 h-6 rounded-full m-1 relative ${colorObj.Bg} ${colorObj.textHover} transition-all duration-300`}
                            aria-label={`Select ${name} theme color`}
                            title={`Select ${name} theme color`}
                            type="button"
                        >
                            {selectedColor === colorObj && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-4 h-4 bg-white rounded-full shadow" />
                                </div>
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ColorSelector;
