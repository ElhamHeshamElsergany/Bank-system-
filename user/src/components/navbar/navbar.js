import './navbar.scss';
import * as React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import {  NavLink } from "react-router-dom";
import UseSwitchesCustom from '../../components/moodButton/moodButton';

function Navbar() {
    return (
        <>
            <div className='d-flex justify-content-around my-3 position-sticky' >
                <h2>Banky</h2>
                <div className='d-flex '>
                    <NavLink to="/Home" className='NavLink mx-1' style={isActive => ({ backgroundColor: isActive ? "#2254" : "#fff",color: isActive ? "#031b88":"black" })}>
                    <HomeOutlinedIcon/> Home 
                    </NavLink>
                    <NavLink to="/About" className='NavLink mx-1' style={isActive => ({ backgroundColor: isActive ? "#2254" : "#fff",color: isActive ? "#031b88":"black" })}>
                    <PeopleAltOutlinedIcon/>  About Us 
                    </NavLink>
                    <NavLink to="/Transformaing" className='NavLink mx-1' style={isActive => ({ backgroundColor: isActive ? "#2254" : "#fff",color: isActive ? "#031b88":"black" })}>
                    <PaidOutlinedIcon/>  Transformaing 
                    </NavLink>
                    <NavLink to="/Nearby" className='NavLink mx-1' style={isActive => ({ backgroundColor: isActive ? "#2254" : "#fff",color: isActive ? "#031b88":"black" })}>
                    <LocationOnIcon/>  Nearby 
                    </NavLink>
                    <NavLink to="/contact"  className='NavLink mx-1 ' style={isActive => ({ backgroundColor: isActive ? "#2254" : "#fff",color: isActive ? "#031b88":"black" })}>
                    <ConnectWithoutContactOutlinedIcon/>   Contact Us
                    </NavLink>
                    {/* dark and light mood */}
                    <UseSwitchesCustom/>
                </div>
            </div>
        </>
    );
}
export default Navbar;
