// import React, { useState, FormEvent } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { RootState, AppDispatch } from '../../store/store';
// import { newPassword } from '../../services/password.service';
// import { ResetSuccess } from '../../components';

// type Props = {}

// interface LoginDetails {
//   password: string
// }

// const initialState: LoginDetails = {
//   password: "",
// }

// const PasswordEmail = (props: Props) => {
//   const [state, setState] = useState<LoginDetails>(initialState);
//   const {error, message, loading} = useSelector((state: RootState) => state.newPassword);

//   const dispatch = useDispatch<AppDispatch>();
//   const token = useParams();  

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const user = {
//       password: state.password,
//       reset_password_token: token.reset_password_token
//     }
//     dispatch(newPassword({user}))
//     setState(initialState);
//   }
  
//   const handleChange = (e: { target: { name: any; value: any; }; }) => {
//     setState({...state, [e.target.name]: e.target.value })
//   }

//   return (
//     <>
//         {loading === "pending" ? 
//         (<div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
//           <div className="border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 h-64 w-64" />
//         </div>
//         ) :
//         (message ? (<ResetSuccess/>):(<section className="bg-black">
//             <div className="max-w-full sm:max-w-3xl mx-auto h-screen flex items-center">
//                 <form onSubmit={handleSubmit} className="w-3/4 lg:w-2/5 p-4 mx-auto flex flex-col bg-gray-200 rounded-md">
//                     <h1 className='text-center p-6 font-bold'>New Password</h1>
//                     <input type="password" onChange={handleChange} name='password' placeholder="New Password" className="px-3 py-2.5 border-2 border-gray-800 rounded-md" />
//                     <input type="password" name='password' placeholder="Confirm Password" className="mt-3 px-3 py-2.5 border-2 border-gray-800 rounded-md" />
//                     {error && <p className='text-center'>{error}</p>}
//                     <button className="px-2 py-1.5 rounded-md  bg-black hover:bg-gray-700 text-white mt-3" type="submit">Reset</button>
//                 </form>
//             </div>
//         </section>))}
//     </>
//   )
// }

// export default PasswordEmail;