/** @format */
import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import Button, { EnumVariant } from "../components/Button";
import FormControl from "../components/FormControl";
import DropDown from "../components/DropDown";
import { typeOfInvestments } from "../utils/data";
import Confirmation from "./Confirmation";

type editModalProp = {
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const EditModal: React.FC<editModalProp> = ({ setOpenModal }) => {
    const [investment, setInvestment] = useState(typeOfInvestments[0]);
    const [imgWarning, setImgWarning] = useState(false);
    const [confirmEdit, setConfirmEdit] = useState(false);
    return (
        <div className='w-full fixed h-screen z-40 flex items-center px-6 lg:px-0 bg-black bg-opacity-10 top-0 bottom-0 left-0 right-0'>
            <div className='max-w-[800px] w-[800px] mx-auto min-h-[457px] py-4 bg-white shadow-lg rounded-lg'>
                <div className='flex justify-between items-center py-4 border-b px-6 border-light-gray'>
                    <span>투자유형 변경</span>
                    <button
                        className='text-gray-color'
                        onClick={() => setOpenModal(false)}
                    >
                        <IoCloseOutline size={30} />
                    </button>
                </div>
                <div className='px-6 py-4 flex flex-col gap-4 lg:gap-0'>
                    <FormControl label='회원번호'>
                        <input
                            className='outline-none border-one w-full h-full  px-4 lg:py-0 sm:py-4'
                            placeholder='abc123'
                            type='text'
                            name=''
                            id=''
                        />
                    </FormControl>
                    <FormControl label='회원명/법인명'>
                        <input
                            className='outline-none px-4 lg:py-0 sm:py-4 w-full h-full'
                            placeholder='김길동'
                            type='text'
                            name=''
                            id=''
                        />
                    </FormControl>
                    <FormControl label='예치금잔액'>
                        <div className='px-4 lg:py-2 '>
                            <DropDown
                                isModal={true}
                                option={investment}
                                setOption={setInvestment}
                                options={typeOfInvestments}
                            />
                        </div>
                    </FormControl>
                    <FormControl label='투자건수'>
                        <div className=' lg:py-2 w-full px-4  flex items-start'>
                            <Button
                                text='파일 선택'
                                onClick={() => setImgWarning(true)}
                                variant={EnumVariant.download}
                            />
                        </div>
                    </FormControl>
                    <ul className='w-full flex flex-col gap-2 items-start py-4'>
                        <li className='flex items-center gap-2'>
                            <div className='h-1 w-1 bg-black rounded-full'></div>
                            <span>
                                파일 형식은 jpg, jpeg, gif, png, pdf만
                                가능합니다. 최대
                            </span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <div className='h-1 w-1 bg-black rounded-full'></div>
                            <span>10개, 100MB까지 등록이 가능합니다.</span>
                        </li>
                    </ul>
                </div>

                <div className='flex justify-center flex-col md:flex-row gap-3 py-4 border-t px-6 border-light-gray'>
                    <Button
                        onClick={() => setConfirmEdit(true)}
                        text='저장'
                        isModalBtn={true}
                    />
                    <Button
                        text='취소'
                        onClick={() => setOpenModal(false)}
                        isModalBtn={true}
                        variant={EnumVariant.outline}
                    />
                </div>
                {imgWarning && (
                    <Confirmation setOpenModal={setImgWarning}>
                        <span className='font-semibold lg:text-lg text-base'>
                            jpg,jpeg,gif,png,pdf파일만 등록 가능합니다.
                        </span>
                        <div className='bg-warning flex flex-col'>
                            <Button text='확인' />
                        </div>
                    </Confirmation>
                )}
                {confirmEdit && (
                    <Confirmation setOpenModal={setConfirmEdit}>
                        <span className='font-semibold lg:text-lg text-base'>
                            저장되었습니다.
                        </span>
                        <div className='bg-warning flex flex-col'>
                            <Button
                                onClick={() => setConfirmEdit(false)}
                                text='확인'
                            />
                        </div>
                    </Confirmation>
                )}
            </div>
        </div>
    );
};

export default EditModal;
