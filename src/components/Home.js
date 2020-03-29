import React from 'react';
import me2 from '../me2.jpg';

const Home = () => {
    return ( 
        <div className="Home">
            <div className="container other">
                <div className="heading">
                    <h1><b>About Me</b></h1>
                </div>
                <div className="row centered">
                    <div className="col-md-7 col-sm-12 imagecenter">
                        <img className="aboutmeimg" src={me2} alt="That's Me"/>
                    </div>
                    <div className="col-md-5 col-sm-12 aboutme">
                        <div className="innerheading">
                            <h1>MIHIR KUMAR SINGH</h1>
                        </div>
                        <div className="innermern">
                            <h2><span className="mern"><span className="m boldletter">M</span><span className="e boldletter">E</span><span className="r boldletter">R</span><span className="n boldletter">N</span></span> Stack Web Developer</h2>
                        </div>
                        <ul>
                            <li><i className="fa fa-envelope"></i><a href="mailto:mihirkumar02@gmail.com"> mihirkumar02@gmail.com</a></li>
                            <li><i className="fa fa-phone"></i><a href="tel:+91-7044168689"> +91-7044168689</a></li>
                            <li><i className="fa fa-map-marker"></i> Faridabad, India</li>
                        </ul>
                    </div>
                </div>
                <div className="description centered">
                    <h3>A self-taught developer, building for the society.</h3>
                </div>
            </div>
        </div>
    );
}
 
export default Home;