
const Item = ({name, price, image}) => {
    return (
        <div className='item'>
            <img src={image} alt='Court Rope'/>
            <button className='btn-search'>
                    View
            </button>
            <div className='img-content'>
                <h3>{name}</h3>
                <h4>&#8358; {price}</h4>
            </div>
        </div>
    )
}

export default Item;