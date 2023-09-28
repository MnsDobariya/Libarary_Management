import React from "react";
import image from "../Image/first_activity_image.png";

const data = [
    { id: 1, title: "Card 1", description: "Description 1" },
    { id: 2, title: "Card 2", description: "Description 2" },
    { id: 3, title: "Card 3", description: "Description 3" },
    { id: 4, title: "Card 3", description: "Description 3" },
    { id: 5, title: "Card 3", description: "Description 3" },
    { id: 6, title: "Card 3", description: "Description 3" },
    // Add more data as needed
  ];
const Home = () => {
  return (
    <div className="">
      <div style={{ display: 'flex', flexWrap: 'wrap',marginLeft:"20px ",marginTop:"20px" }}>
        {data.map((item) => (
          <div className='card' style={{ width: "20rem",margin:"23px" }} key={item.id}>
            <img className='card-img-top' src={image} alt='Card image cap' />
            <div className='card-body'>
              <h5 className='card-title'>{item.title}</h5>
              <p className='card-text'>{item.description}</p>
              <button type='button' className='btn btn-primary'>
                Primary
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
