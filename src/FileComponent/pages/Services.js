import React, {Component} from 'react';
import Header from '../Common/Header';
import SingleService from '../Common/SingleService';


const services= [
    {title: 'E-commerce', description: 'First Description', icon:'fa-shopping-cart' },
    {title: 'E-commerce', description: 'First Description', icon:'fa-shopping-cart' },
    {title: 'E-commerce', description: 'First Description', icon:'fa-shopping-cart' }
];
class Services extends Component {
    render(){
        return (
            <div>
                <Header 
                    title = "Welcome to Services page"
                    subtitle = "Services Page Subtitle"
                    buttonText = "Services Me"
                    link = "/services"
                    showButton = {true}
                    image = 'https://img.freepik.com/free-vector/black-dark-3d-low-poly-geometric-background_79145-393.jpg?size=626&ext=jpg'
                />
                <section className="page-section" id="services">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">Services</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                        <div className="row text-center">
                            {services.map((service, index) => {
                                return <SingleService {...service} key = {index} />
                            })}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default Services;