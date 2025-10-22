import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "default";
type ButtonSize = "small" | "medium";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    children: ReactNode;
}

const Button = ({
    variant = "primary",
    size = "medium",
    children,
    className = "",
    ...props
}: ButtonProps) => {
    const baseStyles =
        "rounded-lg transition-all duration-150 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

    const variantStyles: Record<ButtonVariant, string> = {
        primary:
            "bg-[#3574F0] border border-[#315FBD] hover:bg-[#3369D6] text-white active:bg-[#315FBD] shadow-[inset_0_1px_0_hsla(0,0%,100%,0.2),0_1px_2px_0_rgba(24,25,22,0.06),inset_0_-1px_0_rgba(24,25,22,0.1)] active:shadow-none",
        default:
            "bg-gray-200 border border-gray-300 hover:bg-gray-300 text-gray-900 focus:ring-gray-400 active:bg-gray-400 shadow-[0_1px_0_rgba(27,31,36,0.1)] active:shadow-none",
    };

    const sizeStyles: Record<ButtonSize, string> = {
        small: "px-4 py-1.5 text-sm",
        medium: "px-6 py-2.5 text-sm",
    };

    const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    return (
        <button className={buttonClasses} {...props}>
            {children}
        </button>
    );
};

export default Button;
