import React, { Component } from 'react';
import Download from './svgs/Download';
import Education from './svgs/Education';
import Experience from './svgs/Experience';
import Skills from './svgs/Skills';
import LinkedIn from './svgs/LinkedIn';
import ContactMe from './svgs/ContactMe';
import ResumeBtn from './ResumeBtn';
import EduText from './text/EduText';
import ExpText from './text/ExpText';
import SkillsText from './text/SkillsText';


class Resume extends Component{

    constructor(props){
        super(props)
        this.state={
            education: false,
            experience: false,
            skills: false,
            main: true,
            movIcons: false,
            headerOpacity: 1,
            selected: 'main'
        }

        this.onResumeClick=this.onResumeClick.bind(this);
        this.onEducationClick=this.onEducationClick.bind(this);
        this.onExperienceClick=this.onExperienceClick.bind(this);
        this.externalEvent=this.externalEvent.bind(this);
        this.onSkillsClick=this.onSkillsClick.bind(this);
        this.contentDisplayRender=this.contentDisplayRender.bind(this);
        this.homeClick=this.homeClick.bind(this);
        this.projectsClick=this.projectsClick.bind(this);
    }

    homeClick(){
        this.props.homeClick();
    }
    projectsClick(){
        this.props.projectsClick();
    }
    contentDisplayRender(type){
        if(this.state.selected === 'main'){
            return(
                <div style={invisible}></div>
            )
        }
        else if(this.state.selected === 'education'){
            
            return(
                <div style={eduDisp}>
                    <EduText />
                </div>
            )
        }
        else if(this.state.selected === 'experience'){
            return(
                <div style={expDisp}>
                    <ExpText />
                </div>
            )
        }
        else if(this.state.selected === 'skills'){
            return(
                <div style={skillsDisp}>
                    <SkillsText />
                </div>
            )
        }
    }

    onResumeClick(){
        this.setState(
            {
            
            movIcons: false,
            selected: 'main',
            }
        )
    }
    onEducationClick(){
        
        this.setState(
            {
           
            movIcons: true,
            selected: 'education'
            }
        )
    }
    onExperienceClick(){
        this.setState(
            {
            
            movIcons: true,
            selected: 'experience',
            }
        )
    }
    
    onSkillsClick(){
        this.setState(
            {
            
            movIcons: true,
            selected: 'skills'
            }
        )
    }
    externalEvent(){

    }
    iconClick(type){

    }
    
    render(){
        //normal Resume screen
        
            return(
                <div>
                    <ul>
                        <li style={menuItem}><button onClick={this.homeClick} style={navButton}>Home</button></li>
                        <li style={menuItem}><button onClick={this.projectsClick} style={navButton}>Projects</button></li>
                    </ul>
                    <div>
                        {this.contentDisplayRender(this.state.selected)}
                    </div>
                    <div>
                        <h1 style={this.state.movIcons ? resumeHeaderFade : resumeHeader}>Resume</h1>
                    </div>
                    <div style={this.state.movIcons ? iconHeaderMove : iconHeader}>
                        <div style={potentialBreak}>
                            
                            <ResumeBtn btnIcon={<Education/>} click={this.onEducationClick} type="Education"/>
                            <ResumeBtn btnIcon={<Experience />} click={this.onExperienceClick} type="Experience"/>
                            <a href="JoMartinResume.pdf" target="_blank" download="Jo Martin Resume" ><ResumeBtn btnIcon={<Download />} click={this.externalEvent} type="Download"/></a>
                        </div>
                        <div style={potentialBreak}>
                            <ResumeBtn btnIcon={<Skills />} click={this.onSkillsClick} type="Skills"/>
                            <a href="https://www.linkedin.com/in/jo-martin-ab37b41a7/" target="_blank" rel="noopener noreferrer">
                            <ResumeBtn btnIcon={<LinkedIn />} click={this.externalEvent} type="LinkedIn"/>
                            </a>
                            <a href="mailto:jo.m.martin.m@gmail.com" target="_blank" rel="noopener noreferrer">
                            <ResumeBtn btnIcon={<ContactMe />} click={this.externalEvent} type="Contact"/>
                            </a>
                        </div>
                    </div>
                </div>
            )
        }
        
}




const resumeHeader={
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    paddingTop: '1vw',
    paddingBottom: '1vw',
    paddingRight: '4vw',
    paddingLeft: '4vw',
    backgroundColor: '#ebedf1',
    borderRadius: '4px', 
    transitionDuration: '2s',
    
    
}
const resumeHeaderFade={
    position: 'absolute',
    top: '30%',
    left: '40%',
    transform: 'translate(-60%, -50%)',
    paddingTop: '1vw',
    paddingBottom: '1vw',
    paddingRight: '4vw',
    paddingLeft: '4vw',
    backgroundColor: '#ebedf1',
    borderRadius: '4px',
    transitionDuration: '2s',
    transform: 'scale(.0001,.0001)'
}

const iconHeader={
    position: 'absolute',
    top: '52%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    
    
}
const iconHeaderMove={
    position: 'absolute',
    top: '70%',
    left: '50%',
    transform: 'translate(-50%, 90%)',
    transitionDuration: '4s',
    textAlign: 'center',
    
}
const potentialBreak={
    display: 'inline-block',
    margin: '0',
    padding: '0'
}

const invisible={
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    transitionDuration: '4s',
    backgroundColor: '#ebedf1',
    height: '0',
    width: '30%', 
    fontSize: '0',
    opacity: '0',
    borderRadius: '4px',
}
const eduDisp={
    position: 'absolute',
    transitionDuration: '4s',
    backgroundColor: '#ebedf1',
    
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    opacity: '1',
    borderRadius: '4px',
    display: 'inline-block'
    
    
}
const expDisp={
    position: 'absolute',
    transitionDuration: '4s',
    backgroundColor: '#ebedf1',
    borderRadius: '4px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)', 
    display: 'inline-block'
}
const skillsDisp={
    position: 'absolute',
    transitionDuration: '4s',
    backgroundColor: '#ebedf1',
    borderRadius: '4px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)', 
    display: 'inline-block'
}
const menuItem={
    listStyle: 'none',
    display: 'inline-block',
    backgroundColor: 'none',
}
const navButton={
    
}
export default Resume;