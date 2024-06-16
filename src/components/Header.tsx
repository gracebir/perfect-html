/** @format */

const Header = () => {
    return (
        <header className='border-b border-gray-300 py-4 w-full'>
            <ul className='flex items-center gap-2 max-w-7xl mx-auto px-6 lg:px-0'>
                <li className='text-xl lg:text-2xl font-bold'>회원상세</li>
                <li className='text-[#FF4D4F]'>
                    <div className='flex items-start gap-1'>
                        <div className='bg-red-500 h-1 w-1 rounded-full'></div>
                        <span className='text-sm'>필수항목</span>
                    </div>
                </li>
            </ul>
        </header>
    );
};

export default Header;
