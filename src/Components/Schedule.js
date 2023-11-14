import { Typography } from '@mui/material'
import React from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Schedule() {

  useEffect(() => {
    Aos.init({duration: 2000});
},[]);


  return (
    <div data-aos="fade-up" >
    <Typography sx={{color:"black"}}>schedule</Typography>
    </div>
  )
}

export default Schedule