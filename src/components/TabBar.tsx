/** @format */

import { useState } from "react";

const tabTexts: Array<string> = [
    "기본정보 관리",
    "투자유형 관리",
    "입출금내역 조회",
    "영업내역 조회",
    "투자내역 조회",
    "채권내역 조회",
    "SMS 관리",
    "상담내역 관리",
    "1:1문의내역 조회",
];

const TabBar = () => {
    const [activeTab, setActiveTab] = useState<number>(0);
    return (
        <div className='w-full bg-light-gray grid lg:grid-cols-9 md:grid-cols-3 grid-cols-2 min-h-[39px] rounded-md'>
            {tabTexts.map((item, i) => (
                <button
                    className={`lg:text-lg text-base py-3 lg:py-0  h-full text-nowrap px-2 ${
                        i === 0 && "rounded-tl-md rounded-bl-md"
                    } ${
                        i === tabTexts.length - 1 &&
                        "rounded-tr-md rounded-br-md"
                    } ${
                        activeTab === i
                            ? "bg-activeColor text-white"
                            : "text-gray-color "
                    }`}
                    key={`item` + i}
                    onClick={() => setActiveTab(i)}
                >
                    {item}
                </button>
            ))}
        </div>
    );
};

export default TabBar;
