import React, { useContext } from 'react';
import { ContentPass } from '../AllContextes/AuthContext';
import Slider from './Slider';

const Home = () => {
    const s1 = useContext(ContentPass);
    console.log(s1);
    return (
        <div>
            <div className='w-full h-[70vh]'>
                <Slider></Slider>
            </div>
        </div>
    );
};

export default Home;