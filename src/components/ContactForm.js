import React, { useState } from 'react';
import Social from './Social';
import { createMessage } from './helper/apicalls';

const ContactForm = () => {
    const [data,setData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const { name, email, message } = data;

    const handleSubmit = (e) => {
        e.preventDefault();
        createMessage({name, email, message})
            .then(() => console.log("Message sent!"))
            .catch(err => console.log("Sorry! There was an error!"));

        setData({
            name: '',
            email: '',
            message: ''
        })
    }

    const handleChange = name => e => {
        setData({
            ...data,
            [name]: e.target.value
        });
    }

    return (  
        <div className="ContactForm">
            <div className="container other">
                <div className="heading">
                    <h1><b>Say Hi!</b></h1>
                </div>
                <div className="row centered">
                    <div className="col-md-6 col-sm-12">
                        <div className="form-box">
                            <div className="form-heading">
                                <h2>Send A Message</h2>
                            </div>
                            <form>
                                <div className="row">
                                    <input onChange={handleChange("name")} className="input-field" type="text" value={data.name} placeholder="Your Name.."/>
                                </div>
                                <div className="row">
                                    <input onChange={handleChange("email")} className="input-field" type="email" value={data.email} placeholder="Your Email.."/>
                                </div>
                                <div className="row">
                                    <textarea onChange={handleChange("message")} className="input-field" rows="5" cols="20" value={data.message} placeholder="Your Message.."></textarea>
                                </div>
                                <div className="row button">
                                    <button onClick={handleSubmit} className="btn btn-success btn-lg">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="links-heading">
                            <h2>Connect With Me</h2>
                        </div>
                        <Social />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ContactForm;