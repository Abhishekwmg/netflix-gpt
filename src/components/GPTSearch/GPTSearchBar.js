import React from 'react'
import { lang } from '../../utils/langConstants';
import { useSelector } from 'react-redux';

const GPTSearchBar = () => {

    const setLang = useSelector((store => store.config.lang));



    return (
        <div className='pt-[10%] flex justify-center'>
            <form className='w-1/2 bg-black grid grid-cols-12'>
                <input className='p-4 m-4 col-span-9' type="text" placeholder={lang[setLang].gptSearchPlaceholder} />
                <button className='py-2 px-4 m-4 col-span-3 bg-red-700 text-white rounded-lg'>{lang[setLang].search}</button>
            </form>
        </div>
    )
}

export default GPTSearchBar;
