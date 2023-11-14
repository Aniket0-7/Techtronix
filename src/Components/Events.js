import React from 'react'
import { Box } from '@mui/material';
import Card_comp from './Card_comp';
import Card_main from './Card_main';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


function Events() {


  useEffect(() => {
    Aos.init({duration: 2000});
},[]);


  return (
    <>
    <div data-aos="fade-up" className='heading'>Events.</div>
      
      <Box data-aos="fade-up" sx={{ display: "flex", justifyContent: "flex-start", rowGap: "4rem", columnGap: "4rem", padding: "0 4rem 4rem 4rem", flexWrap: "wrap", alignContent: "flex-start" }}>
        <Card_comp></Card_comp>
        <Card_comp></Card_comp>
        <Card_comp></Card_comp>
        <Card_comp></Card_comp>
        <Card_comp></Card_comp>
        <Card_comp></Card_comp>
        <Card_comp></Card_comp>
      </Box>
      <Card_main></Card_main>
      </>
  )
}

export default Events