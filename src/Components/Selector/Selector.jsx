import { useDispatch } from "react-redux";
import { setTheme } from "../../Store/ColorSlice"; // Updated to use `setTheme`
import { useState } from "react";
import { GrRadialSelected } from "react-icons/gr";

const colors = {
    CustomGreen: {
        textColor: "text-[#2cda5c]",
        textHover: "hover:text-[#249c47]", // Slightly darker green
        textBg: "bg-[#2cda5c]/5",
        Bg: "bg-[#2cda5c]"
    },
    CustomYellow: {
        textColor: "text-[#ffd125]",
        textHover: "hover:text-[#cc9c1e]", // Slightly darker yellow
        textBg: "bg-[#ffd125]/5",
        Bg: "bg-[#ffd125]"
    },
    CustomBlue: {
        textColor: "text-[#41a0fb]",
        textHover: "hover:text-[#3478c2]", // Slightly darker blue
        textBg: "bg-[#41a0fb]/5",
        Bg: "bg-[#41a0fb]"
    },
    CustomPeace: {
        textColor: "text-[#ff685d]",
        textHover: "hover:text-[#e55b52]", // Slightly darker red
        textBg: "bg-[#ff685d]/5",
        Bg: "bg-[#ff685d]"
    },
    CustomLavender: {
        textColor: "text-[#be95be]",
        textHover: "hover:text-[#9a7a9a]", // Slightly darker lavender
        textBg: "bg-[#be95be]/5",
        Bg: "bg-[#be95be]"
    },
};


function ColorSelector() {
    const dispatch = useDispatch();
    const [selectedColor, setSelectedColor] = useState(colors.CustomGreen);
    const [isOpen, setIsOpen] = useState(false);

    const handleColorChange = (colorObj) => {
        setSelectedColor(colorObj);
        dispatch(setTheme(colorObj)); 
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block">
            <GrRadialSelected
            // will fix this bug after some time 
                className={`w-8 h-8 m-1 cursor-pointer text-white/50   rounded-full transition-all duration-300`}
                onClick={() => setIsOpen(!isOpen)}
            />

            {/* Dropdown Menu with Transparent Background, but Solid Option Colors */}
            {isOpen && (
                <div className={`absolute z-50 mt-2 rounded-lg shadow-lg p-2 ${selectedColor.Bg}/20`}>
                    {Object.entries(colors).map(([name, colorObj]) => (
                        <button
                            key={name}
                            onClick={() => handleColorChange(colorObj)}
                            className={`w-6 h-6 rounded-full m-1 transition-all duration-300 ${colorObj.Bg} ${colorObj.textHover}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default ColorSelector;
