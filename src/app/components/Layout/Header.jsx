import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div className="w-full flex items-center justify-between px-10 py-2">
            <div className="w-full">
                <Image src="/images/restaurant-logo.png" alt='restaurant image' width={85} height={85} className=''></Image>
            </div>
            <div className="w-full flex items-center justify-between text-blue-700">
                <Link href="/" className="text-xl font-semibold">Home</Link>
                <Link href="/" className="text-xl font-semibold">Loging/Signup</Link>
                <Link href="/" className="text-xl font-semibold">Profile</Link>
            </div>
        </div>
    )
}

export default Header
