/** @format */

import React, { ReactNode } from "react";

type formControlProps = {
    children: ReactNode;
    label: string;
};

const FormControl: React.FC<formControlProps> = ({ label, children }) => {
    return (
        <div className='min-h-[49px] w-full border  border-light-gray  grid lg:grid-cols-9 md:grid-cols-5 sm:grid-cols-1'>
            <label className='md:h-full sm:h-[49px] w-full flex items-center px-4 border-r border-b border-white bg-light-gray s lg:col-span-2 md:col-span-2 sm:col-span-1'>
                {label}
            </label>
            <div className='lg:col-span-7 md:col-span-3 sm:col-span-1 md:h-full sm:h-[49px]  md:border-none '>
                {children}
            </div>
        </div>
    );
};

export default FormControl;
