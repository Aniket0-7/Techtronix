import React from 'react'
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import './Membercard.css'
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useContext } from 'react';
import { Cart } from "../Context";

function Membercard() {
  const { setIsOpen } = useContext(Cart);
  return (


    <Box className='card' sx={{ width: { xs: "20rem", md: "32rem" }, height: { xs: "31rem", md: "45rem", border: "0.1rem solid black" }, borderRadius: "0.5rem",  }}>

        <div class="glassBox">
          <div class="glassBox__imgBox">
            <img src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c32b.png" alt="" />
            <h3 class="glassBox__title">Aniket</h3>
          </div>
          <div class="glassBox__content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae sunt veniam adipisci fugit qui quaerat!</div>
        </div>
    </Box>

  )
}

export default Membercard