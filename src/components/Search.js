import Results from './Results';
import {BiSearch} from "react-icons/bi";
import {AiOutlineClose} from "react-icons/ai";
import { useGlobalContext } from '../context';


const Search = () => {
    const year = new Date().getFullYear()
    const {searchPage, closeSearch, setQuery} = useGlobalContext();


    return (
        <div className={searchPage? 'search search-show': 'search'}>
            <div className='search-top'>
                <div  className='icon-wrapper' onClick={closeSearch}>
                    <AiOutlineClose  className='icon' />
                </div>
                
                <div className='search-box'>
                    <BiSearch/>
                    <input type='text' 
                    placeholder='Find Products...' 
                    onChange={(e)=>{setQuery((e.target.value).toLowerCase())}}/>
                </div>

                <div className='result-box'>
                    <h2>
                        Search Results
                    </h2>
                    <div>
                        <Results />
                    </div>
                </div>
            </div>
            <div className='search-bottom'>
                <div className='location'>
                    <h4>&copy;Jock , {year}</h4>
                </div>
            </div>
        </div>
    )
}

export default Search;