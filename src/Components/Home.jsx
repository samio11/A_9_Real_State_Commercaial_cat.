import React, { useContext, useEffect, useState } from 'react';
import Slider from './Slider';
import Property from './Property';
import 'animate.css';

const Home = () => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch('./Data.json')
        .then(req=>req.json())
        .then(res=>setData(res))
    },[])
    console.log(data);
    return (
        <div>
            <div className='w-full h-[70vh]'>
                <Slider></Slider>
            </div>
            <div>
                <h2 className='text-3xl my-10 font-bold text-center animate__animated animate__bounceInRight'>Our Latest Office</h2>
               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                  {
                     data?.map((x,idx)=><Property key={idx} x={x}></Property>)
                  }
               </div>
            </div>
        </div>
    );
};

export default Home;