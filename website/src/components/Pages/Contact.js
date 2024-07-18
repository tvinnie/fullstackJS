import React, {Component} from 'react';

import Field from '../Common/Field';

const fields = {
    sections:[
        [
            {name:'name',elementName:'input',type:'text',placeholder:'Your Name'},
            {name:'email',elementName:'input',type:'email',placeholder:'Your Email'},
            {name:'phone',elementName:'input',type:'tel',placeholder:'Your Phone Number'},
        ],
        [

            {name:'message',elementName:'textarea',type:'text',placeholder:'Enter your Message'},
        ]
        
    ]

    
}


class Contact extends Component{
    constructor(props){
        super(props);

        this.state = {
            name:'',
            email:'',
            phone:'',
            message:''
        }
    }

    submitForm = (e) =>{
        e.preventDefault();
        
        alert("Form Submitted, Thank You!")
    }
    render(){
        return(
            <section className="page-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Contact Us</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <form id="contactForm" data-sb-form-api-token="API_TOKEN" onSubmit={e => this.submitForm(e)}>
                    <div className="row align-items-stretch mb-5">
                        
                    {fields.sections.map((section, sectionIndex) => {

                        return(
                            <div className='col-md-6' key={sectionIndex}>
                               
                                {section.map((field, i) => {
                                    return <Field 
                                    {...field} 
                                    key={i}
                                    value={this.state[field.name]}
                                    onChange = {e => this.setState({[field.name]: e.target.value})}
                                    />
                                })}
                               
                            </div>
                        )
                    })}
                    </div>

                    <div className="text-center"><button 
                    className="btn btn-primary btn-xl text-uppercase" 
                    id="submitButton" 
                    type="submit"
                    >Send Message</button></div>

                </form>
            </div>
        </section>
        )
    }
}

export default Contact;