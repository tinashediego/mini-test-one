import React, {useState,useEffect} from 'react'
import { useRouter } from "next/router";
import axiosInstance from '@/app/axios';

const DetailPage = () => {
  const router = useRouter();
  const listingId = router.query.listingId
  const [data, setData] = useState({})

  const getAboutData = async () => {
  const res = await axiosInstance.get(`properties/details/${listingId}`);
    setData(res.data);  
  }

  useEffect(() => {
    getAboutData()
  },[listingId]);


return(
   
       <>
       <h1>kjkjjj</h1>
        </>
  
)
}

export default DetailPage;