import React from 'react';

interface SwiperButtonProps {
    targetId: string;
}

const SwiperButton: React.FC<SwiperButtonProps> = ({ targetId }) => {
    const scrollToSection = () => {
        const section = document.getElementById(targetId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <button
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 rounded-full"
            onClick={scrollToSection}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
        </button>
    );
};

export default SwiperButton;