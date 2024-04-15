"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useFormik } from "formik"
import { number } from 'yup';
import { SignUpValidactionSchema } from '@/yup-schema';
interface initialValuesType {
    name: string;
    email: string;
    password: string | number;
    confirmPassword: string | number;
}
const SignupComponent = () => {


    const initialValues: initialValuesType = {
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    }


    const { handleSubmit, handleChange, values, isSubmitting, errors } = useFormik({
        initialValues,
        validationSchema: SignUpValidactionSchema,
        onSubmit: (value) => {
            console.log(value)

        }
    })


    return (
        <div
            className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 h-full items-center justify-center flex"
        >
            <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                <div className="relative bg-secendery rounded-lg shadow">
                    <div className="p-5">
                        <h3 className="text-xl mb-3 font-medium text-center"> Wellcome to CDX-SHOP</h3>

                        <div className="text-center">
                            <p className="mb-3 text-xl font-semibold leading-5 text-white">
                                Create New Account
                            </p>
                            <p className="mt-2 text-sm leading-4 text-white">
                                You must be logged in to perform this action.
                            </p>
                        </div>

                        <div className="mt-7 flex flex-col gap-2">
                            <button className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
                                <Image
                                    src="https://www.svgrepo.com/show/512317/github-142.svg"
                                    alt="GitHub"
                                    className="h-[18px] w-[18px] "
                                    height={100}
                                    width={100}
                                />
                                Continue with GitHub
                            </button>

                            <button className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
                                <Image
                                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                                    alt="Google"
                                    className="h-[18px] w-[18px] "
                                    height={100}
                                    width={100}
                                />
                                Continue with Google
                            </button>

                            {/* <button className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
                                <Image
                                    src="https://www.svgrepo.com/show/448234/linkedin.svg"
                                    alt="Google"
                                    className="h-[18px] w-[18px] "
                                    width={100}
                                    height={100}
                                />
                                Continue with LinkedIn
                            </button> */}
                        </div>

                        <div className="flex w-full items-center gap-2 py-6 text-sm text-white">
                            <div className="h-px w-full bg-slate-200"></div>
                            OR
                            <div className="h-px w-full bg-slate-200"></div>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="sr-only">
                                    Name
                                </label>
                                <input
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 text-black focus:ring-black  focus:ring-offset-1 mb-2"
                                    placeholder="Enter your Name..."
                                    onChange={handleChange}
                                    value={values.name}
                                />
                                {errors.name && <p className='text-red-600 mb-2'>{errors.name}</p>}
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 text-black focus:ring-black focus:ring-offset-1"
                                    placeholder="Email Address"
                                    onChange={handleChange}
                                    value={values.email}

                                />
                                {errors.email && <p className='text-red-600 mb-2'>{errors.email}</p>}

                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 text-black focus:ring-black focus:ring-offset-1"
                                    placeholder="Password"
                                    onChange={handleChange}
                                    value={values.password}

                                />
                                {errors.password && <p className='text-red-600 mb-2'>{errors.password}</p>}

                            </div>
                            <div>
                                <label htmlFor="confirmPassword" className="sr-only">
                                    Confirm password
                                </label>
                                <input
                                    name="confirmPassword"
                                    type="password"
                                    className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 text-black focus:ring-black focus:ring-offset-1"
                                    placeholder="confirmPassword"
                                    onChange={handleChange}
                                    value={values.confirmPassword}

                                />
                                {errors.confirmPassword && <p className='text-red-600 mb-2'>{errors.confirmPassword}</p>}

                            </div>
                            <p className="mb-3 mt-2 text-sm text-gray-500">
                                <a
                                    href="/forgot-password"
                                    className="text-blue-800 hover:text-blue-600"
                                >
                                    Reset your password?
                                </a>
                            </p>
                            <button
                                type="submit"
                                className="inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400"
                            >
                                Continue
                            </button>
                        </form>

                        <div className="mt-6 text-center text-sm text-white">
                            Already Have a Account ?
                            <Link href="/login" className="font-medium text-[#4285f4]">
                                {" "}Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignupComponent