interface UnderlinedProps {
    text: string;
    color?: "blue" | "purple";
    style?: "solid" | "wavy" | "double";
}
const Underlined = ({ text, color = "blue", style = "solid" }: UnderlinedProps) => {
    const styleClasses = {
        solid: `underline decoration-${color}-500 decoration-2 underline-offset-5`,
        wavy: `underline decoration-wavy decoration-${color}-500 decoration-2 underline-offset-5`,
        double: `underline decoration-double decoration-${color}-500 decoration-2 underline-offset-5`,
    };

    return (
        <span className={styleClasses[style]}>{text}</span>
    );
};

export default Underlined;