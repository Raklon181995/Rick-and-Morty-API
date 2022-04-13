import React, { useEffect, useState } from 'react';
import styles from "../components/Card/Card.module.scss";
import Flippy, {FrontSide, BackSide} from 'react-flippy';

export default function Like() {
  const [results, setData] = useState([]);

  const UnLikefunction = (results) => {
    const characters = localStorage.getItem('liked');
    if (characters) {
      const likedArray = JSON.parse(characters);
      const filteredarray = likedArray.filter((res) => res.id !== results.id);
      localStorage.setItem('liked', JSON.stringify(filteredarray));
      alert('Removed From Liked Page !!');

      return;
    }
  };

  useEffect(() => {
    const characters = localStorage.getItem('liked');
    if (characters) {
      setData(JSON.parse(characters));
    }
  }, []);

 

  let display;


  if (results) {
    display = results.map((x) => {
      let {  image, name, status, gender,species } = x;

      return (
        <div >
        
      <div  className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark" >
        
        <Flippy>
            <FrontSide>
            <div
            className={`${styles.card} d-flex flex-column justify-content-center`}
          >
            <img className={`${styles.img} img-fluid`} src={image} alt="" />
            <div className={`${styles.content}`}>
              <div className="fs-5 fw-bold mb-4">{name}</div>
            
            </div>
          </div>
            </FrontSide>

            <BackSide>
            <div className="container d-flex justify-content-center mb-5">
      <div className="d-flex flex-column gap-3">
        

        <img className="img-fluid" src={image} alt="" />
      
    
        <div className="content">
        <div className="">
            <span className="fw-bold">Name : </span>
            {name}
          </div>
          <div >
              <span className="fw-bold">Status :</span>
          {(() => {
             
          if (status === "Dead") {
            return <div className="">Status :</div>;
          } else if (status === "Alive") {
            return <div >{status}</div>;
          } else {
            return <div>{status}</div>;
          }
        })()}
         </div>
       
          <div className="">
            <span className="fw-bold">Gender : </span>
            {gender}
          </div>
          
          <div className="">
            <span className="fw-bold">Species: </span>
            {species}
          </div>
        </div>
      </div>
    </div>
            </BackSide>
        </Flippy>
        
        <div>
          
      <button
         href="#"
         onClick={() => UnLikefunction(x)}
         className="btn btn-primary">
            Like It
      </button>
        </div>
     
        </div>
        
         </div>
      );
    });
  } 
}
