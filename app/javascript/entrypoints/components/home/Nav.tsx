import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState, AppDispatch } from '../../store/store';
import { logoutUser } from '../../services/session.service';
import userFetchUser from '../../hooks/useFetchUser';

type Props = {}
declare var logo: any;
declare var loggedIn: any

const Nav = (props: Props) => {
    const {error, loading} = useSelector((state: RootState) => state.session);
    const user = userFetchUser();

    const [toggle, setToggle] = useState(false)
    
    const dispatch = useDispatch<AppDispatch>();

    const onLogout = () => {
        dispatch(logoutUser())
    }

  return (
    <>
        <nav className="fixed top-0 left-0 z-20 w-full border-b border-gray-900 bg-gray-900 py-2.5 px-5">
            <div className="container m-auto flex max-w-6xl flex-wrap items-center justify-between">
                <Link to='/'>
                    <img src={logo} className='h-5 w-24 lg:h-6 lg:w-28' alt="" />
                </Link>
                <div className="mt-2 sm:mt-0 sm:flex md:order-2">
                {user ? <button type="submit" onClick={() => dispatch(logoutUser())} className="rounde mr-3 hidden border border-blue-500 py-1.5 px-6 text-center text-sm font-medium text-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-300 md:inline-block rounded-lg">
                    {loading === "pending" ? (	<svg role="status" className="inline h-4 w-4 animate-spin mr-2 text-gray-200 dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>) : "Logout"}</button>:
                (<><Link to='/login' className="rounde mr-3 hidden border border-blue-700 py-1.5 px-6 text-center text-sm font-medium text-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-300 md:inline-block rounded-lg">Login</Link><Link to='/register' className="rounde mr-3 hidden bg-blue-700 py-1.5 px-6 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 md:mr-0 md:inline-block rounded-lg">Register</Link></>)}
                <button onClick={() => setToggle(prev => !prev)} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden" aria-controls="navbar-sticky" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
                </button>
                </div>
                <div className={toggle ? "w-full items-center justify-between md:order-1 md:flex md:w-auto" :  "hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"} id="navbar-sticky">
                    <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-900 p-4 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:text-sm md:font-medium">
                        <li>
                            <Link to='/' className="block rounded py-2 pl-3 pr-4 text-gray-100 hover:bg-gray-700 md:p-0 md:hover:bg-transparent md:hover:text-blue-500">Home</Link>
                        </li>
                        <li>
                            <Link to='/about' className="block rounded py-2 pl-3 pr-4 text-gray-100 hover:bg-gray-700 md:p-0 md:hover:bg-transparent md:hover:text-blue-500">About</Link>
                        </li>
                        <li>
                            <Link to='/services' className="block rounded py-2 pl-3 pr-4 text-gray-100 hover:bg-gray-700 md:p-0 md:hover:bg-transparent md:hover:text-blue-500">Services</Link>
                        </li>
                        {/* <li>
                            <Link to='/contact' className="block rounded py-2 pl-3 pr-4 text-gray-100 hover:bg-gray-700 md:p-0 md:hover:bg-transparent md:hover:text-blue-500">Contact</Link>
                        </li> */}
                        <div className={toggle ? "block" : "hidden"}>
                            <button type="submit" onClick={onLogout} className={user ?  "border border-gray-200 bg-blue-900 text-gray-100 w-full rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-700 focus:outline-none focus:shadow-outline" : "hidden"}>
                            Logout
                            </button>
                            <div className={user ? "hidden" : "flex flex-col"}>
                                <Link to='/login' className="border border-gray-200 bg-blue-900 text-center text-gray-100 w-full rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">
                                Login
                                </Link>
                                <Link to='/register' className="border border-gray-200 bg-blue-900 text-center text-gray-100 w-full rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">
                                Register
                                </Link> 
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Nav