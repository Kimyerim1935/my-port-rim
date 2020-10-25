import React from 'react';

function Card(props) {
    return(
        <div style={styles.card}>
            card
        </div>
    )
}

const styles={
    card:{
        width:'300px',
        height:'280px',
        backgroundColor:'blue',
        fontsize:'2.5em',
        color :'white'

    }
}
export default Card;