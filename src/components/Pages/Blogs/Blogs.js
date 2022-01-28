import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const Blogs = () => {

    const [places,setPlaces] = useState([]);
   

    useEffect(()=>{
        fetch('http://localhost:5000/')
        .then(res=>res.json())
        .then(data=>setPlaces(data))
    },[])

    return (
        <>
           <div className="container my-5 pt-5">
           <div class="row row-cols-1 row-cols-md-3 g-4">

                {
                    places.map(place=>  <div class="col">
                    <div class="card h-100">
                      <img src={place.picture} class="card-img-top" height={200} alt="..."/>
                      <div class="card-body">
                        <h5 class="card-title">{place.location}</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      </div>
                      <div class="card-footer bg-light">
                       <Link to={`/bookingDetails/${place._id}`}> <button className='btn btn-danger'>Details</button></Link>
                      </div>
                    </div>
                  </div>)
                }
  
  
</div>
               </div> 
        </>
    );
};

export default Blogs;