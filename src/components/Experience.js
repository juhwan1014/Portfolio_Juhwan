import React, { Component } from 'react';

import Fade from 'react-reveal/Fade';
import { Brush, Memory, Encoder, Web, App, Dotnet } from '../Icons';


class Experience extends Component {
    state = {  }
    render() { 
        return (<section>
            <div className="experience">
        <h1 className='heading'>
        <Fade bottom cascade>Experience.</Fade></h1>
        <Fade bottom>
        <div className='experience-content'>
        <div className="card">
            <div className="box">
               <div className="icon"> <Brush /></div>
                <div className="text">Web Design</div>
                <p>I have experience designing various websites using html, CSS, Javascript, bootstrap, scss, jQuery, etc. I have carried out several personal tasks, including news websites, e-commerce selling flowers, and introductory Korean websites. Also, I have several experiences in designing the web directly in various group projects.</p>
            </div>
        </div>

        <div className="card">
            <div className="box">
            <div className="icon"> <Memory /></div>
                <div className="text">Ram(Resource Map) Simulator</div>
                <p>I have experience in how to allocate memory internally, and after studying the principles, I have used Java to create a simulator. <br></br><br></br> I printed out the process of memory allocation.  Various coding experiences have been gained by this project.<br></br><br></br></p>
            </div>
        </div>

        <div className="card">
            <div className="box">
            <div className="icon"> <Encoder /></div>
                <div className="text">Base 64 encoder and Decoder</div>
                <p>The project was carried out to learn object-oriented programming more intuitively while studying the base64 encoding method, which is often used for transferring binary data through e-mail. It was the first project to use the java language to design classes and learn concepts of inheritance relationships and override.</p>
            </div>
        </div>

        <div className="card">
            <div className="box">
            <div className="icon"> <Web /></div>
                <div className="text">Team Project</div>
                <p>In South Korea, I used Arduino to work on a project to control the movement of a robot which is named Takbot. Also, there was a project to control the robot car moving along the black line through infrared sensors and to code it to avoid encountering obstacles. On the other hand, I studied the detailed use of git and github through various team projects in the BCIT.</p>
            </div>
        </div>

        <div className="card">
            <div className="box">
            <div className="icon"> <App /></div>
                <div className="text">App Project</div>
                <p>I made the 'money planner' application into a team project. As part of the class to experience the process of designing and creating real apps, our group worked on a project to write a high-level architectural report to design apps and create their own. Among them, I was in charge of architecture design and app design.</p>
            </div>
        </div>

        <div className="card">
            <div className="box">
            <div className="icon"> <Dotnet /></div>
                <div className="text">. net Project using api </div>
                <p> This project was used the dot-net framework, I could be learned the process of storing and receiving api data.<br></br><br></br>  In the front-end section, the react was used to link the received api data. <br></br><br></br><br></br> </p>
            </div>
        </div>
        </div>
        </Fade>
        </div>
       
        </section>  );
    }
}
 
export default Experience;