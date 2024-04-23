import React, { useState, useMemo, FormEvent } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import countryList from "react-select-country-list";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/store";
import useFetchUser from "../../../hooks/useFetchUser";
import useSweetAlert from "../../../hooks/useSweetAlert";

type Props = {
  handleToggle: () => void;
  toggle: boolean;
};

interface Iuser {
   name: string;
   email: string;
  phone_number: string;
  country: string;
  gender: string;
  bio: string;
  role: string;
}

type State = any;

const Update: React.FC<Props> = (props: Props) => {
  let value: any;
  let setValue: any;
  [value, setValue] = useState();

  const user = useFetchUser();

const initialState: Iuser = {
  name: user?.name,
  email: user?.email,
  phone_number: "",
  country: "",
  gender: "",
  bio: "",
  role: "fan",
};


  const { handleToggle, toggle } = props;

  const [state, setState] = useState<Iuser>(initialState);
  const [fileSelected, setFileSelected] = React.useState<File>();
  const { ShowAlert } = useSweetAlert(props);
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;

    if (!fileList) return;

    setFileSelected(fileList[0]);
  };

  const onStateChange = (e: { target: { name: any; value: string } }) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const onUserSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

   if(state.bio && state.gender && state.country  && value !==""){
    if (fileSelected) {
      const formData = new FormData();
      formData.append("user[name]", state.name);
      formData.append("user[email]", state.email);
      formData.append("user[phone_number]", value);
      formData.append("user[country]", state.country);
      formData.append("user[bio]", state.bio);
      formData.append("user[gender]", state.gender);
      formData.append("user[role]", state.role);
      formData.append("user[photo]", fileSelected as Blob, fileSelected.name);

      dispatch(updatUser({ user: formData, id: user.id })).then((res: any) => {
        if (res.payload !== undefined) {
          ShowAlert({
            title: "Success",
            text: "User updated successfully",
            icon: "success",
            time: 2500,
          });
          setState(initialState);
        }
        if (res.payload === undefined) {
          ShowAlert({
            title: "Error",
            text: res.error.message,
            icon: "error",
            time: 2500,
          });
        }
      });
    }
   }else{
    ShowAlert({
      title: "Error",
      text: "Please fill all the fields",
      icon: "error",
      time: 2500,
    });
   }
  
  };



  const options = useMemo(() => countryList()?.getData(), []);

  return (
    <>
      {toggle ? (
        <div className="py-20 h-full bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 lg:left-[15%] bottom-0 left-0 overflow-y-scroll">
          <p className="text-xl text-white font-bold my-16 text-center">Complete User Registration</p>
          <div className="container mx-auto w-11/12 md:w-2/3 max-w-lg lg:max-w-[90%] bg-gray-700">
            <form
              onSubmit={onUserSubmit}
              className="h-full w-full py-8 mb-24 px-5 md:px-10 bg-black shadow-md rounded border border-gray-400"
            >
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label htmlFor="name" className="text-gray-400 font-bold">
                      Username
                    </label>
                    <input
                      type="text"
                      onChange={onStateChange}
                      value={state?.name }
                      name="name"
                      id="name"
                      placeholder="Username"
                      className="w-full rounded-md border border-gray-600 bg-gray-800 py-3 px-6 text-base font-medium text-gray-200 outline-none focus:border-purple-400 focus:shadow-md placeholder:text-gray-400"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label htmlFor="email" className="text-gray-400 font-bold">
                      Email
                    </label>
                    <input
                      type="text"
                      onChange={onStateChange}
                      name="email"
                      value={state?.email }
                      id="email"
                      placeholder="Email"
                      className="w-full rounded-md border border-gray-600 bg-gray-800 py-3 px-6 text-base font-medium text-gray-200 outline-none focus:border-purple-400 focus:shadow-md placeholder:text-gray-400"
                    />
                  </div>
                </div>
              </div>
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="phone_number"
                      className="text-gray-400 font-bold"
                    >
                      Phone Number
                    </label>
                    <PhoneInput
                      country="ZM"
                      value={value}
                      onChange={setValue}
                      inputClass="phone-input"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="country"
                      className="text-gray-400 font-bold"
                    >
                      Country
                    </label>
                    <select
                      onChange={onStateChange}
                      name="country"
                      className="focus:border-purple-400 rounded-md border border-slate-600 bg-gray-800 py-3 px-4 text-slate-400 outline-none transition placeholder:text-slate-400 w-full"
                    >
                      {options &&
                        options.map((option: any) => (
                          <option key={option.value} value={option.label}>
                            {option.label}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="mb-5">
                <div className="main w-full flex  overflow-hidden select-none">
                  <div className="title py-3 my-auto px-5 bg-gray-700 text-white text-sm font-semibold mr-3">
                    Gender
                  </div>
                  <label className="flex radio p-2 cursor-pointer">
                    <input
                      onChange={onStateChange}
                      value="male"
                      className="my-auto transform scale-125"
                      type="radio"
                      name="gender"
                    />
                    <div className="title px-2 text-gray-300">male</div>
                  </label>
                  <label className="flex radio p-2 cursor-pointer">
                    <input
                      onChange={onStateChange}
                      value="female"
                      className="my-auto transform scale-125"
                      type="radio"
                      name="gender"
                    />
                    <div className="title px-2 text-gray-300">female</div>
                  </label>
                </div>
              </div>
              <div>
                <div className="flex flex-wrap mb-6">
                  <div className="w-full sm:w-1/2">
                    <textarea
                      name="bio"
                      onChange={onStateChange}
                      className="autoexpand tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block text-white w-full bg-gray-800 border border-gray-700 rounded focus:outline-none focus:bg-gray-700 focus:border-gray-500"
                      id="message"
                      placeholder="Bio..."
                    />
                    <label
                      htmlFor="message"
                      className="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"
                    >
                      Bio...
                    </label>
                  </div>
                  <div className="w-full px-3 sm:w-1/2">
                    <label
                      htmlFor="photo"
                      className="flex flex-col items-center justify-center w-full  border-2 border-gray-600 rounded-lg cursor-pointer bg-gray-800 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-700 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                    >
                      <div className="flex flex-col items-center justify-center pt-2 pb-3">
                        <p className="mb-2 text-sm text-gray-50 dark:text-gray-400">
                          <span className="font-semibold">
                            Upload Profile Image
                          </span>{" "}
                          or drag and drop
                        </p>
                        <p className="text-xs text-gray-300 dark:text-gray-400">
                          SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                      </div>
                      <input
                        onChange={handleChange}
                        name="photo"
                        id="photo"
                        type="file"
                        accept="image/*"
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <button
                    type="submit"
                    className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                  >
                    Submit
                  </button>
                  <button
                    type="submit"
                    onClick={handleToggle}
                    className="hover:shadow-form rounded-md bg-[#610909] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center w-full h-96 bg-zinc-900">
          <p className="text-gray-200 py-6 text-center">
            To continue, please complete your profile
          </p>
          <button
            onClick={handleToggle}
            className="relative text-center h-12 w-60 transition-all duration-500
            before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-zinc-400 before:transition-all
            before:duration-300 before:opacity-20 before:hover:opacity-0 before:hover:scale-50
            after:absolute after:top-0 after:left-0 after:w-full after:h-full after:opacity-0 after:transition-all after:duration-300
            after:border after:border-white/50 after:scale-125 after:hover:opacity-100 after:hover:scale-100"
          >
            <span className="relative text-white uppercase font-thin">
              Complete Profile
            </span>
          </button>
        </div>
      )}
    </>
  );
};

export default Update;
