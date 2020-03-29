import React from 'react';
import npm from '../icons/npm.svg';
import vscode from '../icons/vscode.svg';
import github from '../icons/github.svg';
import heroku from '../icons/heroku.svg';

const Tools = () => {
    return (  
        <div className="smallother">
            <div className="heading-tools">
                <h1><b>Tools</b></h1>
            </div>
            <div className="row centered tech">
                <div className="col-md-3 col-sm-12 offset-md-1">
                    <img src={npm} alt="npm"/>
                </div>
                <div className="col-md-3 col-sm-12">
                    <img src={vscode} alt="Microsoft Visual Studio Code"/>
                </div>
                <div className="col-md-3 col-sm-12">
                    <img src={github} alt="GitHub"/>
                </div>
                <div className="col-md-2 col-sm-12">
                    <img src={heroku} alt="Heroku"/>
                </div>
            </div>
        </div>
    );
}
 
export default Tools;