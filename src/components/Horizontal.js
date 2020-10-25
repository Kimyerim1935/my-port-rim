import React, { Component } from 'react';
import Card from './Card.js';

class Horizontal extends Component{
    constructor(props){
        super(props)

        this.state = {

        }
    }

   render(){
        return(
            <div>
            <div className="view-port" style={styles.view_port}>
                <div className="card-container" style={styles.card_container} >
                    <Card / >
                </div>
            </div>
            </div>
        )
    }
}

const styles = {
    view_port : {
        top:'50%',
        left:'50%',
        width:'300px',
        height: '280px',
        backgroundColor:'red'
    },
    card_container: {
        display:'flex',
         flexDirection:'row',
         width:'fit-content'
    }
}
export default Horizontal;