import React, { useEffect, useState } from "react";
import axios from "axios";
import '../css/Home.css';
import { useNavigate } from "react-router-dom";

const categoryDropDown = [
  { label: "c", value: "c" },
  { label: "c++", value: "c++" },
  { label: "java", value: "java" },
  { label: "asp.net", value: "asp.net" },
  { label: "react", value: "react" },
];

const Home = () => {
  const [homeData, setHomeData] = useState([]);

  const navigate = useNavigate();

  const getBooksData = (category) => {
    axios.get(`http://localhost:3001/api/v1/books/get?category=${category}`)
      .then((res) => {
        setHomeData(res?.data)
      })
  }

  useEffect(() => {
    getBooksData("")

  }, [])


  return (
    <>
      {/* <div className="">
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
            </div>
          </div>
        ))}
      </div>
    </div> */}

      <div className="container">
          <div className="form-group col-md-5 mb-0">
            {/* <label for="inputCategory">Category</label> */}
            <select name="category" id="inputCategory" className="form-control" style={{marginLeft:"75%",marginTop:"8%"}}
             onChange={(e) =>
              getBooksData(e.target.value)
          }
              >
                <option value="">Select Category</option>
              {categoryDropDown &&
                categoryDropDown?.map((x) => (
                  <option value={x.value}>{x.value}</option>

                ))
              }
            </select>
          </div>
          <div className="row" style={{ marginTop: '35px' }}>
            {homeData && homeData?.map((item) => (
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                <div className="card shadow">
                  <img style={{ height: '300px' }} src={`http://localhost:3001${item?.bookImage}`} className="card-img-top" alt="..."  onClick={() => navigate("/bookdetail" , {state:item})}/>
                  <div className="card-body">
                    <div style={{ display: "flex" }}>
                      <label>Title : </label>
                      <p className="card-title">{item?.title}</p>
                    </div>
                    <div style={{ display: "flex" }}>
                      <label>Author : </label>
                      <p className="card-text">{item?.author}</p>
                    </div>
                    <div style={{ display: "flex" }}>
                      <label>Category : </label>
                      <p className="card-text">{item?.category}</p>
                    </div>
                    <div style={{ display: "flex" }}>
                      <label>Price : </label>
                      <p className="card-text">${item?.price}</p>
                    </div>
                  </div>
                  <div className="card-body card-p">
                    <div className="row">
                      <div className="col col-xs-4 ">
                      </div>
                      <div className="col col-xs-4 ">
                      </div>
                      <div className="col col-xs-4">
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            ))}
          </div>
        </div>
      </>
      );
};

      export default Home;
