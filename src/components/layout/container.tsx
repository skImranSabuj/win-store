import React from 'react';

const Container = ({ children,className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={`max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
            {children}
        </div>
    );
};

export default Container;