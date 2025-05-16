import React from "react";
import '../App.css';
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

function Header() {
    return <div className="header">
        <Link to={'/'} className="no-decor"><h3 style={{fontWeight: 700}}>Home</h3></Link>
        <Link to={'/about'} className="no-decor"><h3 style={{fontWeight: 700}}>About Us</h3></Link>
        <Link to={'/careers'} className="no-decor"><h3 style={{fontWeight: 700}}>Careers</h3></Link>
        <div style={{marginLeft:"auto"}}>
            <ShoppingCartOutlinedIcon fontSize="large" sx={{margin:"10px"}}/>
            <AccountCircleOutlinedIcon fontSize="large" sx={{margin:"10px"}}/>
        </div>
    </div>
}

export default Header;