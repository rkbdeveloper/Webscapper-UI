import React from 'react';


class Facebook extends React.Component {

    render(){
        return (<div className={`content ${this.props.currentTab !== "facebook"? "hide" : "show"}`}>
                    FACEBOOK

                    <div className="data-collection">
                        <img src="https://picsum.photos/200"/>
                        <img src="https://picsum.photos/200"/>
                        <img src="https://picsum.photos/200"/>
                        <img src="https://picsum.photos/200"/>
                        <img src="https://picsum.photos/200"/>
                        <img src="https://picsum.photos/200"/>
                        <img src="https://picsum.photos/200"/>
                        <img src="https://picsum.photos/200"/>
                        <img src="https://picsum.photos/200"/>
                        <img src="https://picsum.photos/200"/>
                        <img src="https://picsum.photos/200"/>
                        <img src="https://picsum.photos/200"/>
                    </div>
                </div>);
    }
    
    
    
    
}


export default Facebook;