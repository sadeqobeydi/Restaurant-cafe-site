import './SlideItem.css'

function SlideItem({title , url , id , currentIndex}){

    return (
        <div 
            style={{backgroundImage : `url(${url})`}} 
            className={`slide-item ${currentIndex+1 === id ? "active" : ""}`}>
            
            <h3 className='text-white fs-1 px-5 text-center text-bold '>{title}</h3>
        
        </div>
    )
}

export default SlideItem