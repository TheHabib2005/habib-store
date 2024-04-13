import React, { FC } from 'react'

interface Props {
    isSideBarOpen: boolean;
    setIsSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileSideBar: FC<Props> = ({ isSideBarOpen, setIsSideBarOpen }) => {

    return (
        <div className={`w-full h-screen bg-black absolute top-0 ${isSideBarOpen ? "md:left-[-100%] left-0" : "left-[-100%]"} z-10 transition-all duration-100 p-8`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer" onClick={() => setIsSideBarOpen(false)}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>

        </div>
    )
}

export default MobileSideBar