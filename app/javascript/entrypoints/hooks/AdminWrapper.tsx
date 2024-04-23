// import React, { FC, useState } from 'react';
// import { Navigate } from 'react-router-dom';
// import { Navbar, SideBar } from '../components';
// import useFetchUser from './useFetchUser';

// type Props = {}

// const AdminWrapper = (Component: FC<any> )=> (props: Props) => {
//     const [toggle, setToggle] = useState<boolean>(false);

//      const handleToggle = () => {
//         setToggle(prev => !prev)
//      }

//      const user = useFetchUser();
    
//   return (
//     <>
//         {user && user?.is_admin && <div>
//             <Navbar handleToggle={handleToggle} />
//             <SideBar toggle={toggle} />
//             <div id="main-content" className="h-full bg-gray-50 relative overflow-y-auto lg:ml-64">
//                 <main>
//                     <div className="pt-6 px-4">
//                         <Component {...props} toggle={toggle} />
//                     </div>
//                 </main>
//             </div>
//         </div> }
//     </>
//   )
// }

// export default AdminWrapper;