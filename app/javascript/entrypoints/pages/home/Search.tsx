import React from 'react'

type Props = {}

const Search = (props: Props) => {
  return (
    <div className='m-auto'>
        <div className="w-full h-12 pl-3 pr-2 bg-gray-900 border-none shadow rounded-full flex justify-between items-center relative">
          <input type="search" name="search" id="search" placeholder="Search" className=" bg-gray-900 border-none appearance-none w-full outline-none focus:outline-none focus:border-none active:border-none active:outline-none" />
          <button type="submit" className="ml-1 border-none outline-none focus:outline-none active:outline-none">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" className="border-none w-6 h-6">
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
    </div>
  )
}

export default Search