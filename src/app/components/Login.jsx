import React from 'react'
import Link from "next/link";

const Login = () => {
    return (
        <div className="flex items-center justify-center flex-col gap-3 bg-white max-w-[450px] w-full text-blue-800 p-4">
            <h1 className="text-2xl font-bold">Login </h1>
            <input type="email" name="" id="" placeholder='Enter your Email' className='w-full p-2 outline-none border border-gray-500' />
            <input type="password" name="" id="" placeholder='Enter your Email' className='w-full p-2 outline-none border border-gray-500' />
        </div>
    )
}

export default Login
