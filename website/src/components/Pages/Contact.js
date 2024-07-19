import React, {Component} from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
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

    render(){
        return(
            <section className="page-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Contact Us</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <form id="contactForm" onSubmit={this.props.handleSubmit}>
                    <div className="row align-items-stretch mb-5">
                        
                    {fields.sections.map((section, sectionIndex) => {

                        return(
                            <div className='col-md-6' key={sectionIndex}>
                               
                                {section.map((field, i) => {
                                    return <Field 
                                    {...field} 
                                    key={i}
                                    value = {this.props.values[field.name]}
                                    name = {field.name}
                                    onChange = {this.props.handleChange}
                                    onBlur={this.props.handleBlur}
                                    touched={(this.props.touched[field.name])}
                                    errors = {this.props.errors[field.name]}
                          
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

export default withFormik({
    mapPropsToValues: () => ({
        name:'',
        email:'',
        phone:'',
        message:'',
    }),

    validationSchema:Yup.object().shape({
        name:Yup.string().min(5,'Name is too Short!!').required('Name Required!!!'),
        email:Yup.string().email('Enter a valid Email!!').required('Email Required!!!'),
        phone:Yup.string().min(10,'Phone Number is too Short!!').max(13,'Phone Number is too long!!').required('Phone Number Required!!!'),
        message:Yup.string().min(50,'Please provide more details!!!').required('Message Required!!!'),
    }),

    handleSubmit: (values, {setSubmitting}) => {
        console.log('VALUES:', values);
        alert("Submitted the Form!!!, Congratulations!@",JSON.stringify(values))
    }
})(Contact);