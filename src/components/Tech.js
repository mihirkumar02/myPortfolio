import React from 'react';
import mongodb from '../icons/mongodb.svg';
import expressjs from '../icons/express.svg';
import reactjs from '../icons/react.svg';
import nodejs from '../icons/nodejs.svg';
import html5 from '../icons/html5.svg';
import css from '../icons/css-3.svg';
import js from '../icons/javascript.svg';
import jquery from '../icons/jquery.svg';
import bootstrap from '../icons/bootstrap.svg';
import passport from '../icons/passport.svg';

const Tech = () => {
    return (  
        <div className="other">
            <div className="heading">
                <h1><b>Tech Stack</b></h1>
            </div>
            <div className="row centered tech">
                <div className="col-md-3 col-sm-12 offset-md-1 imagecenter">
                    <img src={mongodb} alt="MongoDB" title="MongoDB"/>
                </div>
                <div className="col-md-3 col-sm-12 imagecenter">
                    <img src={expressjs} alt="ExpressJS" title="Express JS"/>
                </div>
                <div className="col-md-3 col-sm-12 imagecenter">
                    <img src={reactjs} alt="ReactJS" title="React JS"/>
                </div>
                <div className="col-md-2 col-sm-12 imagecenter">
                    <img src={nodejs} alt="NodeJS" title="Node JS"/>
                </div>
            </div>
            <div className="row centered tech">
                <div className="col-md-3 col-sm-12 offset-md-1 imagecenter">
                    <img src={html5} alt="HTML5" title="HTML 5"/>
                </div>
                <div className="col-md-3 col-sm-12 imagecenter">
                    <img src={css} alt="CSS3" title="CSS 3"/>  
                </div>
                <div className="col-md-3 col-sm-12 imagecenter">
                    <img src={js} alt="JavaScript" title="JavaScript"/>
                </div>
                <div className="col-md-2 col-sm-12 imagecenter">
                    <img src={jquery} alt="JQuery" title="jQuery"/>
                </div>
            </div>
            <div className="row centered tech">
                <div className="col-md-6 col-sm-12 lowertech imagecenter">
                    <img src={bootstrap} alt="Bootstrap" title="Bootstrap"/>
                </div>
                <div className="col-md-6 col-sm-12 lowertech imagecenter">
                    <img src={passport} alt="Passport JS" title="Passport JS"/>
                </div>
            </div>
        </div>
    );
}
 
export default Tech;