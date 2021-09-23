import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';


class Contact extends Component {
    state = {  }
    render() { 
        return (  <div>
        <h1>
            <div className="contact_title">
                <Fade bottom cascade> Contact.</Fade>
                </div>
        </h1>
        <Fade bottom>
        <div className='contact-content'>
                <h1 className="contect-text">
                Let’s create<br></br>
                <span className='amazing-color'>unprecedented <br></br>something together</span></h1>
                    <a href={`mailto:juhwan1014@naver.com`} className='email'>juhwan1014@naver.com</a>
              {/*  <ul>
                    {data.social.map((link,index)=>(
                        <li key={index}><a target='_blank' rel="noopener noreferrer" href={link.url}>{link.name}</a></li>
                    ))}   
                </ul>
                */}
        </div>
        </Fade>

        
        </div>);
    }
}
 
export default Contact;