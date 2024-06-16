/** @format */

import Header from "./components/Header";
import TabBar from "./components/TabBar";
import BottomFilters from "./sections/BottomFilters";
import TableSection from "./sections/TableSection";
import TopFilters from "./sections/TopFilters";

function App() {
    return (
        <div className='w-full bg-gray-100 min-h-screen'>
            <Header />
            <main className='max-w-7xl mx-auto mt-4 flex flex-col gap-6 lg:gap-9 px-6 md:px-4 lg:px-0'>
                <TabBar />
                <div className='w-full flex flex-col gap-4'>
                    {/* table filter top */}
                    <TopFilters />
                    {/* bottom filter */}
                    <div className='flex flex-col gap-2'>
                        <BottomFilters />
                        <TableSection />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
