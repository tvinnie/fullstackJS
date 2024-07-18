import React, {Component} from "react";
import ClientsItem from './ClientsItem';
import img1 from '../assets/img/logos/microsoft.svg';
import img2 from '../assets/img/logos/google.svg';
import img3 from '../assets/img/logos/facebook.svg';
import img4 from '../assets/img/logos/ibm.svg';


const client =[
    {title:'Microsoft', img:img1},
    {title:'Google', img:img2},
    {title:'Facebook', img:img3},
    {title:'IBM', img:img4},
]

class Clients extends Component{

    render(){
        return(
            <div className="py-5">
            <div className="container">
                <div className="row align-items-center">
                    {client.map((item,key)=>{
                        return <ClientsItem {...item} key={key} />
                    })}
                </div>
            </div>
        </div>
        )
    }
}

export default Clients;