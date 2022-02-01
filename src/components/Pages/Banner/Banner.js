import React from "react";
import Slider from "react-slick";
import './Banner.css';

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
        
      };
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     speed: 3000,
    //     autoplaySpeed: 2000,
    //     cssEase: "linear"
    //   };
    return (
        <div className="vh-100 pt-5 mt-5 overflow-hidden">
            
            <Slider {...settings}>
          <div className="d-flex">
           <div>
           <img src="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/11/h6-rev-slide2.png" alt="" />
           </div>
           <div className="mt-5 pt-5 d-none d-md-none d-lg-block">
               <h1 className="fs-1">STEP IN THE DOWN</h1>
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis amet, maxime omnis illo provident, natus suscipit in vero commodi nam officia necessitatibus fuga iusto placeat ipsam excepturi, explicabo architecto facere beatae inventore voluptas dolore reprehenderit? Eos quae explicabo rem voluptates</p>

            <button className="btn btn-danger">READ MORE</button>
           </div>

          </div>
          <div className="d-flex">
           <div> <img src="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/11/h6-rev-slide3.png" alt="" /></div>
            <div className="mt-5 pt-5 d-none d-md-none d-lg-block">
               <h1 className="fs-1">NEW PATH TO DISCOVER</h1>
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis amet, maxime omnis illo provident, natus suscipit in vero commodi nam officia necessitatibus fuga iusto placeat ipsam excepturi, explicabo architecto facere beatae inventore voluptas dolore reprehenderit? Eos quae explicabo rem voluptates</p>

            <button className="btn btn-danger">READ MORE</button>
           </div>
          </div>
          <div className="d-flex">
           
           <div>
           <img src="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/11/h6-rev-slide1.png" alt="" />
           </div>
           <div className="mt-5 pt-5 d-none d-md-none d-lg-block">
               <h1 className="fs-1">NO STONE LEFT  <br/> UNTURNED</h1>
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis amet, maxime omnis illo provident, natus suscipit in vero commodi nam officia necessitatibus fuga iusto placeat ipsam excepturi, explicabo architecto facere beatae inventore voluptas dolore reprehenderit? Eos quae explicabo rem voluptates</p>

            <button className="btn btn-danger">READ MORE</button>
           </div>

          </div>
          
        </Slider>
      </div>
        
    );
};

export default Banner;