import { useEffect } from "react";

interface ToastProps {
    message: string;
    type?: "success" | "error";
    onClose: () => void;
}

export default function Toast({ message, type = "success", onClose }: ToastProps) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 4000);

        return () => clearTimeout(timer);
    }, [onClose]);

    const bgColor =
        type === "success" ? "bg-green-500" : type === "error" ? "bg-red-600" : "bg-gray-700";

    return (
        <div
            className={`${bgColor} fixed top-5 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded shadow-lg text-white font-semibold select-none`}
        >
            {message}
        </div>
    );
}
