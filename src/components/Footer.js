

import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import { Copyright } from '../Icons';




class Footer extends Component {
    state = {  }
    render() { 
        return (
            <footer>
            <span>Created By <a href="#">Juhwan Moon</a> | <span ><Copyright /></span> 2020 All rights reserved.</span>
           </footer> 
           );
    }
}
 
export default Footer;



