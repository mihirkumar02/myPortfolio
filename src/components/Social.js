import React from 'react';

const Social = () => {
    return (  
        <div className="social">
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <div className="custom-row">
                        <div className="column">
                            <a className="instagram linkbutton" href="https://www.instagram.com/_mihir02_/" target="blank"><i className="fa fa-instagram"></i></a>
                        </div>
                        <div className="column">
                            <a className="github linkbutton" href="https://github.com/mihirkumar02" target="blank"><i className="fa fa-github"></i></a>
                        </div>
                        <div className="column">
                            <a className="linkedin linkbutton" href="https://www.linkedin.com/in/mihir-kumar-singh-595b19164/" target="blank"><i className="fa fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="custom-row">
                        <div className="column">
                            <a className="gmail linkbutton" href="mailto:mihirkumar02@gmail.com" target="blank"><i className="fa fa-envelope"></i></a>
                        </div>
                        <div className="column">
                            <a className="facebook linkbutton" href="https://www.facebook.com/mihir.kumarsingh.9" target="blank"><i className="fa fa-facebook"></i></a>
                        </div>
                        <div className="column">
                            <a className="behance linkbutton" href="https://www.behance.net/mihirkumarsingh" target="blank"><i className="fa fa-behance"></i></a>
                        </div>            
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Social;