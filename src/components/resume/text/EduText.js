import React from 'react';

function EduText(){
    
    return(
        <div style={textContainer}>
            <h1 style={title}>Education</h1>
            <p style={details}>I graduated from the <em style={emphasize}>United States Naval Academy</em> in <em style={emphasize}>May of 2020</em>. While there I was on the <em style={emphasize}>Commadant's List</em> and helped push my team to winning the <em style={emphasize}>Division 1 Women's Rowing Patriot League Championship</em> every year.</p>
        </div>
    )
}
const textContainer={
    padding: '1vw',
}
const title={
    fontSize: '1vw',
}
const details={
    fontSize: '.8vw',
}
const emphasize={
    fontWeight: 'bold',
}

export default EduText;