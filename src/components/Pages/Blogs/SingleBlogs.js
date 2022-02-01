import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const SingleBlogs = () => {
    const {id} =useParams();
    console.log(id);

    const [singleData,setSingleData]=useState({});


    useEffect(()=>{
        fetch(`https://calm-anchorage-75702.herokuapp.com/bookingDetails/${id}`)
        .then(res=>res.json())
        .then(data=>setSingleData(data))
    },[]);

    console.log(singleData);

    return (

        <div className="container d-flex justify-content-center align-items-center vh-100">
      <div class="card mb-3" style={{maxWidth: "540px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={singleData.picture} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{singleData.location}</h5>
        <p class="card-text">Rating: {singleData.rating}</p>
        <p class="card-text">Expense: {singleData.expense} TK</p>
        <p class="card-text">Expense: {singleData.description} TK</p>
        
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default SingleBlogs;