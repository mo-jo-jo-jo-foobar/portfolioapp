import React from 'react';

function ExpText(){

    return(
        <div style={textContainer}>
            <div style={col}>
                <h1 style={title}>US Navy</h1>
                <ul style={listBlocks}>
                    <li style={items}>Sep '16-May '20</li>
                    <li style={items}>Led a three person team to track and verify the qualification records of over 1,000 individuals to produce daily progress reports</li>
                    <li style={items}>Streamlined the tracking system of firearm qualification records from a two person job to a one person job in order to allow for a greater focus on score verification and accuracy</li>
                </ul>
            </div>
            <div style={col}>
                <h1 style={title}>General Electric</h1>
                <ul style={listBlocks}>
                    <li style={items}>Jun '17-July '17</li>
                    <li style={items}>Monitored and investigated cyber threat activity targeted at GE industry sectors</li>
                    <li style={items}>Used Python scripting to analyze threats</li>
                </ul>
            </div>
            <div style={col}>
                <h1 style={title}>Project Team Lead</h1>
                <ul style={listBlocks}>
                    <li style={items}>Sep '19-May '20 </li>
                    <li style={items}>Constructed an IM application using Javascript, MySQL, and Python implementing Google's QUIC, transport layer protocol</li>
                    <li style={items}>Directed team in an Agile Software development cycle</li>
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
}
const textContainer={
    display: 'grid inline-block',
    gridTemplateColumns: '33.3% 33.3% 33.3%'
    
}
const items ={
    fontSize: '1vw',
    paddingLeft: '0vw'
}
const title={
    fontSize: '1.1vw',

}
export default ExpText;