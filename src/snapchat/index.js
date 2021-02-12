import React from 'react';


class Snapchat extends React.Component {
    
    render(){
        return (<div className={`content ${this.props.currentTab !== "snapchat"? "hide" : "show"}`}>SNAPCHAT</div>);
    }
    
}

export default Snapchat;