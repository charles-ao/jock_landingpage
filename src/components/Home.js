import Navbar from './Navbar'
import Bottom from './Bottom';
import RightNav from './RightNav';

const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <RightNav />
            <Bottom />
        </div>
    )
}

export default Home;