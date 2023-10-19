import Link from 'next/link';
import React from 'react'
import { FaSadCry } from 'react-icons/fa';

const NothingInCart = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div>
                <div className="flex flex-col items-center space-y-2">
                    <div className="text-8xl"><FaSadCry /></div>
                    <h1 className="text-4xl font-bold">oops!!</h1>
                    <p>
                        Your Cart is Empty
                    </p>
                    <div className="inline-flex items-center px-4 py-2 text-white bg-indigo-600 border border-indigo-600 rounded rounded-full hover:bg-indigo-700 focus:outline-none focus:ring">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-3 h-3 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M7 16l-4-4m0 0l4-4m-4 4h18"
                            />
                        </svg>
                        <Link href='/' className="text-sm font-medium">Continue Shopping</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NothingInCart