import React from 'react';
import './Footer.module.css';
const Footer = () => {
    return (
        <div className="py-5 footer-section">
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-lg-4 col-sm-12">
                    <h3>Traveler</h3>
                    <p className="text-secondary mt-5">Traveler is one of the best booking service in the world</p>
                    <p className="mt-3 text-secondary"> We are among the most qualified implant providers in the AUS with over 30 years of quality training and experience.</p>
                </div>
                <div className="col-md-4 col-lg-4 col-sm-12">
                    <h3>Quick Links</h3>
                    <li className="mt-3"><a href="">Quick Links</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">My Account</a></li>
                    <li><a href="">Confirmation</a></li>
                    <li><a href="">Terms and conditions</a></li>
                    <li><a href="">Contact Us</a></li>
                </div>

                <div className="col-md-4 col-lg-4 col-sm-12">
                    <h3>Our Services</h3>
                    <li className="mt-3"><a href="">Travel</a></li>
                    <li><a href="">Lifestyle</a></li>
                    <li><a href="">Fashion</a></li>
                    <li><a href="">Destination</a></li>
                    <li><a href="">Food and drink</a></li>
                    

                    <div>
                        <h3>Newsletter</h3>
                        <div className="input-group mb-3 w-50">
                        <input type="text" className="form-control" placeholder="" aria-label="" aria-describedby="button-addon2"/>
                        <button className="btn btn-primary" type ="button" id="button-addon2">Submit</button>
                    </div>
                </div>


            </div>
        </div>
    </div>
    </div >
    );
};

export default Footer;