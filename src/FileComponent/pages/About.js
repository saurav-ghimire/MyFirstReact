import React, {Component} from 'react';
import Header from '../Common/Header';
import About from '../Common/About';

class AboutPage extends Component {
    render(){
        return (
            <div>
                <Header 
                    title = "Welcome to About page"
                    subtitle = "Welcome to About Page Subtitle"
                    buttonText = "About Me"
                    link = "/services"
                    image = 'https://img.freepik.com/free-vector/black-dark-3d-low-poly-geometric-background_79145-393.jpg?size=626&ext=jpg'
                />
                <About />
            </div>
        )
    }
}

export default AboutPage;