/** @format */

import React, { useState } from "react";
import DropDown from "../components/DropDown";
import Button from "../components/Button";
import { changeApprovals } from "../utils/data";

const BottomFilters: React.FC = () => {
    const [changeApproval, setChangeApproval] = useState(changeApprovals[0]);
    return (
        <div className='flex flex-col gap-4 lg:flex-row lg:justify-between items-start lg:items-center'>
            <Button text='등록' />
            <div className='flex lg:flex-row flex-col lg:gap-4 gap-2 lg:items-center items-start'>
                <span className='text-gray-500 text-sm'>선택한 0건</span>
                <DropDown
                    option={changeApproval}
                    setOption={setChangeApproval}
                    options={changeApprovals}
                />

                <Button text='저장' />
            </div>
        </div>
    );
};

export default BottomFilters;
