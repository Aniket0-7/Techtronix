import { AppBar, Box } from '@mui/material'
import React, { useState } from 'react'
import { Outlet, Link } from "react-router-dom";



function Navbar2(props) {

    
  return (
<>
    <Box sx={{width:"100vw",heigt:"5rem",backgroundColor:"#6313f0",position:"sticky",top:"0",zIndex:"2",display:"flex",justifyContent:{xs:"center",md:"space-between"},padding:"2rem 4rem",flexDirection:{xs:"column",lg:"row"},alignItems:"center"}}>
        <Link to="/">
        <svg className='svg' fill='#f1f1f1' id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 792"><defs><style>.cls-1</style></defs><path class="cls-1" d="M212.2,690.3q0-165,.1-330V255.8c0-11.4,0-11.4-11.7-11.4H44.8c-10.1,0-10.1,0-10.1-10.3,0-23.7.1-47.4-.1-71-.1-6,1.9-8,8-8H293.7c7.6,0,7.8.3,7.8,9.9q0,242.3.1,484.4v40.8Z"/><path class="cls-1" d="M312.2,690.3q0-93,.1-186.1V165.7c0-10.5,0-10.5,10.4-10.5H569.3c9.8,0,9.8,0,9.8,9.8v69.1c0,10.3,0,10.3-10.1,10.3-53,0-106,.1-159.1-.1-6.1,0-8.5,1.8-8.5,8.2q.3,218.8.2,437.8Z"/></svg>
        </Link>
        
        <Box sx={{display:"flex",justifyContent:"center",padding:"1rem 0",alignItems:"center",flexWrap:"wrap",rowGap:"1rem",columnGap:"1rem",textDecoration:"none"}}>
            <Link to="/events" style={{textDecoration:"none",cursor:"none"}}>
            <div className="nav-items">events</div>
            </Link>
            <Link to="/schedule" style={{textDecoration:"none",cursor:"none"}}>
            <div className="nav-items">schedule</div>
            </Link>
            <Link to="/members" style={{textDecoration:"none",cursor:"none"}}>
            <div className="nav-items">members</div>
            </Link>
            
          
     
        </Box>
    </Box>
    <Outlet />
    </>
  )
}

export default Navbar2