import { Col, Row } from 'react-bootstrap'
import MyNavbar from '../../component/myNavbar/MyNavbar'
import Slider from '../../component/slider/Slider'
import { FaPlay } from "react-icons/fa";
import { BsCake2 } from "react-icons/bs"; 
import { PiBagSimpleLight } from "react-icons/pi";
import { LuPartyPopper } from "react-icons/lu";
import { MdFastfood } from "react-icons/md";
import './home.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import CountUp from 'react-countup';
import MealItem from '../../component/MealItem/MealItem';


function Home(){

    const [statistics , setStatistics] = useState([]) 

    const [meals , setMeals] = useState([])



    useEffect(()=>{
        
        axios.get('http://localhost:4000/statistics')
        .then((response)=> setStatistics(response.data))
        
        
        axios.get('http://localhost:4000/meal')
        .then((response)=> setMeals(response.data))

    },[])

    return(
        <>
            <header>
                <div className='position-absolute top-0 left-0 w-100 navnigate-container'>
                    <MyNavbar/>
                </div>
                <Slider/>
            </header>

            <article className='abouted  position-relative '>
                <Row className='bg-white py-5 px-2 px-md-5'>
                    <h2 className='before-title fs-1'>پارس فود</h2>
                    <h3 className='section-title lalezar fs-1 text-center pt-3'>رستوران و کافه پارس فود</h3>
                    <p className='iransanse pt-3 px-md-5 text-md-center'>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد
                    </p>
                </Row>
                <div className="playlogo d-flex align-items-center justify-content-center">
                    <FaPlay size='20px' color='white'/>
                </div>
            </article>

            <section className='statistics'>
                <Row className='row-cols-1 row-cols-md-4'>
                    {
                        statistics.map((item)=> (
                            <Col className='py-4' key={item.id}>
                                <p className='number'>
                                    <CountUp end={item.number} duration = '4' enableScrollSpy />
                                </p>
                                <p className='title'>{item.title}</p>
                            </Col>
                        ))
                    }
                </Row>
            </section>

            <section className='servises'>
                <Row className='bg-white py-5 px-2 px-md-5'>
                    <h2 className='before-title fs-1'>خدمات</h2>
                    <h3 className='section-title lalezar fs-1 text-center pt-3'>انواع خدمات رسانی به مشتریان</h3>
                </Row>
                <Row className='justify-content-center row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4'>
                    <Col>
                        <div className="servis-item px-3 px-lg-5 my-3">
                            <div className="servis-logo text-center rounded rounded-circle clo"> 
                                <LuPartyPopper size='100'/> 
                            </div>
                            <h3 className='lalezar my-3'>رزرو تالار عروسی</h3>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="servis-item px-3 px-lg-5 my-3">
                            <div className="servis-logo text-center rounded rounded-circle clo"> 
                                <BsCake2 size='100'/> 
                            </div>
                            <h3 className='lalezar my-3'>جشن تولد و تزئینات</h3>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="servis-item px-3 px-lg-5 my-3">
                            <div className="servis-logo text-center rounded rounded-circle clo"> 
                                <MdFastfood  size='100'/> 
                            </div>
                            <h3 className='lalezar my-3'>سرو غذا</h3>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="servis-item px-3 px-lg-5 my-3">
                            <div className="servis-logo text-center rounded rounded-circle"> 
                                <PiBagSimpleLight size='100'/> 
                            </div>
                            <h3 className='lalezar my-3'>جلسه کاری</h3>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                        </div>
                    </Col>
                </Row>
            </section>

            <section className='meal my-4'>
                <Row className='bg-white py-5 px-2 px-md-5'>
                    <h2 className='before-title fs-1'>وعده غذایی بهداشتی</h2>
                    <h3 className='section-title lalezar fs-1 text-center pt-3'>منوی غدایی پارس فود</h3>
                </Row>
                <Row className=''>
                    {
                        meals.map( (meal) =>{
                            return (
                                <Col className='col-12 col-md-6 col-lg-4' key={meal.mealname}>
                                    <h3 className='meal-title text-center vazir mb-3'>{meal.mealname}</h3>
                                    {
                                        meal.items.map((item)=>{
                                            return (
                                                <div className='cards-content   p-3 my-4  d-flex flex-row rounded-3 shadow' key={item.id}>
                                                    <MealItem  {...item}/>
                                                </div>
                                            )
                                        })
                                    }

                                </Col>
                            )
                        })
                    }
                </Row>
            </section>
        </>
    )
}

export default Home