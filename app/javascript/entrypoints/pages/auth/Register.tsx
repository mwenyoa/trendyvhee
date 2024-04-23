import React, { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { postUser } from "../../services/user.service";
import { RootState, AppDispatch } from "../../store/store";
import useForm from "../../hooks/useForm";
import useSweetAlert from "../../hooks/useSweetAlert";

type Props = {};

interface registerDetails {
  name: string;
  email: string;
  password: string;
}

const initialState: registerDetails = {
  name: "",
  email: "",
  password: "",
};

const Register = (props: Props) => {
  const [state, setState] = useState<registerDetails>(initialState);
  const loading: string = useSelector(
    (state: RootState) => state.user.loading
  );
  const { errors, validate } = useForm(props);
  const { ShowAlert } = useSweetAlert(props);

  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit =  (e: FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault();
    const user: registerDetails = {
      name: state.name,
      email: state.email,
      password: state.password,
    };
    dispatch(postUser({ user })).then((res: any) => {
      if(res.payload !== undefined){
        ShowAlert({
          title: "Success",
          text: "Registered Successfully",
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
  };  

  const handleChange = (e: { target: { name: any; value: string } }) => {
    let name: string = e.target.name;
    let val = e.target.value;

    validate(e, name, val);

    setState({ ...state, [name]: val });
  };

  return (
    <>
      <section className="bg-black">
        <div className="max-w-full sm:max-w-3xl mx-auto h-screen flex items-center">
          <form
            onSubmit={handleSubmit}
            className="w-3/4 lg:w-[400px] p-6 mx-auto flex flex-col bg-gray-200 rounded-md"
          >
            <h1 className="text-center p-6 font-bold">Register</h1>
            <input
              type="text"
              value={state.name}
              name="name"
              onChange={handleChange}
              placeholder="Username"
              className="px-3 py-2.5 mb-3 border-2 border-gray-800 rounded-md"
              required
            />
            {errors.username && <h3>{errors.username}</h3>}
            <input
              type="email"
              value={state.email}
              name="email"
              onChange={handleChange}
              placeholder="Email Address"
              className="px-3 py-2.5 mb-3 border-2 border-gray-800 rounded-md"
              required
            />
            {errors.email && <h3>{errors.email}</h3>}
            <input
              type="password"
              value={state.password}
              name="password"
              onChange={handleChange}
              placeholder="Enter Passwords"
              className="px-3 py-2.5 border-2 border-gray-800 rounded-md"
              required
            />
            {errors.password && <h3>{errors.password}</h3>}
            <button
              className="px-2 py-1.5 rounded-md bg-black hover:bg-gray-700 text-white mt-3"
              type="submit"
            >
              {loading === "pending" ? (
                <svg
                  role="status"
                  className="inline h-4 w-4 animate-spin mr-2 text-gray-200 dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              ) : (
                "Register"
              )}
            </button>
            <Link
              to="/login"
              className="text-gray-500 mt-8 py-2 border-t-2 border-gray-400 text-center"
            >
              Login here
            </Link>
            {/* <div>
              <a
                href="/users/auth/facebook"
                className="flex items-center justify-center w-full px-4 py-2 mt-2 space-x-3 text-sm text-center bg-blue-500 text-white transition-colors duration-200 transform border rounded-lg dark:text-gray-300 dark:border-gray-300 hover:bg-gray-600 dark:hover:bg-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="currentColor"
                  className="bi bi-facebook"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
                <span className="text-sm text-white dark:text-gray-200">
                  Login with Facebook
                </span>
              </a>
            </div> */}
            <p className="py-3">
              By signing up you agree to our
              <Link to="/privacy-policy" className="text-blue-700">
                {" "}
                privacy policy{" "}
              </Link>
              and
              <Link to="/terms-and-conditions" className="text-blue-700">
                {" "}
                terms & conditions
              </Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
