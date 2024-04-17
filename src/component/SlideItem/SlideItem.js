import './SlideItem.css'
import imgslider1 from '../../images/sliderimages1.jpg'
import imgslider2 from '../../images/sliderimages2.jpg'
import imgslider3 from '../../images/sliderimages3.jpg'

function SlideItem({title , url , id , currentIndex}){

    console.log('currentIndex : ' , currentIndex+1);
    console.log('id : ' , id);
    return (
        <div 
            style={{backgroundImage : `url(${url})`}} 
            className={`slide-item ${currentIndex+1 === id ? "d-block" : ""}`}>
        </div>
    )
}

export default SlideItem