import { useGlobalContext } from "../context";

const RightNav = () => {
    const {count} = useGlobalContext()
    const Digits = [1,2,3,4,5]
    return (
        <div className='right-nav'>
            <div className='group'>
                {
                    Digits.map(val => {
                        return (
                            <div key={val} data-id={val} className={count === val? 'circle circle-active' : 'circle'}>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default RightNav;