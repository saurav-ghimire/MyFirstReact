import React, {Component} from 'react';
import Header from '../Common/Header';
import PortfolioItem from '../Common/PortfolioItem';



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

class PortfolioPage extends Component {
    render(){
        return(
            <div>
                <Header 
                    title = "Welcome to Gallery page"
                    subtitle = "Welcome to Gallery Page Subtitle"
                    buttonText = "Tell Me More"
                    link = "/services"
                    showButton = {true}
                    image = 'https://images.unsplash.com/photo-1484950763426-56b5bf172dbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
                />
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

export default PortfolioPage;