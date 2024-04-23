import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShowAlert, useFetchProduct, useShoppingCart } from "../../hooks";
import { formatCurrency } from "../../helpers/formatCurrency";
import { ToastContainer } from "react-toastify";
import { useLocalStorage } from "../../hooks";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { MdRateReview } from "react-icons/md";
import AddReview from "./Review";

interface ProductParams {
  [key: string]: string | undefined;
  cid?: string;
  pid?: string;
}

const ProductDetails: React.FC = () => {
  const [thumbnailPos, setThumbnailPos] = useState<"bottom" | "left">(
    window.innerWidth < 768 ? "bottom" : "left"
  );
  const [showOverlay, setShowOverlay] = useState<false | true>(false);

  const { getCartItemQuantity, removeCartItem, increaseCartItemQuantity } =
    useShoppingCart();
  const { getCartItems } = useLocalStorage();
  const cartItems = getCartItems()?.map((item) => item);
  const params = useParams<ProductParams>();
  const product_info: ProductParams = {
    cid: params?.cid,
    pid: params?.pid,
  };
  const product = useFetchProduct({ product_info });

  //  Image  gallery array
  const images = product?.images?.map((imageUrl) => ({
    original: imageUrl,
    thumbnail: imageUrl,
    description: `${product?.description}`,
    originalAlt: "Alt text for full-size image",
    thumbnailAlt: "Alt text for thumbnail",
    originalTitle: `${product?.product_name}`,
    thumbnailTitle: "Title for thumbnail",
    srcSet: `${imageUrl} 1024w, ${imageUrl} 800w, ${imageUrl} 500w`,
  }));

  const [isInCart, setIsInCart] = useState<boolean>(false);

  useEffect(() => {
    const inCart = cartItems.find((item) => item?.id === product?.id);
    setIsInCart(Boolean(inCart));
  }, [cartItems, product]);

  // resizing  screen hook
  useEffect(() => {
    const handleResize = () => {
      setThumbnailPos(window.innerWidth < 768 ? "bottom" : "left");
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleAddToCart = () => {
    const productId = product?.id;
    if (productId) {
      const currentQuantity = getCartItemQuantity(productId);
      increaseCartItemQuantity(productId);
      ShowAlert("Product added to cart", "success");
    }
  };

  const overlayHandler = () => setShowOverlay((prev) => !prev);

  const closeReviewModal = () => {
    setShowOverlay(false);
  };

  return (
    <section className="container mx-auto dark:bg-gray-900 py-8 bg-white px-4 py-6 my-20 rounded-lg shadow-md text-black w-full">
      <div className="mx-auto py-20 px-2 sm:px-4 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 grid-flow-row-dense rlative">
        <div className="md:col-span-2 max-w-2xl h-full w-full mx-auto rounded-md shadow-md hover:shadow-md relative">
          <div className="h-full  w-full rounded-md bg-gray-200 dark:bg-gray-500 mb-4 p-2 relative">
            <ImageGallery
              items={images || []}
              thumbnailPosition={thumbnailPos}
              showIndex={true}
              lazyLoading={true}
            />
          </div>
        </div>
        <div className="md:col-span-1 bg-dark-500 p-4 rounded">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
            {product?.product_name}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
            {product?.description}
          </p>
          <div className="grid grid-cols-1 mb-4">
            <div className="mr-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Price:
              </span>
              <span className="text-gray-500 dark:text-gray-300 font-semibold">
                {formatCurrency(product?.price)}
              </span>
            </div>
            <div>
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Status:
              </span>
              <span className="text-grey-500 semibold dark:text-gray-300">
                Available
              </span>
            </div>
          </div>
          <div className="mb-4">
            <span className="font-bold text-gray-700 dark:text-gray-300">
              Select Color:
            </span>
            <div className="flex items-center mt-2">
              <div className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2"></div>
              <div className="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></div>
              <div className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></div>
              <div className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></div>
            </div>
          </div>
          <div className="mb-4">
            <span className="font-bold text-gray-700 dark:text-gray-300">
              Select Size:
            </span>
            <div className="flex items-center mt-2 space-x-2">
              <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-400 dark:hover:bg-gray-600">
                S
              </button>
              <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-400 dark:hover:bg-gray-600">
                M
              </button>
              <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-400 dark:hover:bg-gray-600">
                L
              </button>
              <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-400 dark:hover:bg-gray-600">
                XL
              </button>
              <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-400 dark:hover:bg-gray-600">
                XXL
              </button>
            </div>
          </div>
          <div className="text-center">
            <button
              className="w-[90%] mx-auto bg-blue-500 dark:bg-gray-700 text-white dark:text-white py-4 my-8 px-4 rounded-full font-bold hover:bg-blue-600 dark:hover:bg-gray-600"
              onClick={
                isInCart ? () => removeCartItem(product?.id) : handleAddToCart
              }
            >
              {isInCart === true ? "Remove from Cart" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
      
<div className="inline-flex items-center justify-center w-full ">
    <hr className="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
    <span className="absolute px-3 font-large font-semibold text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">Product Reviews</span>
</div>

      <div className="flex justify-end w-full mb-20 ">   <button
        onClick={overlayHandler}
        className="w-100 px-3 flex  py-3 text-lg bg-gradient-to-r from-green-300 to-blue-600  font-semibold rounded-xl text-white text-bold"
      >
        <span><MdRateReview className="text-3xl mx-auto"/></span><span className="">Add Review</span>
      </button></div>
      <AddReview product_id={product?.id} show={showOverlay} onClose={closeReviewModal} />
    </section>
  );
};

export default ProductDetails;
