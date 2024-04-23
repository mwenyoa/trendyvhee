import React from 'react'

type Props = {
    editToggler: boolean;
    toggleEdit: () => void
}

const Edit = (props: Props) => {
    const { editToggler } = props;

  return (
    <>
        {editToggler && (<div className="bg-slate-800 bg-opacity-50 h-screen flex justify-center items-center z-10 absolute top-0 right-0 bottom-0 left-0">
            <div className="bg-white px-16 py-14 rounded-md text-center">
                <form className="h-full  bg-white">
                    <div className="w-full flex justify-start text-gray-600 mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-wallet" width={52} height={52} viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                            <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
                        </svg>
                    </div>
                    <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Enter Genre Details</h1>
                    <label htmlFor="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Genre Name</label>
                    <input id="name" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="e.g Afrobeats" />

                    <label htmlFor="photo" className="flex flex-col items-center justify-center cursor-pointer w-full pb-6 mb-6  border-2 border-gray-100 rounded-lg bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div className="flex flex-col items-center justify-center pt-2 pb-3">
                            <p className="mb-2 text-sm text-gray-700 dark:text-gray-400"><span className="font-semibold">Upload Image Cover</span> or drag and drop</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <input name='photo'  id="photo" type="file" accept='image/*' className="hidden" />
                    </label>
                    
                    <button className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600" aria-label="close modal">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1={18} y1={6} x2={6} y2={18} />
                            <line x1={6} y1={6} x2={18} y2={18} />
                        </svg>
                    </button>
                </form>
                <button className="bg-red-500 px-4 py-2 rounded-md text-md text-white">Cancel</button>
                <button className="bg-indigo-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold">Ok</button>
            </div>
        </div>)}
    </>
  )
}

export default Edit