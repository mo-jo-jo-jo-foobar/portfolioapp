import React from 'react';

function SkillsText(){

    return(
        <div style={textContainer}>
            <div style={col}>
                <h1 style={title}>Languages</h1>
                <ul style={listBlocks}>
                    <li style={items}>C</li>
                    <li style={items}>C++</li>
                    <li style={items}>Java</li>
                    <li style={items}>Javascript</li>
                    <li style={items}>Python</li>
                    <li style={items}>FORTRAN</li>
                    <li style={items}>HTML and CSS</li>
                    
                </ul>
            </div>
            <div style={col}>
                <h1 style={title}>Misc.</h1>
                <ul style={listBlocks}>
                    <li style={items}>ReactJs</li>
                    <li style={items}>NodeJs</li>
                    <li style={items}>AWS Cloud Computing</li>
                    <li style={items}>Data Structures</li>
                    <li style={items}>Algorithms</li>
                    <li style={items}>Network Stack</li>
                    <li style={items}>Parallel Computing</li>
                    <li style={items}>OOP</li>
                    <li style={items}>Active DoD Secret Clearance</li>
                    <li style={items}>German Fluency</li>
                </ul>
            </div>
        </div>
    )
}
const listBlocks={
    paddingLeft: '2vw',
    paddingRight: '2vw',
    paddingTop: '0',
    paddingBottom: '0',
}
const col={
    
    paddingRight: '1vw',
    paddingLeft: '1vw',
    fontSize: '1vw',
    display: 'inline-block',
    verticalAlign: 'text-top',
}
const textContainer={
    display: 'grid inline-block',
    gridTemplateColumns: '50% 50%'
    
}
const items ={
    fontSize: '1vw',
    paddingLeft: '0vw'
}
const title={
    fontSize: '1.1vw',

}
export default SkillsText;