import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppDispatch } from "../../store/store";
import useIsLoading from "../../hooks/useIsLoading";
import { ShowAlert } from "../../hooks";
import { createCategory } from "../../services";
import { Loader } from "../faetures";

type Props = {};

interface categoryInt {
  photo: Blob | File | null;
  category_name: string;
  description: string;
}

const initialCategory = {
  photo: null,
  category_name: "",
  description: "",
};

const AddCategory = (props: Props) => {
  // hooks
  const [category, setCategory] = useState<categoryInt>(initialCategory);
  const dispatch: AppDispatch = useDispatch();
  const { loading } = useIsLoading("category");
  //   handlers
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files, name, value } = e.target;
    if (files && files.length > 0) {
      setCategory({ ...category, [name]: files?.[0] });
    } else {
      setCategory({ ...category, [name]: value });
    }
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { description, category_name, photo } = category;
    if (category_name && description != "" && photo != null) {
      const categoryData = new FormData();
      categoryData.append("category[category_name]", category_name);
      categoryData.append("category[description]", description);
      categoryData.append("category[photo]", photo);
      dispatch(createCategory({categoryData})).then((res: any) => {
        if (res.payload != undefined) {
          setCategory(initialCategory);
          ShowAlert("Category created successfully", "success");
        } else if (res.payload === undefined) {
          ShowAlert(res.error.message, "error");
        }
      });
    } else {
      ShowAlert("Please completely fill out the form", "warning");
    }
  };

  return (
    <section className="bg-gray-100 mx-auto w-full h-full">
      <div className="bg-grey-lighter min-h-screen flex flex-col w-100">
        <div className="container max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-4 py-6 rounded-md shadow-md text-black w-full">
            <h1 className="mb-8 md:text-3xl sm:text-2xl text-center">
              Create Product Category
            </h1>
            <form onSubmit={submitHandler} className="w-full px-2">
              <div className="grid grid-cols-1 gap-4">
                <input
                  type="file"
                  className="block border shadow border-grey-light w-full p-3 rounded mb-4"
                  name="photo"
                  onChange={changeHandler}
                  placeholder="Profile Picture"
                  accept="image/*"
                  multiple={false}
                />
                <input
                  type="text"
                  className="block border border-grey-light w-full p-3 rounded mb-2"
                  name="category_name"
                  onChange={changeHandler}
                  value={category.category_name}
                  placeholder="Category Name"
                />

                <input
                  type="text"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="description"
                  onChange={changeHandler}
                  value={category.description}
                  placeholder="Category Description"
                />
              </div>
              <button
                type="submit"
                className="w-full text-center  py-4 mx-auto rounded bg-[#eab308] text-white text-bold hover:bg-[#ca8a04] focus:outline-none my-2"
              >
                <Loader loading={loading} />
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default AddCategory;
