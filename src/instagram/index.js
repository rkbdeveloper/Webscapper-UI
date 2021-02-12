import React from 'react';

class Instagram extends React.Component {

    render(){
        return (<div className={`content ${this.props.currentTab !== "instagram"? "hide" : "show"}`}>INSTAGRAM</div>);
    }
    
    
    
    
}


export default Instagram;