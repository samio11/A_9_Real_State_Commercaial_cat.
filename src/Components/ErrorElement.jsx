import React from 'react';
import err1 from './ErrorAni.json';
import Lottie from 'lottie-react';

const ErrorElement = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center'>
           <Lottie className='w-screen lg:w-[500px] h-[300px] lg:h-[500px]' animationData={err1}></Lottie>
        </div>
    );
};

export default ErrorElement;