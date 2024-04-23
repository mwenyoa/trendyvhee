import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { musicSearch } from '../../services/music.service';

type Props = {
    handleToggleSearch: () => void
    toggleSearch: boolean
}

const Search = (props: Props) => {
    const { handleToggleSearch, toggleSearch} = props;
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [results, setResults] = useState<any[]>([])

    const dispatch = useDispatch<AppDispatch>();

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
        setTimeout(() => {
            if (searchQuery !== '') {
                dispatch(musicSearch(searchQuery))
                .then(res => setResults(res.payload)
                ).catch(err => {throw new Error(err)}
                )
            }
        }, 1000);
    };        

    
  return (
    <>
        {toggleSearch && 
        (<div className="bg-gray-800 bg-opacity-90 flex justify-center items-baseline z-10 absolute top-14 right-0 bottom-0 left-0">
            <div className='w-full lg:w-3/5 m-6'>
                <form>
                    <div className="relative text-gray-600 focus-within:text-gray-400 p-3 mt-10 w-full ">
                        <button type='submit' onClick={handleToggleSearch} className='float-right'>
                            <svg className='h-6 w-6' fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/>
                            </svg>
                        </button>
                        <div className="flex justify-end items-center mt-8">
                            <input type="search" onChange={handleSearch} name="q" className="py-2 m-auto text-sm text-black bg-gray-300 rounded-xl pl-10 focus:outline-none focus:bg-gray-300 focus:text-gray-900 w-full lg:w-8/12 h-14" placeholder="Search..." autoComplete="off" />
                        </div>
                        
                        <div className="w-full max-w-lg px-10 py-8 mx-auto">
                        <div className="max-w-md mx-auto space-y-6">
                            <div className="dropdown-menu">

                            <div className="bg-white rounded-lg shadow-xl px-4 relative mt-8">
                                {results && results.length !== 0 && (<svg className="absolute bottom-full right-4" width={30} height={20} viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg">
                                    <polygon points="15, 0 30, 20 0, 20" fill="#FFFFFF" />
                                </svg>)}
                                {results && results.map((res) => (
                                    (res.artist.id ? <Link to={`/artist-list/${res.artist.id}`} key={res.id} className="py-6 flex items-center w-full hover:bg-gray-50">
                                        <div className="flex-1">
                                            <div className="text-gray-600 text-base">{res.title} by 
                                                <span className='font-semibold'> {res.artist.stage_name}</span>
                                            </div>
                                        </div>
                                        <div>
                                            <svg width={40} height={20} viewBox="0 0 40 20" xmlns="http://www.w3.org/2000/svg">
                                            <line x1={30} y1={2} x2={40} y2={10} stroke="#9CA3AF" />
                                            <line x1={30} y1={18} x2={40} y2={10} stroke="#9CA3AF" />
                                            <line x1={20} y1={10} x2={40} y2={10} stroke="#9CA3AF" />
                                            </svg>
                                        </div>
                                    </Link> : <Link to={`/tracks/${res.id}/${res?.title?.replace(/\s+/g, '-')}`} key={res.id} className="py-6 flex items-center w-full hover:bg-gray-50">
                                        <div className="flex-1">
                                            <div className="text-gray-600 text-base">{res.title} by 
                                                <span className='font-semibold'> {res.artist}</span>
                                            </div>
                                        </div>
                                        <div>
                                            <svg width={40} height={20} viewBox="0 0 40 20" xmlns="http://www.w3.org/2000/svg">
                                            <line x1={30} y1={2} x2={40} y2={10} stroke="#9CA3AF" />
                                            <line x1={30} y1={18} x2={40} y2={10} stroke="#9CA3AF" />
                                            <line x1={20} y1={10} x2={40} y2={10} stroke="#9CA3AF" />
                                            </svg>
                                        </div>
                                    </Link>)  
                                ))}

                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>)}
    </>
  )
}

export default Search;