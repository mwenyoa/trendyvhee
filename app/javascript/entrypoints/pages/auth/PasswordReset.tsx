import React, { useState, FormEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import { resetPassword } from '../../services/password.service';
import useSweetAlert from '../../hooks/useSweetAlert';

type Props = {}

interface LoginDetails {
  email: string
}

const initialState: LoginDetails = {
  email: "",
}

const PasswordReset = (props: Props) => {
  const [state, setState] = useState<LoginDetails>(initialState);
  const {user} = useSelector((state: RootState) => state.password);
  const {ShowAlert} = useSweetAlert(props);
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user: LoginDetails = {
      email: state.email,
    }
    dispatch(resetPassword({user})).then((res) => {
      if(res.payload !== undefined){
        ShowAlert({
          title: "Success",
          text: "Instrutions to reset your password has been sent to your email",
          icon: "success",
          time: 3000,
        });
      }
      if(res.payload === undefined){
        ShowAlert({
          title: "Error",
          text: res.error.message,
          icon: "error",
          time: 3000,
        });
      }
    })
    setState(initialState);
  }


  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setState({...state, [e.target.name]: e.target.value })
  }

  return (
    <>
        <section className="bg-black">
            <div className="max-w-full sm:max-w-3xl mx-auto h-screen flex items-center">
                <form onSubmit={handleSubmit} className="w-3/4 lg:w-2/5 p-4 mx-auto flex flex-col bg-gray-200 rounded-md">
                    <h1 className='text-center p-6 font-bold'>Reset Password</h1>
                    {user && <p className='text-green-600'>{user}</p>}
                    <input type="email" value={state.email} onChange={handleChange} name="email" placeholder="Enter Your Email Address" className="px-3 py-2.5 mb-3 border-2 border-gray-800 rounded-md" />
                    <button className="px-2 py-1.5 rounded-md  bg-black hover:bg-gray-700 text-white mt-3" type="submit">Send</button>
                </form>
            </div>
        </section>
    </>
  )
}

export default PasswordReset;