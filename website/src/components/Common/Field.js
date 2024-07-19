import React, { Component } from "react";

class Field extends Component {

    render() {
        return (
            <div className="form-group">
                {this.props.elemementName === 'input' ?
               
                    <input
                        className="form-control"
                        id={this.props.type}
                        type={this.props.type}
                        placeholder={this.props.placeholder}
                        name = {this.props.name}
                        onChange={this.props.onChange}
                        onBlur={this.props.onBlur}
                    
                   
                    />  
                   

                    :

                    
                    <textarea
                        className="form-control"
                        id={this.props.name}
                        placeholder={this.props.placeholder}
                        name = {this.props.name}
                        onChange={this.props.onChange}
                        onBlur={this.props.onBlur}
                    />
                   

                }


                <div className="help-block text-danger">
                    {(this.props.touched && this.props.errors) &&
                        <span>{this.props.errors}</span>
                    }
                </div>
            </div>
        )
    }
}

export default Field;