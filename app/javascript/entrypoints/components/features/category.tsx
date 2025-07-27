import React from "react";
import { useParams, Params, Link } from "react-router-dom";
import { useFetchCategory } from "../../hooks/UseFetch";
import { useIsLoading } from "../../hooks";
import Loader from "./loader";

type Props = {};

const CategoryDetails = (props: Props) => {
  const { loading } = useIsLoading("category");
  const param = useParams<Readonly<Params<string>>>();
  const id: string | undefined = param.id;
  const category: any = useFetchCategory({ id });

  console.log("category", category.products)

  return (
    <section className="bg-gray-2 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:my-[120px]">
      <div className="container mx-auto">
      <div className="w-full mx-auto flex flex-wrap">
        {loading == "pending" ? (<Loader loading={loading} />) : (
          <>
            <h2 className="text-center mx-auto w-full font-bold md:text-4xl sm:text-3xl text-gray-700 text-bold">
              {category.category_name}
            </h2>
               {category?.products?.length > 0 ? category?.products?.map((product: any) => {
                return(
                  <div className="mx-auto  md:w-1/2 lg:w-1/3 xl:w-1/4" key={product?.id} data-aos="slide-up">
                  <div className="mb-10 overflow-hidden mx-8 my-8 shadow-lg bg-gray-200 rounded-lg bg-white shadow-2 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3">
                    <img src={product?.images?.[0]} alt="image" className="h-64 w-96 object-cover" />
                    <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                      <h3>
                        <Link
                          to={`product/${product.id}`}
                          className="mb-4 block text-md hover:underline hover:text-blue-700 font-semibold text-dark hover:text-primary dark:text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                        >
                         {product?.product_name}
                        </Link>
                      </h3>
                      <p className="mb-7 text-base leading-relaxed text-body-color dark:text-dark-6">
                        {}
                      </p>
                      <div className="grid grid-cols-2">
                        <h2 className="font-bold text-grey-500">$ {product.price}</h2>
                        <Link to={`product/${product.id}`} className="text-white bg-gray-600 hover:bg-gray-700 font-semibold shadow-md p-2 rounded-full">View</Link>
                      </div>
                    </div>
                  </div>
                </div>
                )
               }) : (<div className="text-center mx-auto my-auto text-grey-700 bg-white shadow-lg p-5 w-full  text-lg">They are no prodducts in this category</div>)}
            </>
        )}
        </div>
      </div>
    </section>
  );
};

export default CategoryDetails;
