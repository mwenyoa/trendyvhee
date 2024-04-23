import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import { useFetchCategories, useIsLoading } from "../../hooks/";
import ShowAlert from "../../hooks/toastyMessage";
import { createProduct } from "../../services";
import { AppDispatch } from "../../store/store";
import { Loader } from "../faetures";

type Props = {};

interface productI {
  product_name: string;
  description: string;
  price: number;
  category_id: string;
  quantity: number;
  manufacturer: string;
  images: File[] | [];
}

const InitialProduct = {
  product_name: "",
  description: "",
  price: 0,
  category_id: "",
  quantity: 0,
  manufacturer: "",
  images: [],
} as productI;

const AddProduct = (props: Props) => {
  // hooks
  const dispatch: AppDispatch = useDispatch();
  const categories = useFetchCategories();
  const { loading } = useIsLoading("product");
  const [product, setProduct] = useState<productI>(InitialProduct);
  const [option, setOption] = useState<string>("");
  // handlers
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files, name, value } = e.target;
    if (files && files.length > 0) {
      const ImagesArray = Array.from(files);
      setProduct({ ...product, [name]: ImagesArray });
    }else {
      setProduct({ ...product, [name]: value });
    }
  };

 const selectChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setOption(value);
    setProduct({ ...product, category_id: value });
  }

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {
      product_name,
      description,
      manufacturer,
      category_id,
      price,
      quantity,
      images,
    } = product;

    console.log("product category id: ", category_id);
    if (
      product_name &&
      description &&
      manufacturer &&
      category_id !== "" &&
      price &&
      quantity !== 0 &&
      images.length > 0
    ) {
      const productData = new FormData();
      productData.append("product[product_name]", product_name);
      productData.append("product[description]", description);
      productData.append("product[manufacturer]", manufacturer);
      productData.append("product[category_id]", category_id);
      productData.append("product[price]", price.toString());
      productData.append("product[quantity]", quantity.toString());
      for (let img = 0; img < images.length; img++) {
        productData.append("product[images][]", images[img]);
      }

      dispatch(createProduct({ productData })).then((res: any) => {
        if (res.payload != undefined) {
          setProduct(InitialProduct);
          ShowAlert("Product Created Successfully", "success");
        } else if (res.payload === undefined) {
          ShowAlert(res.error.message, "error");
        }
      });
    } else {
      ShowAlert("Please provide all information", "warning");
    }
  };
  return (
    <section className="bg-gray-100 mx-auto w-full h-full">
      <div className="bg-grey-lighter min-h-screen flex flex-col w-100">
        <div className="container max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-4 py-6 rounded-md shadow-md text-black w-full">
            <h1 className="mb-8 md:text-3xl sm:text-2xl text-center">
              Add Product
            </h1>
            <form onSubmit={submitHandler} className="w-full px-2">
              <div className="grid grid-cols-1 gap-4">
                <input
                  type="file"
                  className="block border shadow border-grey-light w-full p-3 rounded mb-4"
                  name="images"
                  onChange={changeHandler}
                  placeholder="Profile Picture"
                  accept="image/*"
                  multiple={true}
                />
                <input
                  type="text"
                  className="block border border-grey-light w-full p-3 rounded mb-2"
                  name="product_name"
                  onChange={changeHandler}
                  value={product.product_name}
                  placeholder="Product Name"
                />

                <input
                  type="text"
                  className="block border border-grey-light w-full p-3 rounded mb-2"
                  name="manufacturer"
                  onChange={changeHandler}
                  value={product.manufacturer}
                  placeholder="Product Manufacturer"
                />

                <input
                  type="number"
                  className="block border border-grey-light w-full p-3 rounded mb-2"
                  name="price"
                  onChange={changeHandler}
                  value={product.price}
                  placeholder="Product Price"
                  min={0}
                  title="Unit Price"
                />

                <input
                  type="number"
                  className="block border border-grey-light w-full p-3 rounded mb-2"
                  name="quantity"
                  onChange={changeHandler}
                  value={product.quantity}
                  placeholder="Product Quqntity"
                  min={0}
                  title="Product Quantity"
                />
                <input
                  type="text"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="description"
                  onChange={changeHandler}
                  value={product.description}
                  placeholder="Category Description"
                />
                <select
                  name="category_id"
                  value={option}
                  onChange={selectChangeHandler}
                  className="p-4"
                  required
                >
                  <option value="" disabled>Choose Category</option>
                  {categories ? (
                    categories?.map((category: any) => (
                      <option value={category?.id} key={category.id}>
                        {category.category_name}
                      </option>
                    ))
                  ) : (
                    <option>No categories</option>
                  )}
                </select>
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

export default AddProduct;
