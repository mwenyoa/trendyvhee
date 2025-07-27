import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { fetchReviews } from "../services";
import { ReviewData } from "../helpers/ReviewsType";

const useFetchReviews = ({ review }: ReviewData) => {
      // const { product_id } = review || {};
  const dispatch: AppDispatch = useDispatch();
  const { reviews } = useSelector((state: RootState) => state.reviews);
  // console.log("Reviews hook", reviews)
  useEffect(() => {
    if (reviews.length === 0) {
      dispatch(fetchReviews(review));
    }
  }, [dispatch, review, reviews.length]);

  console.log("reviews  1234", reviews )
  return { reviews };
};

export default useFetchReviews;