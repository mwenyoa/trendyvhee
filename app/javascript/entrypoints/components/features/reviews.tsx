import React, { useState } from "react";
import useFetchReviews from "../../hooks/UseReviews";
import { ReviewData } from "../../helpers/ReviewsType";
import ProductRating from "./rating";
import Pagination from 'react-rails-pagination';

const ProductReviews: React.FC<ReviewData> = ({ review }) => {
  const { reviews } = useFetchReviews({ review });
  const [currentPage, setCurrentPage] = useState<Number>(1);
  const currrentUrl = window.location;
  console.log('=================current url content debug===================');
  console.log(currrentUrl);
  console.log('====================================');
  const handlePageChange = (page) => {
    setCurrentPage(parseInt(page));
    console.log("Page: ", review);
   useFetchReviews({ review });
    history.pushState(null, '', `${currrentUrl}?page=${page}`)
  };

  console.log("Product Reviews: 123 ", reviews);
  return (
    <div className="grid grid-cols-1 justify w-[100%] my-5">
      {reviews?.reviews?.map((reviewItem: any, index: number) => (
        <div
          key={index}
          className="review-item w-full grid md:grid-cols-4 px-2 my-1 bg-white rounded-lg p-4 shadow-md flex- flex-flow"
        >
          <img
            src={reviewItem?.user?.photo}
            className="product-image w-24 h-24 rounded-full md:col-span-1"
            alt="User"
          />
          <div className="review-details ml-4 md:col-span-3">
            <div className="flex flex-flow:wrap">

              <p className="text-gray-600">
                <span>{reviewItem?.user?.firstname}</span>{" "}
                <span>{reviewItem?.user?.lastname}</span>
              </p>
              <p className="text-gray-700 font-semibold flex">
                <ProductRating reviewItem={reviewItem} />
              </p>
            </div>
            <p className="text-gray-600">{reviewItem.review_text}</p>
          </div>
          
        </div>
      ))}
      <Pagination page={currentPage} pages={reviews?.total_pages} handleChangePage={handlePageChange} />
    </div>
  );
};

export default ProductReviews;
