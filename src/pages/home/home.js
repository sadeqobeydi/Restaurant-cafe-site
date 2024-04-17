import { useEffect, useState } from 'react'
import SlideItem from '../../component/SlideItem/SlideItem'
import MyNavbar from '../../component/myNavbar/MyNavbar'
import imgslider1 from '../../images/sliderimages1.jpg'
import imgslider2 from '../../images/sliderimages2.jpg'
import imgslider3 from '../../images/sliderimages3.jpg'
import { FaChevronLeft , FaChevronRight} from "react-icons/fa";


import './home.css'
function Home(){

    const [currentIndex , setCurrentIndex] = useState(0)

    const slids = [
        { id : 1 , title : 'slide1' , url : imgslider1},
        { id : 2 , title : 'slide2' , url : imgslider2},
        { id : 3 , title : 'slide3' , url : imgslider3}
    ]

    const nextSlideHandler = () =>{
        currentIndex < slids.length-1 ? setCurrentIndex(currentIndex+1) : setCurrentIndex(0)
    }
    const previousSlideHandler = ()=>{
        currentIndex > 0 ? setCurrentIndex(currentIndex-1) : setCurrentIndex(slids.length-1)
    }

    useEffect(()=>{
        console.log(currentIndex);
    })

    return(
        <>
            <header>
                <div className='position-absolute top-0 left-0 w-100 navnigate-container'>
                    <MyNavbar/>
                </div>
                <div className="slider">
                    <div className="slide-content">
                        <SlideItem currentIndex={currentIndex} {...slids[0]}/>
                        <SlideItem currentIndex={currentIndex} {...slids[1]}/>
                        <SlideItem currentIndex={currentIndex} {...slids[2]}/>
                    </div>
                    <button className='next' onClick={nextSlideHandler}>
                        <FaChevronRight size="25px"/>
                    </button>
                    <button className='previous' onClick={previousSlideHandler}>
                        <FaChevronLeft size="25px"/>
                    </button>
                </div>
            </header>
        </>
    )
}

export default Home