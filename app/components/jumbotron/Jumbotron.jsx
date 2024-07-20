"use client";

import React, { useState, useEffect } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import "./jumbotron.css"
import axiosInstance from '../../axios.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import dynamic from 'next/dynamic';
const Card = dynamic(() => import('../Card'), { ssr: false });


const Jumbotron = () => {


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:true
  };


  const [alignment, setAlignment] = useState('forSale');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [endpoint, setEndpoint] = useState('properties/latest');
  const [data, setData] = useState([]);
  const [rent, setRent] = useState([]);
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(endpoint);
      console.log(response);
      setData(response?.data?.data?.latestPropertiesForSale);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchToRent = async () => {
    try {
      const response = await axiosInstance.get(endpoint);
      console.log(response);
      setRent(response?.data?.data?.latestPropertiesToRent);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  useEffect(() => {
    fetchToRent();
    fetchData();
  }, [endpoint]);





  return (
    <div>
    <div className="relative bg-cover bg-center jumbotron mt-20 pb-20">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <div className="flex space-x-4 mb-4">
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
          >
            <ToggleButton onClick={() => setEndpoint('properties/for-sale?search=for-sale')} className="bg-red-500 text-white px-4 py-2 rounded-full" value="forSale">For Sale</ToggleButton>
            <ToggleButton onClick={() => setEndpoint('properties/to-rent?search=to-rent')} className="bg-gray-200 text-black px-4 py-2 rounded-full" value="toRent">To Rent</ToggleButton>
          </ToggleButtonGroup>
        </div>
        <div className="bg-contain bg-center h-96 flex flex-col justify-center items-center">
          <div className="bg-white p-4 rounded-lg shadow-lg flex items-center space-x-4">
            <div className="relative">
              <button 
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg flex items-center" 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Property Types <KeyboardArrowDownIcon/>
              </button>
              {isDropdownOpen && (
                <div className="absolute bg-white shadow-lg rounded-lg p-4 mt-2 w-64">
                  <label className="block text-black"><input type="checkbox" className="mr-2"/>Commercial</label>
                  <label className="block text-black"><input type="checkbox" className="mr-2"/>Educational</label>
                  <label className="block text-black"><input type="checkbox" className="mr-2"/>Leisure/Hospitality</label>
                  <button 
                    className="bg-gray-200 text-black px-4 py-2 rounded-full mt-2" 
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
            <input 
              type="text" 
              placeholder="Suburb, City, Province, Country" 
              className="px-4 py-2 rounded-lg w-full bg-gray-200"
            />
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg">Search</button>
          </div>
        </div>
      </div>
    </div>
    <div className="container bg-transparent mx-auto mt-12" >
    <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4 text-black">Properties For Sale</h1>
        <div >
          <Slider className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" {...settings}>
          {data?.map((property, index) => (
            <Card
              key={index}
              id={property.id}
              status={property.status}
              type={property.type}
              title={property.title}
              address={property.address}
              bedrooms={property.bedrooms}
              bathrooms={property.bathrooms}
              propertySize={property.propertySize}
              images={property.images || ['https://via.placeholder.com/150']}
            />
            
          ))}
          </Slider>
        </div>
      </div>
    </div>

    <div className="container bg-transparent mx-auto mt-12" >
    <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4 text-black">Properties To Rent</h1>
        <div >
          <Slider className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" {...settings}>
          {rent?.map((property, index) => (
            <Card
              key={index}
              id={property.id}
              status={property.status}
              type={property.type}
              title={property.title}
              address={property.address}
              bedrooms={property.bedrooms}
              bathrooms={property.bathrooms}
              propertySize={property.propertySize}
              images={property.images || ['https://via.placeholder.com/150']}
            />
            
          ))}
          </Slider>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Jumbotron;
