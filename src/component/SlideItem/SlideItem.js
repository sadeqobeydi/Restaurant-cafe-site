import { Link } from 'react-router-dom'
import './SlideItem.css'

function SlideItem({title }){

    return (
            <>
                <h3 className='text-white fs-1 px-5 text-center text-bold'>{title}</h3>
                <div className="content-button d-flex align-item-center justify-content-center mt-5 py-4">
                    <Link to='#' className='order-now'>اکنون سفازش دهید</Link>
                    <Link to='#' className='view-menu'>مشاهده منو</Link>
                </div>
            </>

    )
}

export default SlideItem