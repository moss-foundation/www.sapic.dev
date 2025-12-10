import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "default" | "ghost";
type ButtonSize = "small" | "medium" | "large";

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
        "transition-all duration-500 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer select-none";

    const variantStyles: Record<ButtonVariant, string> = {
        primary: "bg-blue-4 text-white hover:opacity-80 border border-blue-1",
        default: "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 border border-neutral-300",
        ghost: "bg-transparent text-neutral-600 border border-transparent hover:border-neutral-300 hover:text-neutral-900",
    };

    const sizeStyles: Record<ButtonSize, string> = {
        small: "px-3 py-1.5 text-sm rounded-lg",
        medium: "px-4 py-2 text-sm rounded-lg",
        large: "px-5 py-2 lg:py-2 text-base rounded-lg",
    };

    const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
};

export default Button;

