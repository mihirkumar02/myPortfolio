import React from 'react';

const Proficiency = () => {
    return (  
        <div className="proficiency">
            <div className="heading-tools">
                <h1><b>Proficiency</b></h1>
            </div>
            <div className="card-row tech">
                <div className="columncard card">
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
                <div className="columncard card">
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
            </div>
            <div className="card-row tech">
                <div className="columncard card1">
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
                <div className="columncard card1">
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