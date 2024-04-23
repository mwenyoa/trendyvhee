import React from 'react';
import StarRatings from 'react-star-ratings';


type Props = {
    toggle: boolean;
    user: any;
    ratings: number;
    changeRating: (rate: number) => void
    setComment: any;
    onToggle: (musicId: number) => void
    onSubmitReview: () => void;
    musicId: number
}

const Rate = ({ toggle, user, ratings, changeRating, setComment, onToggle, onSubmitReview, musicId }: Props) => {
  return (
    <>
            {toggle && user &&
              <div className="bg-slate-800 bg-opacity-90 flex justify-center items-center absolute top-0 right-0 bottom-0 left-10 lg:left-0">
                  <div className="flex flex-col bg-white px-8 lg:px-16 py-14 rounded-md text-center w-10/12 lg:w-2/5">
                      <h1 className="text-xl mb-4 font-bold text-slate-500">How many stars?</h1>
                      <StarRatings
                          rating={ratings}
                          starRatedColor={'orange'}
                          changeRating={changeRating}
                          starDimension="25px"
                          starSpacing="2px"
                      />
                      <div className='pt-3'>
                        <textarea onChange={(e) => setComment(e.target.value)} placeholder="Comment" className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-600 bg-white px-5 py-2.5 text-gray-700 focus:border-gray-900 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40 dark:border-gray-400 dark:bg-gray-100 dark:text-gray-900 dark:focus:border-gray-300" />
                        <p className="mt-3 text-xs text-gray-900">Please leave a comment on how you fill about this song.</p>
                      </div>

                      <div className="flex gap-3 items-center justify-center pt-8">
                        <button className="bg-red-900 px-4 py-2 rounded-md text-md text-white" onClick={() => onToggle(musicId)}>Cancel</button>
                        <button className="bg-indigo-900 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold" onClick={onSubmitReview}>Submit</button>
                      </div>
                  </div>
              </div> 
            }
    </>
  )
}

export default Rate