import React, { useEffect, useState } from "react";
import image from "../Image/first_activity_image.png";
import axios from "axios";
import Footer from "./Footer";
// import '../css/Home.css';

const Home = () => {
  const [homeData, setHomeData] = useState([]);

  const getBooksData = () => {
    axios.get("http://localhost:3001/api/v1/books/get")
      .then((res) => {
        setHomeData(res?.data)
      })
  }

  useEffect(() => {
    getBooksData()

  }, [])


  return (
    <>
    <div className="">
      <p style={{color: "#0262AA",textAlign: "center",fontSize:"9vh"}}>Home</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', marginLeft: "1.5% ", marginTop: "1.5%" }}>
        {homeData.map((item) => (
          <div className='card' style={{ width: "20rem", margin: "1.5%" }} key={item.id}>
            <img className='card-img-top h-50' src={`http://localhost:3001${item.bookImage}`} alt='Card image cap' />
            <div className='card-body'>
              <div style={{ display: "flex" }}>
                <h5>Title:</h5>
                <p className='card-title'>{item.title}</p>
              </div>
              <div style={{ display: "flex" }}>
                <h5>Author:</h5>
                <p className='card-title'>{item.author}</p>
              </div>
              
              <div style={{ display: "flex" }}>
                <h5>Category:</h5>
                <p className='card-text'>{item.category}</p>
              </div>
              <div style={{ display: "flex" }}>
                <h5>Price:</h5>
                <p className='card-text'>{item.price}</p>
              </div>
              {/* <p className='btn btn-primary'>
                Submit
              </p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Home;
