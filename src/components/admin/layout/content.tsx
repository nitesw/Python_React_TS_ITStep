import React from "react";

interface ContentProps {
    children: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => {
    return (
        <div className="flex flex-grow items-center justify-center md:justify-start lg:justify-end">
            <div>
                {children}
            </div>
        </div>
    );
}

export default Content;
