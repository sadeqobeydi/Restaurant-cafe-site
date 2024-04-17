import { Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaPaperPlane } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";


import "./MyNavbar.css"
import { useState } from "react";


function MyNavbar(){

    const [activeNavigate , setActiveNavigate] = useState('')

    const activate = ()=>{
        activeNavigate === '' ? setActiveNavigate('actived') : setActiveNavigate('')
    }


    return (
        <nav >
            <Row className="information justify-content-around py-1 d-none d-lg-flex">
                <div className="col text-center">
                    <p>ساعت کاری : شنبه - پنج شنبه 8:00 الی 23:00</p>
                </div>
                <div className="col text-center">
                    <p>sadeqby7@gmail.com <FaPaperPlane /></p>
                </div>
                <div className="col text-center ">
                    <p>+989016296570 <FaPhoneAlt /></p>
                </div>
            </Row>
            <Row className="navigate align-item-center py-2 position-relative w-100">
                <div className={`navigate-menu ${activeNavigate} col-md-9 px-md-4 px-lg-5 d-flex flex-column flex-md-row `}>
                        <NavLink to='/'>صفحه اصلی</NavLink>
                        <NavLink to='/menu'>منو ها</NavLink>
                        <NavLink to='/blog'>بلاگ ها</NavLink>
                        <NavLink to='/about'>درباره ما</NavLink>
                        <NavLink to='/concat'>تماس با ما</NavLink>
                        <NavLink to='/table-rezerv' className='rezerv'>رزرو میز</NavLink>
                </div>
                <div className="menu-icon col col-md-2 d-flex align-item d-md-none">
                    <p className="m-0" onClick={ activate}>
                        <IoMenu size='30px' className="mx-1"/>منو
                    </p>
                   
                </div>
                <div className="navigate-brand col col-md-3 justify-content-end px-5">
                    <p className="text-light m-0 lalezar fs-4">پارس فود</p>
                </div>
            </Row>
        </nav>

    )
}

export default MyNavbar