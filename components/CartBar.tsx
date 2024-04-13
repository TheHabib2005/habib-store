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
            <div
                className=" flex h-full w-full flex-col border-l border-neutral-200 bg-white/80 p-6 text-black backdrop-blur-xl md:w-[500px] dark:border-neutral-700 dark:bg-black/100 dark:text-white"
                id="headlessui-dialog-panel-:r3:"
                data-headlessui-state="open"
            >
                <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold">My Cart</p>
                    <button aria-label="Close cart" onClick={() => setIsCartBarOpen(false)}>
                        <div className="relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                                data-slot="icon"
                                className="h-6 transition-all ease-in-out hover:scale-110 "
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18 18 6M6 6l12 12"
                                />
                            </svg>
                        </div>
                    </button>
                </div>
                <div className="flex h-full flex-col justify-between overflow-hidden p-1">
                    <ul className="flex-grow overflow-auto py-4">
                        <li className="flex w-full flex-col border-b border-neutral-300 dark:border-neutral-700">
                            <div className="relative flex w-full flex-row justify-between px-1 py-4">
                                <div className="absolute z-40 -mt-2 ml-[55px]">
                                    <form >
                                        <button
                                            type="submit"
                                            aria-label="Remove cart item"
                                            aria-disabled="false"
                                            className="ease flex h-[17px] w-[17px] items-center justify-center rounded-full bg-neutral-500 transition-all duration-200"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                aria-hidden="true"
                                                data-slot="icon"
                                                className="hover:text-accent-3 mx-[1px] h-4 w-4 text-white dark:text-black"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M6 18 18 6M6 6l12 12"
                                                />
                                            </svg>
                                        </button>
                                        <p aria-live="polite" className="sr-only" role="status" />
                                    </form>
                                </div>
                                <a
                                    className="z-30 flex flex-row space-x-4"
                                    href="/product/acme-geometric-circles-t-shirt?color=White&size=XS"
                                >
                                    <div className="relative h-16 w-16 cursor-pointer overflow-hidden rounded-md border border-neutral-300 bg-neutral-300 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                                        <img
                                            alt="Acme Circles T-Shirt"
                                            loading="lazy"
                                            width={64}
                                            height={64}
                                            decoding="async"
                                            data-nimg={1}
                                            className="h-full w-full object-cover"

                                            src="https://static-01.daraz.com.bd/p/defb4a1f8dd811c6f099a97c90fb2c15.jpg_750x750.jpg_.webp"
                                            style={{ color: "transparent" }}
                                        />
                                    </div>
                                    <div className="flex flex-1 flex-col text-base">
                                        <span className="leading-tight">Acme Circles T-Shirt</span>
                                        <p className="text-sm text-neutral-500 dark:text-neutral-400">
                                            White / XS
                                        </p>
                                    </div>
                                </a>
                                <div className="flex h-16 flex-col justify-between">
                                    <p className="flex justify-end space-y-2 text-right text-sm">
                                        $15.00<span className="ml-1 inline">USD</span>
                                    </p>
                                    <div className="ml-auto flex h-9 flex-row items-center rounded-full border border-neutral-200 dark:border-neutral-700">
                                        <form >
                                            <button
                                                type="submit"
                                                aria-label="Reduce item quantity"
                                                aria-disabled="false"
                                                className="ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full px-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80 ml-auto"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    aria-hidden="true"
                                                    data-slot="icon"
                                                    className="h-4 w-4 dark:text-neutral-500"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M5 12h14"
                                                    />
                                                </svg>
                                            </button>
                                            <p aria-live="polite" className="sr-only" role="status" />
                                        </form>
                                        <p className="w-6 text-center">
                                            <span className="w-full text-sm">1</span>
                                        </p>
                                        <form>
                                            <button
                                                type="submit"
                                                aria-label="Increase item quantity"
                                                aria-disabled="false"
                                                className="ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full px-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    aria-hidden="true"
                                                    data-slot="icon"
                                                    className="h-4 w-4 dark:text-neutral-500"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M12 4.5v15m7.5-7.5h-15"
                                                    />
                                                </svg>
                                            </button>
                                            <p aria-live="polite" className="sr-only" role="status" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="py-4 text-sm text-neutral-500 dark:text-neutral-400">
                        <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 dark:border-neutral-700">
                            <p>Taxes</p>
                            <p className="text-right text-base text-black dark:text-white">
                                $0.00<span className="ml-1 inline">USD</span>
                            </p>
                        </div>
                        <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
                            <p>Shipping</p>
                            <p className="text-right">Calculated at checkout</p>
                        </div>
                        <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
                            <p>Total</p>
                            <p className="text-right text-base text-black dark:text-white">
                                $15.00<span className="ml-1 inline">USD</span>
                            </p>
                        </div>
                    </div>
                    <a
                        href="https://dev-vercel-shop.myshopify.com/cart/c/c1-3df8d4530e56bf4438355c121aa0c067?key=19da19cb3121caaa7b3712741c4d54cd"
                        className="block w-full rounded-full bg-blue-600 p-3 text-center text-sm font-medium text-white opacity-90 hover:opacity-100"
                    >
                        Proceed to Checkout
                    </a>
                </div>
            </div>



        </div>
    )
}

export default CartBar