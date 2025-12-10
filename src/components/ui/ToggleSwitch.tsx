import { type InputHTMLAttributes } from "react";

interface ToggleSwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
    checked: boolean;
    onCheckedChange: (checked: boolean) => void;
    labelLeft?: string;
    labelRight?: string;
}

const ToggleSwitch = ({
    checked,
    onCheckedChange,
    labelLeft,
    labelRight,
    disabled = false,
    className = "",
    ...props
}: ToggleSwitchProps) => {
    const handleChange = () => {
        if (!disabled) {
            onCheckedChange(!checked);
        }
    };

    return (
        <label className={`flex w-max cursor-pointer items-center gap-2 select-none ${disabled ? 'cursor-not-allowed opacity-50' : ''} ${className}`}>
            {labelLeft && <div className="text-sm text-neutral-700">{labelLeft}</div>}

            <div
                className={`relative grid h-8 w-16 grid-cols-2 place-items-center rounded-lg border transition-all duration-300 ${checked
                    ? 'bg-blue-4 border-blue-1'
                    : 'bg-gray-200 border-gray-300'
                    } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={handleChange}
                    disabled={disabled}
                    className="sr-only focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    {...props}
                />

                {/* Left indicator - vertical line */}
                <svg
                    aria-hidden="true"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`z-10 transition-all duration-300 ${checked
                        ? 'text-white'
                        : 'text-neutral-500'
                        }`}
                >
                    <path fill="currentColor" fillRule="evenodd" d="M8 2a.75.75 0 0 1 .75.75v11.5a.75.75 0 0 1-1.5 0V2.75A.75.75 0 0 1 8 2Z"></path>
                </svg>

                {/* Right indicator - circle */}
                <svg
                    aria-hidden="true"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`z-10 transition-all duration-300 ${checked
                        ? 'text-white'
                        : 'text-neutral-500'
                        }`}
                >
                    <path fill="currentColor" fillRule="evenodd" d="M8 12.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12Z"></path>
                </svg>


                {/* Thumb (sliding white square) */}
                <div
                    className={`absolute  bg-white rounded-md border transition-all duration-300 z-20 ${checked
                        ? 'left-[calc(50%+1px)] h-[calc(100%-2px)] w-[calc(50%-2px)] border-white'
                        : 'left-[1px] h-[calc(100%-1px)] w-[calc(50%-1px)] border-neutral-300'
                        }`}
                />
            </div>

            {labelRight && <div className="text-sm text-neutral-700">{labelRight}</div>}
        </label>
    );
};

export default ToggleSwitch;

