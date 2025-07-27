import React, { useState } from "react";
import { IoMdStar } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { createReview } from "../../services";
import { AppDispatch } from "../../store/store";
import Notifications from "./notifications";
import { ShowAlert } from "../../hooks";

type ReviewParams = {
  product_id?: string;
  show?: boolean;
  onClose: () => void;
};

interface ReviewInt {
  product_id?: string;
  rating: number;
  message: string;
}

const initReview: ReviewInt = {
  product_id: "",
  rating: 0,
  message: "",
};

const AddReview: React.FC<ReviewParams> = ({ product_id, show, onClose }) => {
  const [review, setReview] = useState(initReview);
  const dispatch: AppDispatch = useDispatch();

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setReview((prevReview) => ({
      ...prevReview,
      [name]: name === "rating" ? parseInt(value) : value,
    }));
  };

  const ratingChangeHandler = (ratingValue: number) => {
    setReview({ ...review, rating: ratingValue });
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Update the product_id from props in the review state
    setReview((prevReview) => ({
      ...prevReview,
      product_id: product_id || prevReview.product_id,
    }));
    const { rating, message } = review;
    if (review?.product_id && message !== "" && rating !== 0) {
      const reviewData: {} = {
        review: {
          product_id: review?.product_id,
          review_text: message,
          rating: rating,
        },
      };

      // review data
      dispatch(createReview(reviewData)).then((res: any) => {
        console.log("res", res)
        if (res.payload !== undefined) {
          ShowAlert("You successfully added a review", `success`);
        } else {
          ShowAlert(res.error.message, "error");
        }
      });
    }
    if (review) {
      onClose();
    }
  };

  return (
    <>
      {show && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-gray-800 opacity-50"></div>
          <div className="relative bg-white rounded-xl shadow-lg w-full max-w-lg">
            <form
              onSubmit={submitHandler}
              className="flex flex-col space-y-3 p-8"
            >
              <h2 className="text-gray-800 text-2xl font-semibold grid grid-cols-8 space-x-5">
                <span className="flex-start col-span-7">
                  Your opinion matters!
                </span>{" "}
                <span>
                  <button onClick={onClose}>
                    <RxCross1 className="col-span-1 text-3xl text-blue-700 font-bold flex-end hover:cursor-pointer hover:font-bold" />
                  </button>
                </span>
              </h2>
              <div className="flex flex-col space-y-3">
                <span className="text-lg text-gray-800">
                  How would you rate this product?
                </span>
                <div className="flex space-x-3 items-center justify-center">
                  {[1, 2, 3, 4, 5].map((value: number) => (
                    <IoMdStar
                      key={value}
                      className={`text-4xl cursor-pointer ${
                        value <= review.rating
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }`}
                      onClick={() => ratingChangeHandler(value)}
                    />
                  ))}
                </div>
              </div>
              <textarea
                rows="3"
                name="message"
                value={review.message}
                onChange={changeHandler}
                className="p-4 text-gray-500 rounded-xl resize-none"
                placeholder="Leave a message"
                required
              ></textarea>
              {/* Hidden input with product_id */}
              <input type="hidden" value={product_id} name="product_id" />
              <button
                type="submit"
                className="py-3 text-lg bg-gradient-to-r from-green-300 to-blue-600 font-bold rounded-xl text-white"
              >
                Rate now
              </button>
            </form>
          </div>
          <Notifications />
        </div>
      )}
    </>
  );
};

export default AddReview;
