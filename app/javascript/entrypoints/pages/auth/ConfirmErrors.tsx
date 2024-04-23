import React from 'react';
import { Link } from 'react-router-dom';

type Props = {}

const ConfirmErrors = (props: Props) => {
  return (
    <>
        <div className="bg-gray-900 w-full px-16 md:px-0 h-screen flex items-center justify-center">
            <div className="bg-gray-300 border border-gray-300 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
                <p className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-gray-900 mt-4">Server Error</p>
                <p className="text-gray-800 mt-8 py-2 border-y-2 text-center">Whoops, this account has already been confirmed.</p>
                <Link to='/login' className='py-3 font-semibold'>Login here</Link>
            </div>
        </div>
    </>
  )
}

export default ConfirmErrors;