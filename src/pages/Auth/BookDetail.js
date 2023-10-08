import React, { useEffect, useState } from 'react';
import '../css/BookDetail.css';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const BookDetail = () => {

    const location = useLocation();

    const [bookdetail, setBookDetail] = useState();
    const navigate =useNavigate();

    const Cancle = () => {
        navigate("/home")
    }
    

    return (
        <>

            <div className="banner">
                <h1> Game Details</h1>
            </div>

            <div className="product_container">

                <div id="Slide1" className="Slider_Container SLider_border Product_tumbnail animate">
                    <img src={`http://localhost:3001${location?.state?.bookImage}`}
                    height={350}
                    width={350}
                    />
                </div>

                <div id="Slide2" className="Slider_Container SLider_border Product_tumbnail animate" style={{ display: "none" }}>
                    <img src="https://source.unsplash.com/450x450/?handwatch" />
                </div>

                <div id="Slide3" className="Slider_Container SLider_border Product_tumbnail animate" style={{ display: "none" }}>
                    <img src="https://www.wallpaperflare.com/search?wallpaper=GAME" />
                </div>
                <div className="details">
                    <h3 className="title"><b>Title :</b> {location?.state?.title}</h3>
                    <div className="author"><b>Author :</b> {location?.state?.author}</div>
                    <span className="price"><b>Price :</b> ${location?.state?.price}</span>
                    <div className="star-ratings-css">
                        <div className="star-ratings-css-top"></div>
                        <div className="star-ratings-css-bottom"></div>
                    </div>
                    <div className='category'><b>Category :</b> {location?.state?.category}</div>
                    <div className='description'><b>Description :</b>{location?.state?.description}</div>
                    

                    {/* <ul className="sub-details">

                        <li><b>Category :</b>{location?.state?.category}</li>

                    </ul> */}
                    <tr>
                        <td><p className="button" style={{backgroundColor:"#0c4c91",color:"white",marginTop:"55%"}} onClick={Cancle}> Cancle</p></td>
                        <td><p className="button" style={{backgroundColor:"#0c4c91",color:"white"}}> ContactUs</p></td>
                    </tr>
                </div>

            </div>

           


        </>
    )
}

export default BookDetail;
