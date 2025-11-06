import type { ButtonHTMLAttributes, ReactNode } from "react";

type SimpleButtonVariant = "primary" | "default" | "ghost";
type SimpleButtonSize = "small" | "medium";

interface SimpleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: SimpleButtonVariant;
    size?: SimpleButtonSize;
    children: ReactNode;
}

const SimpleButton = ({
    variant = "primary",
    size = "medium",
    children,
    className = "",
    ...props
}: SimpleButtonProps) => {
    const baseStyles =
        "rounded-lg transition-all duration-500 disabled:cursor-not-allowed cursor-pointer";

    const variantStyles: Record<SimpleButtonVariant, string> = {
        primary: "bg-blue-4 text-white hover:opacity-80",
        default: "bg-gray-100 text-gray-1 hover:bg-gray-200",
        ghost: "bg-transparent text-gray-6 hover:bg-gray-100",
    };

    const sizeStyles: Record<SimpleButtonSize, string> = {
        small: "px-3 py-1.5 text-sm",
        medium: "px-6 py-2.5 text-sm",
    };

    const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
};

export default SimpleButton;

