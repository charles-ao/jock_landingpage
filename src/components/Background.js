import { useEffect, useState } from 'react';
import {HiOutlineArrowNarrowRight} from 'react-icons/hi';
import { useGlobalContext } from '../context';

const Background = ({fig, caption, heading, btnText}) => {
    const {count} = useGlobalContext()

    const bkgName = `background-${fig}`

    const [state, setState] = useState(false);
    
    setTimeout(() => {
        setState(true)
    }, 500);


    useEffect(() => {
        setTimeout(() => {
            setState(true)
        }, 700);
        return function cleanup() {
            setState(false)
        }
    }, [count])


    return (
        <div className={bkgName}>
            <div className={state? 'background-content background-content-show':'background-content'}>
                <div>
                    <h3>{heading}</h3>
                    <h1>{caption}</h1>
                    <h3>Quisque nec nisi sollicitudin, 
                        condimentum metus in, dignissim ipsum. Phasellus 
                        iaculis dolor et ornare lacinia. 
                    </h3>
                    <button className='btn-secondary'><span>{btnText}</span><HiOutlineArrowNarrowRight/></button>
                </div>
            </div>
        </div>
    )
}

export default Background;