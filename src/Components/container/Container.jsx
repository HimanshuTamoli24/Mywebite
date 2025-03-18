import React from "react";
import {useSelector} from "react-redux"
function Container({ children, className="" }) {
    const {  textHover ,textBg} = useSelector((state) => state.color);
    return (
        // add this from  ${textBg} 
        <div className={`w-full max-w-2xl hover:${textBg} rounded-xl my-2 ${textHover} border-amber-50/5 border-[1px]  h-full flex flex-col  items-center  mx-auto ${className}`}>
            {children}
        </div>
    );
}

export default Container;
