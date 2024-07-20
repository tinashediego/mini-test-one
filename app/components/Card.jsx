
'use client'

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import { Box, Button, IconButton } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { useRouter } from 'next/navigation';


  const Card = ({id,title, address, bedrooms, bathrooms, propertySize, images, type }) => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    const router = useRouter();

  const handleDetailsClick = () => {
    router.push(`/property/${id}`);
  };
  
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <Slider {...settings}>
          {images?.map((image, index) => (
            <div key={index}>
              <img className="w-full rounder-lg" src={image?.filePath} alt={`Slide ${index}`} />
            </div>
          ))}
        </Slider>
        <div className="px-6 py-4">
        
        <p className="text-gray-700 font-bold text-xl mb-2">{type}</p>
          <div className="text-gray-700 font-bold text-2xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{address}</p>
          <p className="text-gray-700 text-base">Beds: {bedrooms} Baths: {bathrooms} Size: {propertySize}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
          <Button variant="outlined" color="error" sx={{ mr: 1 }}>
          <IconButton color="error" aria-label="whatsapp">
            <WhatsAppIcon />
          </IconButton>
          </Button>
          <Button variant="outlined" color="error" sx={{ mr: 1 }}>
          <IconButton color="error" aria-label="instagram" sx={{ mr: 1 }}>
            <PhoneIcon />
          </IconButton>
          </Button>
          <Button variant="outlined" color="error" sx={{ mr: 1 }}>
          <IconButton color="error" aria-label="instagram" sx={{ mr: 1 }}>
            <AlternateEmailIcon />
          </IconButton>
          </Button>
          
          <Button variant="contained" color="error" sx={{ ml: 'auto' }} onClick={handleDetailsClick}>
            Details
          </Button>
        </Box>
        </div>
      </div>
    );
  };
  
  export default Card;