import React, { Component } from 'react';

class Home extends Component{

    constructor(props){
        super(props)
        this.projectBtnClick=this.projectBtnClick.bind(this);
        this.resumeBtnClick=this.resumeBtnClick.bind(this);
    }

    projectBtnClick(){
        
        this.props.projectBtnClick();
    }
    resumeBtnClick(){
        
        this.props.resumeBtnClick();
    }

    render(){
        return(
            <div style={headerStyle}>
                <h1 style={nameStyle}>Jo Martin</h1>
                <div style={btnBar}>
                    <button style={btnStyle} id="ProjectsBtn" onClick={this.projectBtnClick}>Projects</button>
                    <div style={divider} />
                    <button style={btnStyle} id="ResumeBtn" onClick={this.resumeBtnClick}>Resume</button>
                </div>
            </div>
        )
    }

    
}
const btnBar={
    textAlign: 'center',
}
const headerStyle= {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '0vw 12vw 3vw',
    backgroundColor: '#ebedf1',
    borderRadius: '4px'
    
}

const divider={
    display: 'inline-block',
    marginRight: '5px',
    marginLeft: '5px'
}
const btnStyle={
    fontSize: '2vw',
    margin: '0',
    padding: '0',
    border: 'solid',
    borderRadius: '4px',
    padding: '.5vw',
    textAlign: 'center',
    backgroundColor: '#f1ebed',
    borderWidth: 'thin'
}
const nameStyle={
    fontSize: '5vw'
}
export default Home;