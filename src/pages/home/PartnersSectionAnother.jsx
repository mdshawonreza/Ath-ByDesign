import React from 'react';

import image1 from "../../assets/tom-briskey-AddAnDkkovM-unsplash.jpg"
import image2 from "../../assets/edgar-chaparro-sHfo3WOgGTU-unsplash.jpg"

const PartnersSectionAnother = () => {
    return (
        <div>
            <div className="flex flex-col  md:gap-8  w-full px-4 md:px-12 lg:px-24 items-center justify-center relative bg-black h-full">
                <div className="flex w-full flex-col md:flex-row  gap-8 md:gap-8 justify-center mt-10 py-10">
                    <div className="flex-1 flex justify-center md:justify-end h-96">
                        <img
                            src={image1}
                            alt="Left Image"
                            className="md:w-72  shadow-lg object-cover"
                        />
                    </div>
                    <div className="flex-1 flex justify-center pl-0 md:pl-8 h-64">
                        {/* <img
                            src={image2}
                            alt="Left Image"
                            className="  shadow-lg object-cover"
                        /> */}
                        <p>Here need a Image</p>
                    </div>
                    <div className="flex-1 flex justify-center md:justify-start pl-0 ">
                        
                        <p className='text-lg text-white font-medium'></p>
                    </div>
                </div>
                
                <div className="flex w-full flex-col md:flex-row  gap-8 md:gap-8 justify-center ">
                    
                    <div className="flex-1 flex justify-center md:justify-start pl-0 ">
                       
                        <p className='text-lg text-white font-medium'>Here Need a text</p> 

                    </div>

                    <div className="flex-1 flex items-end justify-center pl-0 md:pl-8  md:mt-20 h-full">
                        {/* <img
                            src={image2}
                            alt="Left Image"
                            className=" md:h-64 shadow-lg object-cover"
                        /> */}
                        <p>Here Need a Image</p>
                    </div>
                    <div className="flex-1 flex justify-center md:justify-end h-96  md:-mt-20">
                        {/* <img
                            src={image1}
                            alt="Left Image"
                            className="md:w-72  shadow-lg object-cover"
                        /> */}
                        <p>Here Need a image</p>
                    </div>

                </div>
                 <div className="flex w-full flex-col md:flex-row  gap-6 md:gap-8 justify-center -mb-16 md:-mb-0 py-10">
                    <div className="flex-1 flex justify-center md:justify-start pl-0 pb-0 md:pb-10">
                        
                        <p className='text-lg text-white font-medium text-end'></p>
                    </div>
                    

                    <div className="flex-1 flex justify-center md:justify-end ">
                        {/* <img
                            src={image1}
                            alt="Left Image"
                            className="w-72  shadow-lg object-cover"
                        /> */}
                        <p>Here need a image</p>
                    </div>
                    <div className="flex-1 flex justify-center pl-0 md:pl-8 ">
                        {/* <img
                            src={image2}
                            alt="Left Image"
                            className="  shadow-lg object-cover"
                        /> */}
                        <p>Here need a image</p>
                    </div>
                    
                </div>




            </div>

        </div>
    );
};

export default PartnersSectionAnother;