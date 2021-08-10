import {BiSearch} from "react-icons/bi";
import {HiOutlineArrowNarrowLeft} from 'react-icons/hi';
import {HiOutlineArrowNarrowRight} from 'react-icons/hi';
import { useGlobalContext } from "../context";

const Bottom = () => {
    const {next, prev, openSearch} = useGlobalContext()
    return (
        <div className='bottom'>
            <div  className='icon-wrapper' onClick={openSearch}>
                <BiSearch  className='icon' />
            </div>

            <div className='group'>
                <div  className='icon-wrapper' onClick={prev}>
                    <HiOutlineArrowNarrowLeft  className='icon' />
                </div>
                <div  className='icon-wrapper' onClick={next}>
                    <HiOutlineArrowNarrowRight  className='icon' />
                </div>
            </div>
        </div>
    )
}

export default Bottom;