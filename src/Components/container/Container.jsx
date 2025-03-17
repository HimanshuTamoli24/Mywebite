import React from "react";

function Container({ children, className="" }) {
    return (
        <div className={`w-full max-w-2xl   border-amber-50/5 border-[1px]  h-full flex flex-col  items-center  mx-auto ${className}`}>
            {children}
        </div>
    );
}

export default Container;
