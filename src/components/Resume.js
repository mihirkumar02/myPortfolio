import React from 'react';
import { Link } from 'react-router-dom';
import resume from '../resumeImage.png';

const Resume = () => {
    return (  
        <div className="Resume">
            <div className="container other">
                <div className="heading-projects">
                    <h1><b>My Resume</b></h1>
                </div>
                <div className="row centered">
                    <div className="col-md-4 col-sm-12 resumecenter">
                        <Link to="/myResume.pdf" target="_blank" download>
                            <img className="resume" src={resume} alt="My Resume" />
                        </Link>
                    </div>
                    <div className="col-md-2 col-sm-12 imagecenter">
                        <div className="row resumebutton">
                            <Link to="/myResume.pdf" target="_blank" className="btn btn-primary btn-lg">View</Link>
                        </div>
                        <div className="row">
                            <Link to="/myResume.pdf" target="_blank" className="btn btn-success btn-lg" download>Download</Link>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 imagecenter">
                        <h3>Shaped by my academic performances, extra-curricular activities, skills, projects, 
                         work experience and hobbies, here's the stuff you've probably been looking for.</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Resume;