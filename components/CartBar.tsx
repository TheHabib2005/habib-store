import React, { FC } from 'react'

interface Props {
    isCartBarOpen: boolean;
    setIsCartBarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const CartBar: FC<Props> = ({ isCartBarOpen, setIsCartBarOpen }) => {

    return (
        <div className={`w-full  h-screen flex justify-between   fixed top-0 ${isCartBarOpen ? " right-0" : "right-[-100%]"}  z-10 transition-all duration-100 `}>
            <div className='w-full bg-black/70 h-screen md:block hidden' onClick={() => setIsCartBarOpen(false)}>

            </div>
            <div className='md:w-[500px] w-full bg-primary h-screen p-5'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer" onClick={() => setIsCartBarOpen(false)}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </div>


        </div>
    )
}

export default CartBar