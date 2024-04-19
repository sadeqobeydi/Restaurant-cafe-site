import { useEffect, useState } from 'react'
import SlideItem from '../../component/SlideItem/SlideItem'
import MyNavbar from '../../component/myNavbar/MyNavbar'
import imgslider1 from '../../images/sliderimages3.jpg'
import imgslider2 from '../../images/sliderimages1.jpg'
import imgslider3 from '../../images/sliderimages2.jpg'
import { FaChevronLeft , FaChevronRight} from "react-icons/fa";


import './home.css'
function Home(){

    const [currentIndex , setCurrentIndex] = useState(0)

    const slids = [
        { id : 1 , title : 'غذاهای خوشمزه ما با حضور شما گرم' , url : imgslider1 },
        { id : 2 , title : 'بهترین مکان برای شروع روز شما' , url : imgslider2},
        { id : 3 , title : 'شیرینی خامه ای آماده سرو' , url : imgslider3},
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
                        {slids.map(item => <SlideItem currentIndex={currentIndex} {...item}/>)}
                    </div>

                    <button className='next' onClick={nextSlideHandler}>
                        <FaChevronRight size="25px"/>
                    </button>
                    <button className='previous' onClick={previousSlideHandler}>
                        <FaChevronLeft size="25px"/>
                    </button>

                    <div className="radial-content">
                        {
                            slids.map((item , index) =>{
                                return <div 
                                    className={`point ${currentIndex===index? 'active':''}`}
                                    onClick={()=> setCurrentIndex(index)}
                                    >
                                    
                                </div>
                            })
                        }
                    </div>
                </div>
            </header>
        </>
    )
}

export default Home