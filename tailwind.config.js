/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", "system-ui", "sans-serif"],
                serif: ["Lora", "Georgia", "Times New Roman", "serif"],
                mono: [
                    "JetBrains Mono",
                    "Fira Code",
                    "Monaco",
                    "Cascadia Code",
                    "Roboto Mono",
                    "monospace",
                ],
            },
        },
    },
    plugins: [],
};
