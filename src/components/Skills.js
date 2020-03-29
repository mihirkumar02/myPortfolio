import React from 'react';
import Tech from './Tech';
import Tools from './Tools';
import Proficiency from './Proficiency';

const Skills = () => {
    return (  
        <div className="Skills">
            <div className="container">
                <button id="btnDown" title="Go Down"><i className="fa fa-chevron-down"></i></button>
                <button id="btnUp" title="Go Up"><i className="fa fa-chevron-up"></i></button>
                <Tech />
                <Tools />
                <Proficiency />
            </div>
        </div>

    );
}
 
export default Skills;