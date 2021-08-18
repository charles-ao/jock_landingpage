import Item from './Item';
import Carousel from 'react-elastic-carousel'
import { useGlobalContext } from '../context';

const Results = () => {
    const {data} = useGlobalContext();
    const breakPoints = [
        {width: 1, itemsToShow: 1},
        {width: 550, itemsToShow: 2},
        {width: 768, itemsToShow: 3},
        {width: 1024, itemsToShow: 4},
    ]

    return (
        <div className='results'>
            {data.length === 0 ?
                <div className='no-result'>
                    <div>
                        <h2>Oops... Nothing matches your query</h2>
                        <h3>Try "Ball" or "Racket"</h3>
                    </div>
                    
                </div>
            :
                <Carousel breakPoints={breakPoints} pagination={false}>
                    {   
                        data.map(val =>  {
                            const {id, name, price, loc} = val;
                            return  <Item key={id} name={name} price={price} image={loc}/>
                        })
                    }
                </Carousel>
            }
            
        </div>
    )
}

export default Results;