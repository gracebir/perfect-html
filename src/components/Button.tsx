/** @format */

import React from "react";

export enum EnumVariant {
    "default",
    "outline",
    "download",
}

type buttonProps = {
    text: string;
    onClick?: () => void;
    variant?: EnumVariant;
};

const Button: React.FC<buttonProps> = ({
    text,
    onClick,
    variant = EnumVariant.default,
}) => {
    return (
        <button
            className={`border border-activeColor duration-300 transition-all ${
                variant === EnumVariant.default &&
                "bg-activeColor hover:bg-white hover:text-activeColor"
            } ${variant === EnumVariant.outline && "bg-white text-activeColor"} 
                ${
                    variant === EnumVariant.download &&
                    " bg-[#D7D8DA] text-primary-color hover:bg-gray-500 border-none"
                } 
             lg:text-base text-sm text-white px-4 min-w-16 h-[39px] rounded-lg`}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;
