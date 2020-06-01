import React, { Component } from 'react';

class Projects extends Component{
    constructor(props){
        super(props)
        this.homeClick=this.homeClick.bind(this);
        this.resumeClick=this.resumeClick.bind(this);
    }

    homeClick(){
        this.props.homeClick();
    }
    resumeClick(){
        this.props.resumeClick();
    }
    render(){
        return(
            <div>
                <ul>
                    <li style={menuItem}><button onClick={this.homeClick} style={navButton}>Home</button></li>
                    <li style={menuItem}><button onClick={this.resumeClick} style={navButton}>Resume</button></li>
                </ul>
            </div>
        )
    }

}
const menuItem={
    listStyle: 'none',
    display: 'inline-block',
    backgroundColor: 'none',
}
const navButton={
    
}
export default Projects;