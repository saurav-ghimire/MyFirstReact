import React, {Component} from 'react';
import PortfolioItem from './PortfolioItem';

import img1 from '../assets/images/portfolio/01-thumbnail.jpg';    
import img2 from '../assets/images/portfolio/02-thumbnail.jpg';    
import img3 from '../assets/images/portfolio/03-thumbnail.jpg';    
import img4 from '../assets/images/portfolio/04-thumbnail.jpg';    
import img5 from '../assets/images/portfolio/05-thumbnail.jpg';    
import img6 from '../assets/images/portfolio/06-thumbnail.jpg';    

const PortfolioA = [
    {title: 'Main Title 1', subtitle: 'Subtitle', image: img1},
    {title: 'Main Title 2', subtitle: 'Subtitle', image: img2},
    {title: 'Main Title 3', subtitle: 'Subtitle', image: img3},
    {title: 'Main Title 4', subtitle: 'Subtitle', image: img4},
    {title: 'Main Title 5', subtitle: 'Subtitle', image: img5},
    {title: 'Main Title 6', subtitle: 'Subtitle', image: img6}
];

class Portfolio extends Component {
    render(){
        return(
            <div>
                <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Portfolio</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row">
                    {PortfolioA.map((item, index) => {
                        return <PortfolioItem {...item} key={index}/>
                    })}
                </div>
            </div>
        </section>
            </div>
        )
    }
}

export default Portfolio;