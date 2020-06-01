import React, { Component } from 'react';
import Home from './components/home/Home';
import './App.css';
import Projects from './components/projects/Projects';
import Resume from './components/resume/Resume';

class App extends Component{

  constructor(props){
    super(props)
    this.state={
      resume: false,
      home: true,
      projects: false,
    }
    this.projectBtnClick=this.projectBtnClick.bind(this);
    this.resumeBtnClick=this.resumeBtnClick.bind(this);
    this.homeClick=this.homeClick.bind(this);

  }

  homeClick(){
    this.setState({
      resume: false,
      home: true,
      projects: false,
    })
  }
  projectBtnClick(){
    this.setState({
      resume: false,
      home: false,
      projects: true
    })
  }
  resumeBtnClick(){
    this.setState({
      resume: true,
      home: false,
      projects: false
    })
  }
  render(){

    if(this.state.home){ 
      return (
        <div className="App">
          <Home 
          projectBtnClick={this.projectBtnClick}
          resumeBtnClick={this.resumeBtnClick}/>
        </div>
      );
    }
    else if(this.state.resume){
      return(
        <div className="resume">
          <Resume 
          projectsClick={this.projectBtnClick}
          homeClick={this.homeClick}/>
        </div>
      )
    }
    else if(this.state.projects){
      return(
        <div className="projects">
          <Projects 
          homeClick={this.homeClick}
          resumeClick={this.resumeBtnClick} />
        </div>
      )
      
    }
    else{
      return(<div></div>)
    }

  }
}

export default App;
