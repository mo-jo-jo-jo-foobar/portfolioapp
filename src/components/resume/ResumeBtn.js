import React, { Component } from 'react';

class ResumeBtn extends Component{

    constructor(props){
        super(props)
        this.state={
            hovered: false,
            btnIcon: this.props.btnIcon,
            style: iconBtn
        }
        this.hoverEnter=this.hoverEnter.bind(this);
        this.hoverExit=this.hoverExit.bind(this);
        this.onClick=this.onClick.bind(this);
    }
    onClick(){
        this.props.click();
    }
    hoverEnter(){
        this.setState({hovered: true})
    }
    hoverExit(){
        this.setState({hovered: false})
    }
    render(){
        return(
            <button onMouseEnter={this.hoverEnter} 
                onMouseLeave={this.hoverExit}
                onClick={this.onClick}
                style={this.state.hovered? iconHover : iconBtn}>
                <div style={inner}>
                <span style={this.state.hovered? topHover : top}></span>
                <span style={left}></span>
                <span style={this.state.hovered? bottomHover: bottom}></span>
                <span style={right}></span>
                {this.state.btnIcon}
                <p style={textUnderneath}>{this.props.type}</p>
                </div>
            </button>
        )
    }
}
const textUnderneath={
    display: 'inline',
    fontSize: '1vw',
    margin: '0',
    padding: '0',
}
const iconBtn={
    
    display: 'inline-block',
    marginRight: '1vw',
    marginLeft: '1vw',
    marginBotom: '0',
    marginTop: '0',
    backgroundColor: 'transparent',
    padding: '0',
    border: 'none',
    transitionDuration: '.5s',
}

const iconHover={
    backgroundColor: '#ebedf1',
    border: 'black',
    borderRadius: '4px',
    transitionDuration: '.5s',
    transform: 'translate(0, -1vw)',
    boxShadow: '5px 20px 10px',
}
const top={
    position: 'absolute',
    transition: 'transform .5s',
    width: '100%',
    height: '2px',
    background: 'black',
    top: '0',
    right: '0',
    
    transformOrgin: 'right',
    
}
const topHover={
    position: 'absolute',
    transition: 'transform .5s',
    width: '100%',
    height: '2px',
    background: 'black',
    top: '0',
    left: '0',
    transform: 'scaleX(-100%)',
    transformOrgin: 'left',
}
const bottom={
    position: 'absolute',
    transition: 'transform .5s',
    width: '100%',
    height: '2px',
    background: 'black',
    bottom: '0',
    left: '0',
    
    transformOrgin: 'left',
}
const bottomHover={
    position: 'absolute',
    transition: 'transform .5s',
    width: '100%',
    height: '2px',
    background: 'black',
    bottom: '0',
    right: '0',
    transform: 'scaleX(-100%)',
    transformOrgin: 'right',
}
const left={

}
const right={

}
const inner={
    display: 'block',
    position: 'relative',
    width: '5vw',
    height: '5vw',
    lineHeight: '5vw',
    fontSize: '2vw',
    textAlign: 'center',
    textDecoration: 'none',
    transition: 'transform .5s',
}
export default ResumeBtn;