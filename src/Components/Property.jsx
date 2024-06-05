import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { MdAttachMoney } from "react-icons/md";
import { Link } from 'react-router-dom';

const Property = ({ x }) => {
    console.log(x);
    return (
        <div className="w-full p-6 rounded-md shadow-md bg-gray-50 text-gray-900">
            <img src={x.image_url} alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500" />
            <div className="mt-6 mb-2">
                <span className="block text-xs font-medium tracking-widest uppercase text-violet-600">{x.state}</span>
                <h2 className="text-xl font-semibold tracking-wide">{x.name}</h2>
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex gap-1'>
                    <FaLocationDot />
                    <p className='text-xs'>{x.address},{x.country}</p>
                </div>
                <div className='flex gap-1'>
                    <MdAttachMoney />
                    <p className='text-xs'>{x.purchase_price}</p>
                </div>
            </div>
            <h2 className='text-xs text-center my-2'>Total Area:- <span className='text-violet-600'> {x.total_area}</span> Sq/ft</h2>
            <div className='my-2 flex justify-center items-center'>
                <button><Link className='btn btn-outline' to={`/details/${x.id}`}>Go More Details</Link></button>
            </div>
        </div>
    );
};

export default Property;