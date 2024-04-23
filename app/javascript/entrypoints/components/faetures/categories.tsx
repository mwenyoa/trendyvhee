import React from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import base_url from "../../helpers/base";
import { useFetchCategories } from "../../hooks";
import { useIsLoading } from "../../hooks";
import Loader from "./loader";

type Props = {};

const Categories = (props: Props) => {
  const categories = useFetchCategories();
  const { loading } = useIsLoading("categories");
  return (
    <section className="bg-gray-2 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:my-[120px]">
      <div className="container mx-auto">
        <div className="w-full mx-auto flex flex-wrap">
          {loading === "pending" ? (<Loader loading={loading} />) : categories ? (
            categories?.map((category: any) => (
              <div data-aos="fade-up" className="mx-auto  md:w-1/2 lg:w-1/3 xl:w-1/4" key={category.id}>
                <div className="mb-10 overflow-hidden mx-8 my-8 shadow-lg bg-gray-200 rounded-lg bg-white shadow-2 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3">
                  <img
                    src={category.photo}
                    alt="image"
                    className="object-cover h-64 w-96"
                  />
                  <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                    <h3>
                      <Link
                        to={"#"}
                        className="mb-4 block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                      >
                        {category.category_name}
                      </Link>
                    </h3>
                    <p className="mb-7 text-base leading-relaxed text-body-color dark:text-dark-6">
                      {category.description}
                    </p>

                    <Link
                      to={`category/${category.id}`}
                      className="inline-block  hover:shadow-lg rounded-full border border-gray-3 px-7 py-2 text-base font-medium text-body-color transition hover:border-primary text-blue-800 hover:text-blue-900 hover:bg-primary hover:text-blue-700 dark:border-dark-3 dark:text-dark-6"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center">"No Categories to show"</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Categories;
