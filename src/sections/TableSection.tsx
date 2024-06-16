/** @format */

import React, { useState } from "react";
import { userData } from "../utils/data";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import EditModal from "../modals/EditModal";

const TableSection: React.FC = () => {
    const [isActive, setIsActive] = useState(0);
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className='w-full'>
            <div className='overflow-x-scroll table-scroll'>
                <table className='min-w-[1354px] bg-white'>
                    <thead className='bg-light-gray'>
                        <tr className='text-base font-semibold text-primary-color'>
                            <th className='px-4 py-2 border border-white text-nowrap'>
                                NO
                            </th>
                            <th className='px-4 py-2 border border-white text-nowrap'>
                                기준유형
                            </th>
                            <th className='px-4 py-2 border border-white text-nowrap'>
                                신청유형
                            </th>
                            <th className='px-4 py-2 border border-white text-nowrap'>
                                제출서류
                            </th>
                            <th className='px-4 py-2 border border-white text-nowrap'>
                                신청일시
                            </th>
                            <th className='px-4 py-2 border border-white text-nowrap'>
                                승인여부
                            </th>
                            <th className='px-4 py-2 border border-white text-nowrap w-[351px]'>
                                승인거부 사유
                            </th>
                            <th className='px-4 py-2 border border-white text-nowrap'>
                                승인일시
                            </th>
                            <th className='px-4 py-2 border border-white text-nowrap'>
                                관리자
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData.map((item, index) => (
                            <tr key={index} className='text-center text-sm'>
                                <td className='px-4 py-2'>{item.no}</td>
                                <td className='px-4 py-2'>{item.기준유형}</td>
                                <td className='px-4 py-2'>{item.신청유형}</td>
                                <td className='px-4 py-2'>
                                    <button
                                        onClick={() => setOpenModal(true)}
                                        className='bg-light-gray text-primary-color text-sm px-3 py-1 rounded'
                                    >
                                        보기
                                    </button>
                                </td>
                                <td className='px-4 py-2 text-nowrap'>
                                    {item.신청일시}
                                </td>
                                <td>
                                    <span
                                        className={`px-2 py-1 rounded ${
                                            item.승인여부 === "승인완료"
                                                ? "bg-green-200"
                                                : item.승인여부 === "승인거부"
                                                ? "bg-red-200"
                                                : "bg-yellow-200"
                                        }`}
                                    >
                                        {item.승인여부}
                                    </span>
                                    {/* {item.승인여부} */}
                                </td>
                                <td className='px-4 py-2 text-start'>
                                    {item.승인거부사유}
                                </td>
                                <td className='px-4 py-2 text-nowrap'>
                                    {item.승인일시}
                                </td>
                                <td className='px-4 py-2'>{item.관리자}</td>
                                {openModal && (
                                    <EditModal setOpenModal={setOpenModal} />
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='bg-light-gray py-3 text-gray-400'>
                <div className='max-w-xl border mx-auto flex justify-between items-center'>
                    <MdOutlineKeyboardDoubleArrowLeft
                        className='cursor-pointer'
                        size={25}
                    />
                    <MdKeyboardArrowLeft className='cursor-pointer' size={25} />
                    {Array.from({ length: 10 }, (_, i) => i + 1).map(
                        (item, i) => (
                            <button
                                key={item}
                                onClick={() => setIsActive(i)}
                                className={`text-base px-3 py-1 hover:bg-activeColor hover:text-white rounded-md font-bold ${
                                    i === isActive &&
                                    "bg-activeColor text-white"
                                }`}
                            >
                                {item}
                            </button>
                        )
                    )}

                    <MdKeyboardArrowRight
                        className='cursor-pointer'
                        size={25}
                    />
                    <MdOutlineKeyboardDoubleArrowRight
                        className='cursor-pointer'
                        size={25}
                    />
                </div>
            </div>
        </div>
    );
};

export default TableSection;
