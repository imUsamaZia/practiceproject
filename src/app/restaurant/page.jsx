"use client"
import React, { useState } from 'react'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'

const page = () => {
    const [login, setLogin] = useState(false)
    const handelLogin = () => {
        setLogin(!login)
    }
    return (
        <div className='flex items-center justify-center w-full  flex-col gap-5 '>
            <Header />
            <h1 className="text-5xl font-bold text-blue-700">Restaurant Login/Signup Page</h1>
            {login ? <Login /> : <SignUp />}

            <div className="">
                <button className='bg-white text-blue-700 text-lg font-bold outline-none py-2 px-3 cursor-pointer'
                    onClick={handelLogin}>{login ? "Do not have Account ? SignUp" : "Already Have Account ? Login"}</button>
            </div>
            <Footer />
        </div>
    )
}

export default page
