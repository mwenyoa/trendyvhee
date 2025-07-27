import React from "react";
import { IoMdStar } from "react-icons/io";

const ProductRating = ({ reviewItem }: { reviewItem: { rating: number } }) => {
    const stars: JSX.Element[] = [];
    for (let count = 0; count < reviewItem.rating; count++) {
        stars.push(
            <IoMdStar
                key={count}
                className={`text-4xl cursor-pointer ${
                    count < reviewItem.rating ? "text-yellow-500" : ""
                }`}
            />
        );
    }
    return stars;
};

export default ProductRating;
