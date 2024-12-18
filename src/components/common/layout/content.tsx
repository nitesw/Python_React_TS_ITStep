import React from 'react';

interface ContentProps {
    children: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => {
    return (
        <main className="flex-1 dark:bg-gray-200 w-full p-4 md:px-6 md:py-8">
            <div className="dark:bg-white rounded-lg shadow-md w-full h-full flex flex-col">
                {children}
            </div>
        </main>
    );
}

export default Content;
