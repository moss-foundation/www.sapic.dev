import { type InputHTMLAttributes } from "react";

interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: string;
    description?: string;
}

const Switch = ({ 
    label, 
    description,
    checked,
    onChange,
    disabled,
    className = "",
    ...props 
}: SwitchProps) => {
    return (
        <label className={`flex items-start justify-between cursor-pointer ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}>
            {(label || description) && (
                <div className="flex-1 mr-4">
                    {label && (
                        <h3 className="font-semibold text-lg mb-1 text-neutral-900">
                            {label}
                        </h3>
                    )}
                    {description && (
                        <p className="text-gray-600 text-sm">
                            {description}
                        </p>
                    )}
                </div>
            )}
            
            <div className="relative inline-flex items-center flex-shrink-0">
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={onChange}
                    disabled={disabled}
                    className="sr-only peer"
                    {...props}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 peer-disabled:cursor-not-allowed"></div>
            </div>
        </label>
    );
};

export default Switch;

