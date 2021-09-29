import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import $ from "jquery";

class Navbar extends Component {
    state = {  }
    scrollToTop = () => {
        scroll.scrollToTop();
    };

    componentDidMount() {
      
       
        $(window).scroll(function(){
           
                    if(this.scrollY > 20){
                          $('.navbar').addClass("sticky");
                    } else {
                        $('.navbar').removeClass("sticky");
                    }
                })
        
      }
  
    render() { 


        return (<nav className = "navbar">
            
            <div className="max-width">
                <div className="logo">
                    <a href="#">Port<span>folio.</span></a>
                </div>
            <ul>

                <li><Link
                    className='link'
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={this.scrollToTop}
                >Home</Link></li>
                <li><Link
                    className='link'
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >About</Link></li>
                <li><Link
                    className='link'
                    activeClass="active"
                    to="Experience"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Experience</Link></li>
                  <li><Link
                    className='link'
                    activeClass="active"
                    to="Skills"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Skills</Link></li>
                <li><Link
                    className='link'
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Contact</Link></li>
            </ul>

            <div className="menu-btn">
                <i className="fas fa-bars"></i>
            </div>

            </div>
        </nav> );
    }
}
 
export default Navbar;