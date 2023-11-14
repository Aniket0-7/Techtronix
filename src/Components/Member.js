import React from 'react'
import { Box } from '@mui/material'
import Card_comp from './Card_comp'
import Membercard from './MemberCard'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Member() {


  useEffect(() => {
    Aos.init({duration: 2000});
},[]);


  return (
    <>
    <div data-aos="fade-up" className='heading'>members.</div>
      
      <Box data-aos="fade-up" sx={{ display: "flex", justifyContent: "flex-start", rowGap: "4rem", columnGap: "4rem", padding: "0 4rem 4rem 4rem", flexWrap: "wrap", alignContent: "flex-start" }}>
        <Membercard></Membercard>
        <Membercard></Membercard>
        <Membercard></Membercard>
        <Membercard></Membercard>
        <Membercard></Membercard>
      </Box>
      </>
  )
}

export default Member