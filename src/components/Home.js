import React from 'react';
import me2 from '../me2.jpg';
import Social from './Social';

const Home = () => {
    return ( 
        <div className="Home">
            <div className="container other down">
                <div className="banner">
                    <h1>Mihir Kumar Singh</h1>
                </div>
                <div className="heading-home">
                    <h1><b>About Me</b></h1>
                </div>
                <div className="row centered">
                    <div className="col-md-7 col-sm-12 imagecenter">
                        <img className="aboutmeimg" src={me2} alt="That's Me"/>
                    </div>
                    <div className="col-md-5 col-sm-12 aboutme">
                        <div className="innerheading">
                            <h1>Mihir Kumar Singh</h1>
                        </div>
                        <div className="innermern">
                            <h2><span className="mern"><span className="m boldletter">M</span><span className="e boldletter">E</span><span className="r boldletter">R</span><span className="n boldletter">N</span></span> Stack Web Developer</h2>
                        </div>
                        <div className="mydetails">
                            <ul>
                                <li><i className="fa fa-envelope"></i><a className="mail" href="mailto:mihirkumar02@gmail.com"> mihirkumar02@gmail.com</a></li>
                                <li><i className="fa fa-phone"></i><a href="tel:+91-7044168689"> +91-7044168689</a></li>
                                <li><i className="fa fa-map-marker"></i> Faridabad, India</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="description">
                    <h3>A self-taught developer, building for the society.</h3>
                </div>
            </div>
            <div className="container smallother">
                <div className="links-heading">
                    <h2>Connect With Me</h2>
                </div>
                <Social />
            </div>
        </div>
    );
}
 
export default Home;