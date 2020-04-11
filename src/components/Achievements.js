import React from 'react';
import lco from '../lco.PNG';
import hcj from '../hcj.PNG';
import internshala from '../internshala.PNG';

const Achievements = () => {
    return (  
        <div className="Achievements">
            <div className="container other"> 
                <div className="heading-projects">
                    <h1><b>Achievements and Certifications</b></h1>
                </div>
                <div className="row centered">
                    <div className="achievecard">
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <div className="achieveimage">
                                    <img className="achieveinner" src={internshala} alt="Intershala Trainings" />
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="achievenameleft">
                                    <h2>Machine Learning Training</h2>
                                </div>
                                <div className="achieveaboutleft">
                                    <h4>Internshala Trainings</h4>
                                </div>
                                <div className="achievedateleft">
                                    <h4>2020-04-11</h4>
                                </div>
                                <div className="achievedateleft">
                                    <h4>8C4406DB-DCCD-2D75-739B-E28CACD2D50E</h4>
                                </div>
                                <div className="achievebuttonleft">
                                    <a href="https://trainings.internshala.com/verify_certificate" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-md collapsible">View Certificate</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row centered">
                    <div className="achievecard">
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <div className="achievename">
                                    <h2>Full Stack MERN Bootcamp</h2>
                                </div>
                                <div className="achieveabout">
                                    <h4>LearnCodeOnline</h4>
                                </div>
                                <div className="achievedate">
                                    <h4>2020-03-10</h4>
                                </div>
                                <div className="achievebutton">
                                    <a href="https://courses.learncodeonline.in/learn/certificate/2340413-50332" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-md collapsible">View Certificate</a>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="achieveimage">
                                    <img className="achieveinner" src={lco} alt="LCO MERN Bootcamp" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row centered">
                    <div className="achievecard">
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <div className="achieveimage">
                                    <img className="achieveinner" src={hcj} alt="HTML, CSS and JS for Web Developers" />
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="achievenameleft">
                                    <h2>HTML, CSS and JavaScript for Web Developers</h2>
                                </div>
                                <div className="achieveaboutleft">
                                    <h4>Coursera</h4>
                                </div>
                                <div className="achievedateleft">
                                    <h4>2019-10-18</h4>
                                </div>
                                <div className="achievebuttonleft">
                                    <a href="https://www.coursera.org/account/accomplishments/certificate/ETX56J3HMX85" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-md collapsible">View Certificate</a>
                                </div>   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Achievements;