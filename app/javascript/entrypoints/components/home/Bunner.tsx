import React, { useState } from 'react';
import { Link } from 'react-router-dom';

type Props = {
    user: any;
}

declare var logo: any;

const Bunner = ({ user }: Props) => {
  const [message, setMessage] = useState(false);

  return (
    <>
        {!user && (<div className={!message ? "w-full px-2 md:px-4 pb-4 mx-auto" : "hidden"}>
            <div className="flex flex-wrap sm:flex-nowrap sm:justify-center sm:items-center bg-blue-900 rounded-lg shadow-lg relative sm:gap-3 px-4 sm:pr-4 md:px-4 py-3">
              <div className="order-1 sm:order-none w-11/12 sm:w-auto max-w-screen-sm inline-block text-sm md:text-base mb-2 sm:mb-0">Welcome to Tunespot! We're glad you're here. In order to access all of our amazing services, please log in to your account. Thank you for choosing Tunespot!</div>
              <Link to='/login' className="order-last sm:order-none w-full sm:w-auto inline-block bg-indigo-700 hover:bg-indigo-800 active:bg-indigo-900 focus-visible:ring ring-indigo-400 text-white text-xs md:text-sm font-semibold text-center whitespace-nowrap rounded-lg outline-none transition duration-100 px-4 py-2">Sign in</Link>
              <div className="order-2 sm:order-none w-1/12 sm:w-auto flex justify-end items-start sm:absolute sm:right-0 sm:mr-2 xl:mr-3">
                <button type="submit" onClick={() => setMessage(prev => !prev)} className="text-white hover:text-indigo-100 active:text-indigo-200 transition duration-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 xl:w-6 h-5 xl:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>)}
    </>
  )
}

export default Bunner