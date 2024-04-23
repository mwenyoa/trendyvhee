import React from 'react';
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import useFetchUsers from '../../hooks/useFetchUsers';
import { deleteUser } from '../../services/users.service';

type Props = {
  toggle: boolean
}

const Users: React.FC<Props> = ({toggle}) => {
  const users: any[] = useFetchUsers();  
  const dispatch = useDispatch<AppDispatch>();
  
  return (
    <div className='pt-16'>
      <div className={toggle ? "bg-gray-900 opacity-50 fixed inset-0 z-10" : "hidden"} id="sidebarBackdrop" />
        <p>Users</p>

        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
            <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Name</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900" />
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                    {users && users.map((user: any) => (
                        <tr key={user.id} className="hover:bg-gray-50">
                            <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                                <div className="h-10 w-10">
                                    {user.photo ? <img className="h-full w-full rounded-full object-cover object-center" src={user.photo} /> : 
                                      (<div className='border rounded-full'>
                                        <svg className="text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                        </svg>
                                      </div>)
                                    }
                                    <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white" />
                                </div>
                                <div className="text-sm">
                                    <div className="font-medium text-gray-700">{user.name}</div>
                                    <div className="text-gray-400">{user.email}</div>
                                </div>
                            </th>
                            
                            <td className="px-6 py-4">
                                <div className="flex justify-end gap-4">
                                    <span onClick={() => dispatch(deleteUser(user.id))} x-data="{ tooltip: 'Delete' }" className='cursor-pointer'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6" x-tooltip="tooltip">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                        </svg>
                                    </span>
                                    <span  x-data="{ tooltip: 'Edite' }" className='cursor-pointer' >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6" x-tooltip="tooltip">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                        </svg>
                                    </span>
                                </div>
                            </td>
                        </tr>
                      ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Users