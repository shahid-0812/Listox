import React from 'react'
import { Link } from 'react-router-dom'

export const Register = () => {
    return (
        <div className='w-full flex flex-col gap-10 justify-center items-center min-h-screen bg-[#f5f7fa] px-3'>

            <div className='w-full max-w-xl bg-white rounded-lg p-10 shadow-xl'>
                <h2 className='text-3xl font-semibold text-center mb-8'>Register</h2>

                <form className='flex flex-col gap-5 '>

                    <div className='flex flex-col gap-2'>
                        <label className='text-sm font-medium'>Username</label>
                        <input
                            type="email"
                            placeholder='Username'
                            className='w-full border border-gray-300 rounded-sm px-4 py-3 outline-none focus:border-black'
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-sm font-medium'>Email Address</label>
                        <input
                            type="email"
                            placeholder='Email Address'
                            className='w-full border border-gray-300 rounded-sm px-4 py-3 outline-none focus:border-black'
                        />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label className='text-sm font-medium'>Password</label>
                        <input
                            type="password"
                            placeholder='******'


                            className='w-full border border-gray-300 rounded-sm px-4 py-3 outline-none focus:border-black'
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-sm font-medium'>Re-enter Password</label>
                        <input
                            type="password"
                            placeholder='******'


                            className='w-full border border-gray-300 rounded-sm px-4 py-3 outline-none focus:border-black'
                        />
                    </div>

                    <Link to='/' className="text-white self-center justify-center w-fit bg-[#ED5548] px-10 py-3 rounded-full flex items-center gap-3 cursor-pointer max-sm:justify-center hover:opacity-80 text-sm semibold transition duration-300">

                        <span>Register Now</span>
                    </Link>

                </form>

                <p className='text-center mt-6 semibold text-[#8b8b8b]'>
                    Already have an account?
                    <Link to='/login' className='text-black'> Login</Link>
                </p>

            </div>
            <span className="bold text-[#8b8b8b]">Copyright - 2025 - Company - All rights reserved. Powered by WordPress.</span>
        </div>
    )
}
