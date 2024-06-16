/** @format */

import React, { ReactNode } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

type confirmModalProp = {
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
    isSuccess?: boolean;
    children: ReactNode;
};

const Confirmation: React.FC<confirmModalProp> = ({
    setOpenModal,
    isSuccess = false,
    children,
}) => {
    return (
        <div className='w-full fixed z-50 h-screen flex items-center px-6 lg:px-0 bg-black bg-opacity-20 top-0 bottom-0 left-0 right-0'>
            <div className='max-w-[400px] w-[400px] p-4 lg:p-6 mx-auto min-h-[198px] py-4 bg-white shadow-lg rounded-lg'>
                <div className='flex justify-between items-center'>
                    {isSuccess ? (
                        <div className='h-[30px] w-[30px] text-green-600 bg-green-100 rounded-full p-1'>
                            <IoIosCheckmarkCircleOutline size={20} />
                        </div>
                    ) : (
                        <div
                            className={`h-[30px] w-[30px] rounded-full bg-orange-100`}
                        >
                            <span className='text-[#D46B08] font-bold'>!</span>
                        </div>
                    )}

                    <button onClick={() => setOpenModal(false)}>
                        <IoCloseOutline size={25} />
                    </button>
                </div>
                <div className='flex flex-col gap-8 mt-6'>{children}</div>
            </div>
        </div>
    );
};

export default Confirmation;
