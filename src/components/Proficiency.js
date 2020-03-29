import React from 'react';

const Proficiency = () => {
    return (  
        <div className="proficiency">
            <div className="heading-tools">
                <h1><b>Proficiency</b></h1>
            </div>
            <div className="row centered tech">
                <div className="col-md-3 col-sm-12 card">
                    <div className="box">
                        <div className="percent">
                            <svg>
                                <circle cx="70" cy="70" r="70"></circle>
                                <circle cx="70" cy="70" r="70"></circle>
                            </svg>
                            <div className="number">
                                <h2>60<span>%</span></h2>
                            </div>
                        </div>
                        <h3>MongoDB</h3>
                    </div>
                </div>
                <div className="col-md-3 col-sm-12 card">
                    <div className="box">
                        <div className="percent">
                            <svg>
                                <circle cx="70" cy="70" r="70"></circle>
                                <circle cx="70" cy="70" r="70"></circle>
                            </svg>
                            <div className="number">
                                <h2>70<span>%</span></h2>
                            </div>
                        </div>
                        <h3>Express JS</h3>
                    </div>
                </div>
                <div className="col-md-3 col-sm-12 card">
                    <div className="box">
                        <div className="percent">
                            <svg>
                                <circle cx="70" cy="70" r="70"></circle>
                                <circle cx="70" cy="70" r="70"></circle>
                            </svg>
                            <div className="number">
                                <h2>50<span>%</span></h2>
                            </div>
                        </div>
                        <h3>React JS</h3>
                    </div>
                </div>
                <div className="col-md-3 col-sm-12 card">
                    <div className="box">
                        <div className="percent">
                            <svg>
                                <circle cx="70" cy="70" r="70"></circle>
                                <circle cx="70" cy="70" r="70"></circle>
                            </svg>
                            <div className="number">
                                <h2>70<span>%</span></h2>
                            </div>
                        </div>
                        <h3>Node JS</h3>
                    </div>
                </div>
            </div>
        </div>        
    );
}
 
export default Proficiency;