// import React from 'react'
// import { Nav } from '../../components';

// type Props = {}

// const Contact = (props: Props) => {
//   return (
//     <>
//         <Nav />
//         <div className="w-full py-6 sm:py-8 lg:pb-12 lg:pt-16">
//             <div className="bg-gradient-to-b from-blue-900 to-blue-800 h-96" />
//             <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
//                 <div className="bg-white w-full shadow rounded p-8 sm:p-12 -mt-72">
//                 <p className="text-3xl font-bold leading-7 text-center">Contact Us</p>
//                 <form 
//                     action="https://formspree.io/f/mnqlovzq"
//                     method="POST"
//                     id="form"
//                 >
//                     <div className="md:flex items-center mt-12">
//                     <div className="w-full md:w-1/2 flex flex-col">
//                         <label 
//                             className="font-semibold leading-none"
//                         >Name</label>
//                         <input 
//                             type="text" 
//                             className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" 
//                             id="fname"
//                             name="_name"
//                             required
//                         />
//                     </div>
//                     <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
//                         <label className="font-semibold leading-none">Email</label>
//                         <input 
//                             type="email" 
//                             className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" 
//                             id="email"
//                             name="_reply"
//                             required
//                         />
//                     </div>
//                     </div>
//                     <div className="md:flex items-center mt-8">
//                     <div className="w-full flex flex-col">
//                         <label className="font-semibold leading-none">Subject</label>
//                         <input type="text" className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" />
//                     </div>
//                     </div>
//                     <div>
//                     <div className="w-full flex flex-col mt-8">
//                         <label className="font-semibold leading-none">Message</label>
//                         <textarea 
//                             className="h-40 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" 
//                             defaultValue={""} 
//                             id="textarea"
//                             required
//                         />
//                     </div>
//                     </div>
//                     <div className="flex items-center justify-center w-full">
//                     <button 
//                         className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none"
//                         id="submit" 
//                         type="submit"
//                     >
//                         Send message
//                     </button>
//                     </div>
//                 </form>
//                 </div>
//             </div>
//         </div>
//     </>
//   )
// }

// export default Contact;