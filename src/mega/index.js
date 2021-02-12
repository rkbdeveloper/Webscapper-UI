import React from 'react';


class Mega extends React.Component {
    
    render(){
        return (<div className={`content ${this.props.currentTab !== "mega"? "hide" : "show"}`}>MEGA</div>);
    }
    
}

export default Mega;