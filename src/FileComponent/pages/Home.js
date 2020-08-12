import React, {Component} from 'react';
import Header from '../Common/Header';
import image from '../assets/images/header-bg.jpg';

// reusable Component
import Services from '../Common/Services';
import Portfolio from '../Common/Portfolio';
import About from '../Common/About';
import Team from '../Common/Team';

class Home extends Component {
    render(){
        return (
            <div>
                <Header 
                    title = "Welcome to Home page"
                    subtitle = "Welcome to Home Page Subtitle"
                    buttonText = "Tell Me More"
                    link = "/services"
                    showButton = {true}
                    image = {image}
                />
                <Services />
                <Portfolio />
                <About />
                <Team />
            </div>
        )
    }
}

export default Home;