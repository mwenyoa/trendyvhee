import React, { useState  } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginUser } from "../../services";
import { AppDispatch } from "../../store/store";
import { useDispatch } from "react-redux";
import useIsLoading from "../../hooks/useIsLoading";
import ShowAlert from "../../hooks/toastyMessage";

type Props = {};

interface userLoginInt {
  email: string;
  password: string;
}

const initialInfo = {
  email: "",
  password: "",
};

const Login = (props: Props) => {
  // hooks
  const [loginInfo, setLoginInfo] = useState<userLoginInt>(initialInfo);
  const dispatch = useDispatch<AppDispatch>();
  const { loading } = useIsLoading("user");


  // handlers
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const loginHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = loginInfo;
    if (email && password != "") {
      const loginData = new FormData();
      loginData.append("user[email]", email);
      loginData.append("user[password]", password);
      dispatch(loginUser(loginData)).then((res: any) => {
        if (res.payload != undefined) {
          setLoginInfo(initialInfo);
          ShowAlert("Logged In Successfully", "success");
        } else if (res.payload === undefined) {
          ShowAlert(res.error.message, "error");
        }
      });
    } else {
      ShowAlert("Password and email required", "warning");
    }
  };

  return (
    <section className="bg-gray-100 mx-auto w-full h-full">
      <div className="bg-grey-lighter min-h-screen flex flex-col w-100">
        <div className="container max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-4 py-6 rounded-md shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign In</h1>
            <form onSubmit={loginHandler} className="w-full px-2">
              <div className="grid  md:grid-cols-1 gap-4">
                <input
                  type="email"
                  className="block border border-grey-light w-full p-3 rounded mb-2"
                  name="email"
                  onChange={changeHandler}
                  value={loginInfo.email}
                  placeholder="Email"
                />

                <input
                  type="password"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="password"
                  onChange={changeHandler}
                  value={loginInfo.password}
                  placeholder="Password"
                />
              </div>
              <button
                type="submit"
                className="w-full text-center  py-4 mx-auto rounded bg-[#eab308] text-white text-bold hover:bg-[#ca8a04] focus:outline-none my-2"
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
                  <h2 className="text-white-800 text-lg hover:text-bold ">Log In</h2>
                )}
              </button>
            </form>
          </div>

          <div className="text-grey-dark mt-6 flex flex-evenly">
            Do mot have an account?
            <Link
              className="no-underline  border-gray-300 text-blue-700 text-bold"
              to={"/register"}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Login;
