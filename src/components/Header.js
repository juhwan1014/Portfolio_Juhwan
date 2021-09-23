import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { UpTriangle } from '../Icons'


class Header extends Component {
    state = {}

    render() {
        return (<div>
       <h1 className='heading-background'>POSSIBLE</h1>
            <header>
                <div className="img">
                    <div className="content">
                {/* <h1>
                    <Fade bottom cascade>Hello, My name is juhwan Moon! <UpTriangle /> </Fade></h1> */}
          
            <Fade bottom>
            <p className='header-title'>
           <div className='moon'> I'm "Juhwan Moon"</div><br></br>
           <div className='introduce'>
            who is going to be a skillful developer for your company<br></br>
             Junior Full Stack Developer<br></br>
             </div>
            
                    <button><a href={`mailto:$juhwan1014@naver.com`} rel="noopener noreferrer" >Contact</a></button>
                </p>
            </Fade>
            </div>
            <div className="img-cover"></div>
</div>
            </header>

        </div>);
    }
}

export default Header;