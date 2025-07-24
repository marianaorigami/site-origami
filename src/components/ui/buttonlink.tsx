import React from "react";
import { useNavigate } from "react-router-dom";

interface ButtonLinkProps {
    to?: string;
    children: React.ReactNode;
    className?: string;
    type?: "button" | "submit"; 
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ to, children, className, type = "button" }) => {
    const navigate = useNavigate();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (type === "submit") return;
        e.preventDefault(); 
        if (to) navigate(to);
    };

    return (
        <button
            type={type}
            onClick={handleClick}
            className={`
                px-4 py-2 rounded-md
                focus:outline-none focus:ring-2
                transition-all duration-200
                hover:scale-105
                inline-flex items-center justify-center
                select-none cursor-pointer
                ${className ?? ""}
            `}
        >
            {children}
        </button>
    );
};

export default ButtonLink;
