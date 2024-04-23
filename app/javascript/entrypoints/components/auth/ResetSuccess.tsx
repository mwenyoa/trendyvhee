import React from 'react';
import { Link } from 'react-router-dom';

type Props = {}

const ResetSuccess = (props: Props) => {
  return (
    <>
<div className="bg-black h-screen">
  <div className="relative mx-auto max-w-[400px] rounded-md border border-slate-50 bg-white p-2 text-sm shadow-lg">
    <Link to='/login' className="top-0 absolute right-4 ml-auto text-slate-500 hover:text-slate-900">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
      </svg>
    </Link>
    <div className="flex space-x-4">
      <div className="flex-1">
        <div className="mt-6 text-slate-900 text-lg">
          Your password was reset successfully. Close the tab to sign in.
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default ResetSuccess