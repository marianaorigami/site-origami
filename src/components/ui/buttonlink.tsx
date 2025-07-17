import React from "react";
import { useNavigate } from "react-router-dom";
import { MoveRight } from "lucide-react";

interface ButtonLinkProps {
    to: string;
    children: React.ReactNode;
    className?: string;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ to, children, className }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(to);
    };

    return (
        <button
            type="button"
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
