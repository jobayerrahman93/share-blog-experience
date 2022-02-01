import React, { useEffect } from 'react';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';

const Home = () => {

    useEffect(()=>{
        document.title="Traveler"
    },[])
    return (
        <>
        <Banner></Banner>
            <Blogs></Blogs>
        </>
    );
};

export default Home;