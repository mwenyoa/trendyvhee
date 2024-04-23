import React, { useState } from "react";
import { IoMdStar } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";


type reviewParams = {
  product_id?: string;
  user_id?: string;
  show?: boolean;
  onClose: () => void
};

interface reviewInt {
  product_id?: string;
  user_id?: string;
  rating?: number | undefined;
  message?: string;
}

const initReview = {
  product_id: "",
  user_id: "",
  rating: 0,
  message: "",
} as reviewInt;

const AddReview: React.FC<reviewParams> = (props) => {
  const { product_id, show, onClose} = props;
  const [isClosed, setIsClosed] = useState<false | true>(false)
  const [review, setReview] = useState(initReview);

  // change handler
  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "number") {
      setReview({ ...review, [name]: parseInt(value) });
    } else {
      setReview({ ...review, [name]: value });
    }
  };

  // rating change handler
  const ratingChangeHandler = (ratingValue: number) => {
    setReview({ ...review, rating: ratingValue });
  };

  // submit handler
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { product_id, user_id, rating, message } = review;
    if (product_id && user_id && message !== "" && rating !== 0) {
      console.log(review);
    }
    // Hide overlay after submission

    onClose();
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
                  {" "}
                  Your opinion matters!
                </span>{" "}
                <span>
                  <button onClick={onClose}>
                  <RxCross1 className=" col-span-1 text-3xl text-blue-700 font-bold flex-end hover:cursor-pointer hover:font-bold" />
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
              ></textarea>
              <button
                type="submit"
                className="py-3 text-lg bg-gradient-to-r from-green-300 to-blue-600  font-bold rounded-xl text-white text-bold"
              >
                Rate now
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddReview;
