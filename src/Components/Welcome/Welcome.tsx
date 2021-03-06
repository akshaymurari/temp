import React from 'react'
import Header from '../Header/Header';
import Homepage from '../assets/Home.jpg';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import './Welcome.scss';
const HomePageImgStyles:React.CSSProperties = {
    width:"100%",
    position:"fixed",
    top:0,
    left:0,
    zIndex:-999999,
    backgroundAttachment:"fixed",
    height:"100%",
    backgroundPosition:"center",
    backgroundRepeat:"norepeat",
    filter: "brightness(40%)",
    opacity:0.9,
} 
const HomePageButtonStyles:React.CSSProperties = {
    display:"block",
    border: "2px solid #555",
    marginLeft: "auto",
    width:"12rem",
    filter: "brightness(340%)",
    
}
const Welcome = () => {
    return (
        <div className="Welcome">
            <img src={Homepage} className="m-0 p-0"
                style={HomePageImgStyles}  alt=""></img>
            <div className="conatiner-fluid">
                <Header name="kissam mart"  todo=""/>
                <div className="row m-0 p-0" style={{height:"100vh",backgroundPosition:"center center"}}>
                    <div className="col m-0 px-0" style={{ position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)" }}>
                            <Link to="/farmersauth"
                              style={{textDecoration:"none"}}>
                                <Button
                                    className="px-3 mx-auto mb-4 py-3"
                                    style={HomePageButtonStyles}                            
                                ><span style={{ color: "#fff" }}>Farmer Auth</span></Button>
                            </Link>
                            <Link to="/deliveryboylogin"
                              style={{textDecoration:"none"}}>
                                <Button
                                    className="px-3 mx-auto mb-4 py-3"
                                    style={HomePageButtonStyles}                            
                                ><span style={{ color: "#fff" }}>DelverBoy Login</span></Button>
                            </Link>
                            <Link to="/customersauth"
                              style={{textDecoration:"none"}}>
                                <Button
                                    className="py-3 mx-auto"

                                    style={HomePageButtonStyles}
                                ><span style={{ color: "#fff" }}>Customer Auth</span></Button>
                            </Link>
                            
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome;

export {
    HomePageButtonStyles,
    HomePageImgStyles
}