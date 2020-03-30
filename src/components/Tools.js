import React from 'react';
import npm from '../icons/npm.svg';
import vscode from '../icons/vscode.svg';
import github from '../icons/github.svg';
import heroku from '../icons/heroku.svg';
import netlify from '../icons/netlify.svg';

const Tools = () => {
    return (  
        <div className="smallother">
            <div className="heading-tools">
                <h1><b>Tools</b></h1>
            </div>
            <div className="row centered tech">
                <div className="col-md-4 col-sm-12 toolcenter">
                    <img src={npm} alt="npm"/>
                </div>
                <div className="col-md-4 col-sm-12 toolcenter">
                    <img src={vscode} alt="Microsoft Visual Studio Code"/>
                </div>
                <div className="col-md-4 col-sm-12 toolcenter">
                    <img src={heroku} alt="Heroku"/>
                </div>
            </div>
            <div className="row centered tech">
                <div className="col-md-6 col-sm-12 toolcenter">
                    <img src={netlify} alt="Netlify"/>
                </div>
                <div className="col-md-6 col-sm-12 toolcenter">
                    <img src={github} alt="GitHub"/>
                </div>
            </div>
        </div>
    );
}
 
export default Tools;