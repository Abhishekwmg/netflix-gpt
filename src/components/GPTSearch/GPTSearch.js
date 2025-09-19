import React from 'react'
import GPTSearchBar from './GPTSearchBar';
import GPTMovieSuggestions from './GPTMovieSuggestions';
import { NETFLIX_POSTER } from '../../utils/constant';

const GPTSearch = () => {
    return (
        <div>
            <div className='absolute -z-10 blur-[2px]'>
                <img src={NETFLIX_POSTER} alt="Netflix Home Page Banner" />
            </div>
            <GPTSearchBar />
            <GPTMovieSuggestions />
        </div>
    )
}

export default GPTSearch;
