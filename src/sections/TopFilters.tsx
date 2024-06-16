/** @format */

import React, { useState } from "react";
import DropDown from "../components/DropDown";
import Button, { EnumVariant } from "../components/Button";
import { approvalOptions, sortOrderTexts } from "../utils/data";

const TopFilters: React.FC = () => {
    const [option, setOption] = useState<string>(approvalOptions[0]);
    const [optionOrder, setOptionOrder] = useState<string>(sortOrderTexts[0]);
    return (
        <section className='w-full flex flex-col gap-4 lg:flex-row lg:justify-between items-start lg:items-center py-4 border-b border-gray-color'>
            <div className='flex gap-2 items-center'>
                <h4 className='text-xl font-semibold'>신청 목록</h4>
                <span className='text-sm text-dark-gray'>
                    (총 100명 | 승인대기 1건)
                </span>
            </div>
            <div className='flex gap-2 flex-col lg:flex-row lg:gap-4'>
                <DropDown
                    option={option}
                    setOption={setOption}
                    options={approvalOptions}
                />
                <DropDown
                    option={optionOrder}
                    setOption={setOptionOrder}
                    options={sortOrderTexts}
                />
                <Button text='엑셀 다운로드' variant={EnumVariant.download} />
            </div>
        </section>
    );
};

export default TopFilters;
