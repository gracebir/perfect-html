/** @format */

import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

type dropDownProps = {
    options: Array<string>;
    setOption: React.Dispatch<React.SetStateAction<string>>;
    option: string;
};

const DropDown: React.FC<dropDownProps> = ({ options, setOption, option }) => {
    const [isClicked, setIsCliked] = useState(false);

    const handleOption = (text: string) => {
        setOption(text);
        setIsCliked(false);
    };
    return (
        <div className='relative'>
            <button
                onClick={() => setIsCliked(!isClicked)}
                className='border flex gap-2 justify-between items-center min-w-[155px] border-activeColor text-activeColor duration-300 transition-all rounded-lg h-[39px] px-4'
            >
                <span className='text-sm lg:text-base'>
                    {option ? option : options[0]}
                </span>
                <IoIosArrowDown
                    size={20}
                    className={`${isClicked ? "rotate-180" : "rotate-0"}`}
                />
            </button>
            <div
                className={`w-full transition-all ease-in-out duration-300 ${
                    isClicked ? `flex` : "hidden"
                } absolute bg-white z-30 top-[44px] flex-col items-center rounded-lg shadow-xl`}
            >
                {options.map((item, i) => (
                    <li
                        onClick={() => handleOption(item)}
                        className={`list-none py-2 w-full px-2 text-sm cursor-pointer ${
                            option === item && "text-white bg-activeColor"
                        } hover:text-white hover:bg-activeColor ${
                            i === 0 && "rounded-tl-lg rounded-tr-lg"
                        } ${
                            i === options.length - 1 &&
                            "rounded-bl-lg rounded-br-lg"
                        }`}
                        key={item}
                    >
                        {item}
                    </li>
                ))}
            </div>
        </div>
    );
};

export default DropDown;
