// src/components/Preloader.tsx
import React from 'react';
import './Preloader.css'; // Assuming you will create a CSS file for styles

const Preloader: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
    return (
        <div className={`preloader ${isLoading ? 'active' : ''} `}>
            {/* You can add a spinner or loading animation here */}
            <div className="h-[100vh] w-[100vw] bg-black flex justify-center items-center">
                {/* preloader animation */}
                
            </div>
        </div>
    );
};

export default Preloader;