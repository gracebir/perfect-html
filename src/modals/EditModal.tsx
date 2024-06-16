/** @format */
import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import Button, { EnumVariant } from "../components/Button";

const EditModal: React.FC = () => {
    return (
        <div className='w-full fixed h-screen flex items-center bg-black bg-opacity-10 top-0 bottom-0 left-0 right-0'>
            <div className='max-w-[800px] w-[800px] mx-auto min-h-[457px] py-4 bg-white shadow-lg rounded-lg'>
                <div className='flex justify-between items-center py-4 border-b px-6 border-light-gray'>
                    <span>투자유형 변경</span>
                    <button>
                        <IoCloseOutline size={30} />
                    </button>
                </div>
                <div></div>
                <div className='flex justify-center gap-3 py-4 border-b px-6 border-light-gray'>
                    <Button text='저장' />
                    <Button text='취소' variant={EnumVariant.outline} />
                </div>
            </div>
        </div>
    );
};

export default EditModal;
