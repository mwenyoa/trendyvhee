import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AppDispatch } from "../../store/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RegisterUser } from "../../services";
import useIsLoading from "../../hooks/useIsLoading";
import ShowAlert from "../../hooks/toastyMessage";



type Props = {};

interface UserInfo {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  phoneno: string;
  confirm_password: string;
  profile_picture: null | File | Blob;
}

const initialInfo: UserInfo = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  confirm_password: "",
  phoneno: "",
  profile_picture: null,
};

const Register = (props: Props) => {
  const [info, setInfo] = useState<UserInfo>(initialInfo);
  const dispatch = useDispatch<AppDispatch>();
  const { loading } = useIsLoading("newuser");

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files, name, value } = e.target;
    if (files && files.length > 0) {
      setInfo({ ...info, [name]: files?.[0] });
    } else {
      setInfo({ ...info, [name]: value });
    }
  };

  const registrationHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {
      firstname,
      lastname,
      email,
      phoneno,
      password,
      confirm_password,
      profile_picture,
    } = info;

    if (
      firstname &&
      lastname &&
      email &&
      phoneno &&
      password !== "" &&
      profile_picture !== null
    ) {
      if (password === confirm_password) {
        const userData = new FormData();
        userData.append("user[firstname]", firstname);
        userData.append("user[lastname]", lastname);
        userData.append("user[email]", email);
        userData.append("user[phoneno]", phoneno);
        userData.append("user[password]", password);
        userData.append("user[photo]", profile_picture as Blob);
        const data = { user: userData };
        dispatch(RegisterUser(data)).then((res: any) => {
        if (res.payload !== undefined) {
            ShowAlert("Signed Up Successfully", "success");
            setInfo(initialInfo);
          } else {
            ShowAlert(res.error.message, "error");
          }
        });
      } else {
        ShowAlert("Two passwords did not match", "warning");
      }
    } else {
      ShowAlert("All form input fields require values", "warning");
    }
  };

  return (
    <section className="bg-gray-100 mx-auto w-full h-full">
      <div className="bg-grey-lighter min-h-screen flex flex-col w-100">
        <div className="container max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-4 py-6 rounded-md shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <form onSubmit={registrationHandler} className="w-full px-2">
              <input
                type="file"
                className="block border shadow border-grey-light w-full p-3 rounded mb-4"
                name="profile_picture"
                onChange={changeHandler}
                placeholder="Profile Picture"
                accept="image/*"
                multiple={false}
              />
              <div className="grid  md:grid-cols-2 gap-4">
                <input
                  type="text"
                  className="block border border-grey-light w-full p-3 rounded mb-2"
                  name="firstname"
                  placeholder="First Name"
                  onChange={changeHandler}
                  value={info.firstname}
                />

                <input
                  type="text"
                  className="block border border-grey-light w-full p-3 rounded mb-2"
                  name="lastname"
                  placeholder="Last Name"
                  onChange={changeHandler}
                  value={info.lastname}
                />
                <input
                  type="email"
                  className="block border border-grey-light w-full p-3 rounded mb-2"
                  name="email"
                  onChange={changeHandler}
                  value={info.email}
                  placeholder="Email"
                />
                <input
                  type="tel"
                  className="block border border-grey-light w-full p-3 rounded mb-2"
                  name="phoneno"
                  onChange={changeHandler}
                  value={info.phoneno}
                  placeholder="Phone Number"
                />

                <input
                  type="password"
                  className="block border border-grey-light w-full p-2 rounded mb-2"
                  name="password"
                  onChange={changeHandler}
                  value={info.password}
                  placeholder="Password"
                />
                <input
                  type="password"
                  className="block border border-grey-light w-full p-3 rounded mb-2"
                  name="confirm_password"
                  value={info.confirm_password}
                  onChange={changeHandler}
                  placeholder="Confirm Password"
                />
              </div>
              <button
                type="submit"
                className="w-full text-center  py-4 mx-auto rounded bg-[#eab308] text-white text-bold hover:bg-[#ca8a04] focus:outline-none my-1"
              >
                    {loading  === 'pending'? (
                 <div className="text-white-800 text-lg hover:text-bold focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
                 <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                 <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                 </svg>
                 Loading.....
                 </div>
                ) : (
                  <h2 className="text-white-800 text-lg hover:text-bold">Create Account</h2>
                )}
              </button>
            </form>
            <div className=" w-[90%] mx-auto text-center text-sm text-grey-dark mt-4">
              <p className="sm:w-full">By signing up, you agree to the: </p>
              <Link
                className="no-underline border-b border-grey-dark text-blue-700 mx-2"
                to="/terms"
              > {" "}
                Terms of Service  
              </Link>|
              <Link
                className="no-underline border-b border-grey-900 text-blue-700 mx-2"
                to="/policy"
              >
                  Privacy Policy
              </Link>
            </div>
          </div>

          <div className="text-grey-dark mt-6 flex flex-evenly">
            <h3>Already have an account?</h3>
            <Link
              className="no-underline border-b border-gray-300 text-blue-700 text-bold"
              to={'/login'}
            >
              Log In
            </Link>
            .
          </div>
        </div>
      </div>
        <ToastContainer />
    </section>
  );
};

export default Register;
