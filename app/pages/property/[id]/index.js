import React, {useState,useEffect} from 'react'
import { useRouter } from "next/router";
import axios from 'axios';

const DetailPage = () => {
  const router = useRouter();
  const id = router.query.id
  const [data, setData] = useState({})

  const getAboutData = async () => {
  const res = await axios.get(`http://localhost:8000/api/v1/blog/${id}/`);
    setData(res.data);  
  }

  useEffect(() => {
    getAboutData()
  },[id]);


return(
   
       <>
       <h1>kjkjjj</h1>
        </>
  
)
}

export default DetailPage;