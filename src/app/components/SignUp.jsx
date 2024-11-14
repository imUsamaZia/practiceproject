import React from 'react'

const SignUp = () => {
    return (
        <div className="flex items-center justify-center flex-col gap-3 bg-white max-w-[450px] w-full text-blue-800 p-4">
            <h1 className="text-2xl font-bold">Sign Up</h1>
            <input type="email" name="" id="" placeholder='Enter your Email' className='w-full p-2 outline-none border border-gray-500' />
            <input type="password" name="" id="" placeholder='Enter Password' className='w-full p-2 outline-none border border-gray-500' />
            <input type="password" name="" id="" placeholder='Enter Confirm Password' className='w-full p-2 outline-none border border-gray-500' />
            <input type="text" name="" id="" placeholder='Enter Restaurant Name' className='w-full p-2 outline-none border border-gray-500' />
            <input type="text" name="" id="" placeholder='Enter City' className='w-full p-2 outline-none border border-gray-500' />
            <input type="text" name="" id="" placeholder='Enter Full Address' className='w-full p-2 outline-none border border-gray-500' />
            <input type="text" name="" id="" placeholder='Enter Contact Number' className='w-full p-2 outline-none border border-gray-500' />

        </div>
    )
}

export default SignUp
