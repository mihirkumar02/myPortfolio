import React from 'react';
import lastbench from '../lastbench.png';
import burstshot from '../burstshot.png';
import farmie from '../farmie.png';
import portfolio from '../portfolio.png';
import mongodb from '../icons/mongodb.svg';
import expressjs from '../icons/express.svg';
import reactjs from '../icons/react.svg';
import nodejs from '../icons/nodejs.svg';
import html5 from '../icons/html5.svg';
import css from '../icons/css-3.svg';
import js from '../icons/javascript.svg';
import jquery from '../icons/jquery.svg';
import passport from '../icons/passport.svg';
import redux from '../icons/redux.svg';

import aym from '../aym.png';
import covid from '../covid.png';
import map from '../map-ui.png';
import bootstrap from '../icons/bootstrap.svg';

const Projects = () => {
    return (  
        <div className="Projects">
            <div className="container other">
                <div className="heading-projects">
                    <h1><b>My Projects</b></h1>
                </div>
                <div className="row centered">
                    <div className="projectcard">
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <div className="projectname">
                                    <h2><a href="https://lastbench.herokuapp.com" target="_blank" rel="noopener noreferrer">Last Bench Study Portal</a></h2>
                                </div>
                                <div className="projectabout centered">
                                    <h4>A one-of-its-kind study portal for students, and teachers, to upload posts, courses, make friends, chat and lot more.</h4>
                                </div>
                                <div className="techused">
                                    <img className="projecttechimage" src={html5} alt="HTML 5"/>
                                    <img className="projecttechimage" src={css} alt="CSS"/>
                                    <img className="projecttechimage" src={js} alt="JavaScript"/>
                                    <img className="projecttechimage" src={mongodb} alt="Mongo DB"/>
                                    <img className="projecttechimage" src={expressjs} alt="Express JS"/>
                                    <img className="projecttechimage" src={nodejs} alt="Node JS"/>
                                    <img className="projecttechimage" src={passport} alt="Passport JS"/>
                                </div>
                                <div className="buttons">
                                    <a href="https://lastbench.herokuapp.com" target="_blank" rel="noopener noreferrer" className="btn btn-success btn-lg">Live</a>
                                    <a href="https://github.com/mihirkumar02/lastbench" target="_blank" rel="noopener noreferrer" className="btn btn-default btn-lg">GitHub Code</a>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="projectimage">
                                    <img className="cardimage" src={lastbench} alt="Last Bench Study Portal" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row centered">
                    <div className="projectcard">
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <div className="projectname">
                                    <h2><a href="https://burstshot.herokuapp.com" target="_blank" rel="noopener noreferrer">BurstShot Photography</a></h2>
                                </div>
                                <div className="projectabout centered burstshot">
                                    <h4>The website for my Instagram handle on photography, named <a className="burstshot" href="https://www.instagram.com/b_u_r_s_t_shot/" target="_blank" rel="noopener noreferrer">@b_u_r_s_t_shot</a>.</h4>
                                </div>
                                <div className="techused">
                                    <img className="projecttechimage" src={html5} alt="HTML 5"/>
                                    <img className="projecttechimage" src={css} alt="CSS"/>
                                    <img className="projecttechimage" src={js} alt="JavaScript"/>
                                    <img className="projecttechimage" src={jquery} alt="jQuery"/>
                                    <img className="projecttechimage" src={mongodb} alt="Mongo DB"/>
                                    <img className="projecttechimage" src={expressjs} alt="Express JS"/>
                                    <img className="projecttechimage" src={nodejs} alt="Node JS"/>
                                    <img className="projecttechimage" src={passport} alt="Passport JS"/>
                                </div>
                                <div className="buttons">
                                    <a href="https://burstshot.herokuapp.com" target="_blank" rel="noopener noreferrer" className="btn btn-success btn-lg">Live</a>
                                    <a href="https://github.com/mihirkumar02/burstShotPhotography" target="_blank" rel="noopener noreferrer" className="btn btn-default btn-lg">GitHub Code</a>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="projectimage">
                                    <img className="cardimage" src={burstshot} alt="BurstShot Photography" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row centered">
                    <div className="projectcard">
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <div className="projectname">
                                    <h2><a href="https://farmieiot.herokuapp.com" target="_blank" rel="noopener noreferrer">Farmie: A Farmer's Portal</a></h2>
                                </div>
                                <div className="projectabout centered">
                                    <h4>A Farmer-friendly website, which displays light readings taken from a light sensor placed in the farmland.</h4>
                                </div>
                                <div className="techused">
                                    <img className="projecttechimage" src={html5} alt="HTML 5"/>
                                    <img className="projecttechimage" src={css} alt="CSS"/>
                                    <img className="projecttechimage" src={js} alt="JavaScript"/>
                                    <img className="projecttechimage" src={mongodb} alt="Mongo DB"/>
                                    <img className="projecttechimage" src={expressjs} alt="Express JS"/>
                                    <img className="projecttechimage" src={nodejs} alt="Node JS"/>
                                </div>
                                <div className="buttons">
                                    <a href="https://farmieiot.herokuapp.com" target="_blank" rel="noopener noreferrer" className="btn btn-success btn-lg">Live</a>
                                    <a href="https://github.com/mihirkumar02/farmie" target="_blank" rel="noopener noreferrer" className="btn btn-default btn-lg">GitHub Code</a>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="projectimage">
                                    <img className="cardimage" src={farmie} alt="Farmie IOT" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row centered">
                    <div className="projectcard">
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <div className="projectname">
                                    <h2><a href="https://itsmemihir.netlify.com" target="_blank" rel="noopener noreferrer">My Portfolio Website</a></h2>
                                </div>
                                <div className="projectabout centered">
                                    <h4>My first website built using React JS, which showcases my work, achievements, skills and resume.</h4>
                                </div>
                                <div className="techused">
                                    <img className="projecttechimage" src={html5} alt="HTML 5"/>
                                    <img className="projecttechimage" src={css} alt="CSS"/>
                                    <img className="projecttechimage" src={js} alt="JavaScript"/>
                                    <img className="projecttechimage" src={jquery} alt="jQuery"/> 
                                    <img className="projecttechimage" src={reactjs} alt="React JS"/>      
                                </div>
                                <div className="buttons">
                                    <a href="https://itsmemihir.netlify.com" target="_blank" rel="noopener noreferrer" className="btn btn-success btn-lg">Live</a>
                                    <a href="https://github.com/mihirkumar02/myportfolio" target="_blank" rel="noopener noreferrer" className="btn btn-default btn-lg">GitHub Code</a>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="projectimage">
                                    <img className="cardimage" src={portfolio} alt="My portfolio" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row centered">
                    <div className="projectcard">
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <div className="projectname">
                                    <h2><a href="https://allyourmovies.netlify.com" target="_blank" rel="noopener noreferrer">All Your Movies</a></h2>
                                </div>
                                <div className="projectabout centered">
                                    <h4>A website which displays Movies' and TV series' details extracted from OMDb API.</h4>
                                </div>
                                <div className="techused">
                                    <img className="projecttechimage" src={html5} alt="HTML 5"/>
                                    <img className="projecttechimage" src={css} alt="CSS"/>
                                    <img className="projecttechimage" src={js} alt="JavaScript"/>
                                    <img className="projecttechimage" src={bootstrap} alt="Bootstrap"/>
                                    <img className="projecttechimage" src={reactjs} alt="React JS"/> 
                                    <img className="projecttechimage" src={redux} alt="Redux JS"/>  
                                </div>
                                <div className="buttons">
                                    <a href="https://allyourmovies.netlify.com" target="_blank" rel="noopener noreferrer" className="btn btn-success btn-lg">Live</a>
                                    <a href="https://github.com/mihirkumar02/allyourmovies" target="_blank" rel="noopener noreferrer" className="btn btn-default btn-lg">GitHub Code</a>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="projectimage">
                                    <img className="cardimage" src={aym} alt="All your movies" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="row centered">
                        <div className="projectcard">
                            <div className="row">
                                <div className="col-md-6 col-sm-12">
                                    <div className="projectname">
                                        <h2><a href="https://countcovid.netlify.com" target="_blank" rel="noopener noreferrer">Count Covid-19 INDIA</a></h2>
                                    </div>
                                    <div className="projectabout centered">
                                        <h4>Website for displaying state-wise count of Covid-19 cases in India.</h4>
                                    </div>
                                    <div className="techused">
                                        <img className="projecttechimage" src={html5} alt="HTML 5"/>
                                        <img className="projecttechimage" src={css} alt="CSS"/>
                                        <img className="projecttechimage" src={js} alt="JavaScript"/>
                                        <img className="projecttechimage" src={bootstrap} alt="Bootstrap"/>
                                        <img className="projecttechimage" src={reactjs} alt="React JS"/> 
                                        <img className="projecttechimage" src={redux} alt="Redux JS"/>  
                                    </div>
                                    <div className="buttons">
                                        <a href="https://countcovid.netlify.com" target="_blank" rel="noopener noreferrer" className="btn btn-success btn-lg">Live</a>
                                        <a href="https://github.com/mihirkumar02/countCovid-19INDIA" target="_blank" rel="noopener noreferrer" className="btn btn-default btn-lg">GitHub Code</a>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="projectimage">
                                        <img className="cardimage" src={covid} alt="Count Covid-19" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row centered">
                        <div className="projectcard">
                            <div className="row">
                                <div className="col-md-6 col-sm-12">
                                    <div className="projectname">
                                        <h2><a href="https://map-ui.netlify.com" target="_blank" rel="noopener noreferrer">Map - UI</a></h2>
                                    </div>
                                    <div className="projectabout centered">
                                        <h4>A User Interface designed using React JS and Google Maps API.</h4>
                                    </div>
                                    <div className="techused">
                                        <img className="projecttechimage" src={html5} alt="HTML 5"/>
                                        <img className="projecttechimage" src={css} alt="CSS"/>
                                        <img className="projecttechimage" src={js} alt="JavaScript"/>
                                        <img className="projecttechimage" src={bootstrap} alt="Bootstrap"/>
                                        <img className="projecttechimage" src={reactjs} alt="React JS"/> 
                                    </div>
                                    <div className="buttons">
                                        <a href="https://map-ui.netlify.com" target="_blank" rel="noopener noreferrer" className="btn btn-success btn-lg">Live</a>
                                        <a href="https://github.com/mihirkumar02/Map-UI" target="_blank" rel="noopener noreferrer" className="btn btn-default btn-lg">GitHub Code</a>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="projectimage">
                                        <img className="cardimage" src={map} alt="Map - UI" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
}
 
export default Projects;