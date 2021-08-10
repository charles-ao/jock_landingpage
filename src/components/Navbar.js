import Logo from '../asssets/images/jock.png';
import {AiOutlineMenu} from "react-icons/ai";
import { useGlobalContext } from '../context';

const Navbar = () => {
    const {openNav} = useGlobalContext();

    return (
        <nav className='navbar'>
            <div className='nav-center'>
                <div  className='icon-wrapper' onClick={openNav}>
                    <AiOutlineMenu  className='icon' />
                </div>
                <img src={Logo} alt='Jock_Logo' className='logo'/>
                <button className='btn-primary'>
                    Sign in
                </button>
            </div>
        </nav>
    )
}

export default Navbar;