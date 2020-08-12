import React, {Component} from 'react';

import TeamItems from './TeamItems';

import img1 from '../assets/images/team/1.jpg' ;    
import img2 from '../assets/images/team/2.jpg' ;
import img3 from '../assets/images/team/3.jpg';

const team= [
    {title: 'Kay Garland', subtitle: 'Lead Designer', image: img1},
    {title: 'Garland Kay', subtitle: 'Designer Lead', image: img2},
    {title: 'Diana Petersen', subtitle: 'Lead Developer', image: img3}
    
];

class Teams extends Component{
    render(){
        return(
            <div>
                <section class="page-section bg-light" id="team">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
                    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div class="row">
                    {team.map((team, index) => {
                            return <TeamItems {...team} key = {index} />
                        })}                 
                </div>
                <div class="row">
                    <div class="col-lg-8 mx-auto text-center"><p class="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                </div>
            </div>
        </section>
            </div>
        )
    }
}

export default Teams;
