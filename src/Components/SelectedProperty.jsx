import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';

const SelectedProperty = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const id1 = parseInt(id)
    const fullData = useLoaderData();
    const main_data = fullData?.find(x => Number(x.id) === id1)
    console.log(main_data);
    return (
        <section className="bg-gray-100 text-gray-800">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src={main_data.image_url} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-xl lg:text-3xl font-semibold mb-4">{main_data.name}</h1>
                   <div className='my-4 space-y-2'>
                   <p className="text-sm">Address:- {main_data.address},{main_data.country}</p>
                    <p className="text-sm">Total Area:- {main_data.total_area}</p>
                    <p className="text-sm">Building Date:- {main_data.year_built}</p>
                    <p className="text-sm">Architect:- {main_data.architect}</p>
                    <p className="text-sm">Building Type:- {main_data.building_type}</p>
                    <p className="text-sm">parking spaces:- {main_data.parking_spaces}</p>
                    <p className="text-sm">Elevators:- {main_data.elevators}</p>
                    <p className="text-sm">conference rooms:- {main_data.conference_rooms}</p>
                    <p className="text-sm">security_system:- {main_data.security_system}</p>
                    <p className="text-sm">purchase price:- {main_data.purchase_price}$</p>
                    <p className="text-sm">annual maintenance cost:- {main_data.annual_maintenance_cost}$</p>
                    <p className="text-sm">annual property tax:- {main_data.annual_property_tax}$</p>
                    
                    
                   </div>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <button onClick={()=>navigate(-1)} className="px-8 py-3 text-lg font-semibold rounded bg-violet-600 text-gray-50">Back</button>
                       
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SelectedProperty;