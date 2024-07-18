import React, { Component } from "react";
import { Link } from "react-router-dom";

class ClientsItem extends Component {

    render() {
        return (
            <div className="col-md-3 col-sm-6 my-3">
                <Link to="#!"><img className="img-fluid img-brand d-block mx-auto" src={this.props.img} alt="..." aria-label={`${this.props.title} Logo`} /></Link>
            </div>
        )
    }
}

export default ClientsItem;