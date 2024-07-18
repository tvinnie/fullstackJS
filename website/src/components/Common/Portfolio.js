import React, { Component } from "react";
import PortfolioItem from "./PortfolioItem";

// Portfolio Images
import img1 from '../assets/img/portfolio/1.jpg';
import img2 from '../assets/img/portfolio/2.jpg';
import img3 from '../assets/img/portfolio/3.jpg';
import img4 from '../assets/img/portfolio/4.jpg';
import img5 from '../assets/img/portfolio/5.jpg';
import img6 from '../assets/img/portfolio/6.jpg';

const portfolio = [
    { title: 'Threads', subtitle: 'Illustration', img: img1 },
    { title: 'Explore', subtitle: 'Graphic Design', img: img2 },
    { title: 'Finish', subtitle: 'Identity', img: img3 },
    { title: 'Lines', subtitle: 'Branding', img: img4 },
    { title: 'Southwest', subtitle: 'Website Design', img: img5 },
    { title: 'Window', subtitle: 'Photography', img: img6 }
]

class Portfolio extends Component {

    render() {
        return (
            <div>
                <section className="page-section bg-light" id="portfolio">
                    <div className="container">
                        
                            <div className="text-center">
                                <h2 className="section-heading text-uppercase">Portfolio</h2>
                                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                            </div>
                        
                        <div className="row">

                                {portfolio.map((item, index) => {
                                    return <PortfolioItem {...item} key={index} />
                                })}

                        </div>
                    </div>
                </section>
            </div>
        )
    }
}


export default Portfolio;