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

    // Outer container (shadow) styles
    const outerBaseStyles =
        "border-[1.5px] relative top-[2px] rounded-[6px] w-auto inline-block group disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

    const outerVariantStyles: Record<ButtonVariant, string> = {
        primary: "bg-blue-2 border-blue-1",
        default: "bg-gray-200 border-[var(--default-border-color)]",
    };

    // Inner button styles
    const innerBaseStyles =
        "relative text-center w-auto rounded-[6px] border-[1.5px] mx-[-1.5px] block active:transition-all active:duration-100 select-none";

    const innerVariantStyles: Record<ButtonVariant, string> = {
        primary:
            "bg-blue-4 text-white hover:bg-blue-5 active:bg-blue-3 border-blue-1 translate-y-[-2px] hover:translate-y-[-4px] active:translate-y-[-1px] group-disabled:hover:!translate-y-[-2px]",
        default:
            "bg-white text-black border-[var(--default-border-color)] translate-y-[-2px] hover:translate-y-[-4px] active:translate-y-[-1px] group-disabled:hover:!translate-y-[-2px]",
    };

    const sizeStyles: Record<ButtonSize, string> = {
        small: "px-3 py-1 text-sm",
        medium: "px-4 py-2 text-[14px]",
    };

    const outerClasses = `${outerBaseStyles} ${outerVariantStyles[variant]} ${className}`;
    const innerClasses = `${innerBaseStyles} ${innerVariantStyles[variant]} ${sizeStyles[size]}`;

    return (
        <button className={outerClasses} {...props}>
            <span className={innerClasses}>{children}</span>
        </button>
    );
};

export default Button;
