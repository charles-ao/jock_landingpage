import {AiOutlineClose} from "react-icons/ai";
import { useGlobalContext } from "../context";

const navList = ['home',"what's new?",'store','blog','collaborations','about jock']

const SideNav = () => {
    const {sideNav, closeNav} = useGlobalContext()
    const year = new Date().getFullYear()


    return (
        <div className={sideNav? 'side-nav side-nav-show' : 'side-nav'}>
            <div className='top'>
                <div className='menu-items'>
                    {navList.map((val, index)=>{
                        return (
                            <div key={index} className='link'><h3>{val}</h3></div>
                        )
                    })}
                    <button className='btn-tertiary'>
                        Sign in
                    </button>
                    <div><p>Don't have an Account? <span>Sign Up</span></p></div>
                </div>
                <div>
                    <div  className='icon-wrapper' onClick={closeNav}>
                        <AiOutlineClose  className='icon' />
                    </div>  
                </div>
            </div>
            <div className='bottom'>
                <div className='location'>
                    <h4>&copy;Jock , {year}</h4>
                </div>
            </div>
        </div>
    )
}

export default SideNav;