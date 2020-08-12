import React, {Component} from 'react';
import Header from '../Common/Header';

import TeamItems from '../Common/TeamItems';

import img1 from '../assets/images/team/1.jpg' ;    
import img2 from '../assets/images/team/2.jpg' ;
import img3 from '../assets/images/team/3.jpg';

const team= [
    {title: 'Kay Garland', subtitle: 'Lead Designer', image: img1},
    {title: 'Garland Kay', subtitle: 'Designer Lead', image: img2},
    {title: 'Diana Petersen', subtitle: 'Lead Developer', image: img3}
    
];

class Teams extends Component {
    render(){
        return (
            <div>
                <Header 
                    title = "Welcome to Teams page"
                    subtitle = "Teams Page Subtitle"
                    buttonText = "Teams is Me"
                    link = "/Teams"
                    showButton = {true}
                    image = 'data:image/jpeg;base64,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'
                />
                <section className="page-section" id="services">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">Services</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                        <div className="row text-center">
                        {team.map((team, index) => {
                            return <TeamItems {...team} key = {index} />
                        })}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default Teams;