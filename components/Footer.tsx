import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className="text-sm text-neutral-500 dark:text-neutral-400">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-neutral-200 px-6 py-12 text-sm md:flex-row md:gap-12 md:px-4 min-[1320px]:px-0 dark:border-neutral-700">
                <div>
                    <Link
                        className="flex items-center gap-2 text-black md:pt-1 dark:text-white"
                        href="/"
                    >

                        <span className="uppercase">Habib Store</span>
                    </Link>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link
                                className="block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm dark:hover:text-neutral-300 text-black dark:text-neutral-300"
                                href="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm dark:hover:text-neutral-300"
                                href="/about"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm dark:hover:text-neutral-300"
                                href="/terms-conditions"
                            >
                                Terms &amp; Conditions
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm dark:hover:text-neutral-300"
                                href="/shipping-return-policy"
                            >
                                Shipping &amp; Return Policy
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm dark:hover:text-neutral-300"
                                href="/privacy-policy"
                            >
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm dark:hover:text-neutral-300"
                                href="/frequently-asked-questions"
                            >
                                FAQ
                            </Link>
                        </li>
                    </ul>
                </nav>

            </div>
            <div className="border-t border-neutral-200 py-6 text-sm dark:border-neutral-700">
                <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
                    <p>© 2023-2024 HABIB, Inc. All rights reserved.</p>
                    <hr className="mx-4 hidden h-4 w-[1px] border-l border-neutral-400 md:inline-block" />
                    <p>Designed in Bangladesh</p>
                    <p className="md:ml-auto">
                        <a href="https://developerhabib.netlify.app" className="text-black dark:text-white">
                            CREATED BY HABIB
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer