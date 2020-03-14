import React from 'react';

import { MdSearch } from "react-icons/md";
import { GiHouse } from "react-icons/gi";
import { AiFillProject } from "react-icons/ai";
import { AiOutlineAreaChart } from "react-icons/ai";
import { TiUpload } from "react-icons/ti";
import { FaFileImage } from "react-icons/fa";
import { IoIosCalendar } from "react-icons/io";
import { MdGroup } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";


import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";
import { HamburgerButton } from "react-hamburger-button";


import './Nav.css';

export default class Nav extends React.Component {
    constructor(props) {
      super(props);
      this.state = { open: false };
    }
  
    handleClick() {
      this.setState({
        open: !this.state.open
      });
    }
  
    render() {
  
  return(

    <aside className="menu-area d-flex align-items-center justify-content-start">
         <div 
        /* style={this.state.open?{backgroundColor:"#eebb2c"}:{backgroundColor:"#6633fa"}} */
        className="menuButton m-0 p-0 d-flex justify-content-center align-items-center"
         onClick={this.handleClick.bind(this)}
         >
       <HamburgerButton
        open={this.state.open}
        
        width={30}
        height={30}
        strokeWidth={3}
        color={this.state.open?"#e1696a":"#6633fa"}
        animationDuration={0.5}
      />
       </div>
      <div className='my-dropdown-slidedown d-flex'>
       <SlideDown >{this.state.open ?
        <>
        <div className="backgroundNav">
        </div>
       <nav className="menu flex-column justify-content-around ">
        <a href="#/" className="menuItems">
        <div className="navButton">
            <MdSearch className="icon" size="23px"/>
        </div>
        </a>
        
        <a href="#/" className="menuItems">
        <div className="navButton">
            <GiHouse className="icon" size="23px"/>
        </div>
        </a>
        
        <a href="#/" className="menuItems">
        <div className="navButton">
            <AiFillProject className="icon" size="23px"/>

        </div>
        </a>
        
        <a href="#/" className="menuItems">
        <div className="navButton">
            <AiOutlineAreaChart className="icon" size="23px"/>

        </div>
        </a>
        
        <a href="#/" className="menuItems">
        <div className="navButton">
            <TiUpload className="icon" size="23px"/>

        </div>
        </a>

        <a href="#/" className="menuItems">
        <div className="navButton">
            <FaFileImage className="icon" size="23px"/>

        </div>
        </a>
        
        <a href="#/" className="menuItems">
        <div className="navButton">
            <IoIosCalendar className="icon" size="23px"/>

        </div>
        </a>
        
        <a href="#/" className="menuItems">
        <div className="navButton">
            <MdGroup className="icon" size="23px"/>

        </div>
        </a>
        
        <a href="#/" className="menuItems">
        <div className="navButton">
            <AiFillSetting className="icon" size="23px"/>

        </div>
        </a>
    
        </nav> 
        </>
    : null}</SlideDown>
    </div>
    </aside>

  )}}

