import React from 'react';
import facebook_img from '../imgs/facebook.png';
import download_img from '../imgs/download.svg';
import {RenderLinkToImage} from '../utility/helper';

class Facebook extends React.Component {

    constructor(props){
        super(props);
        this.sample_data = ["https://picsum.photos/200", "https://picsum.photos/200","https://picsum.photos/200", 
                            "https://picsum.photos/200","https://picsum.photos/200", "https://picsum.photos/200",
                            "https://picsum.photos/200", "https://picsum.photos/200","https://picsum.photos/200", 
                            "https://picsum.photos/200","https://picsum.photos/200", "https://picsum.photos/200",
                            "https://picsum.photos/200", "https://picsum.photos/200","https://picsum.photos/200", 
                            "https://picsum.photos/200","https://picsum.photos/200", "https://picsum.photos/200",
                            "https://picsum.photos/200", "https://picsum.photos/200","https://picsum.photos/200", 
                            "https://picsum.photos/200","https://picsum.photos/200", "https://picsum.photos/200",
                            "https://picsum.photos/200", "https://picsum.photos/200"];
    }


    render(){
        return (<div className={`content facebook ${this.props.currentTab !== "facebook"? "hide" : "show"}`}>
                    <form className="link facebook-link" onSubmit={this.OnSubmitForm} name="facebook">
                        <label htmlFor="facebook-link">
                            <img src={facebook_img} className="link-img" alt="" /> Facebook
                        </label>
                        <div>
                            <input name="facebook-link" type="url"/>
                            <input name="facebook-button" type="submit" value=">"/>
                        </div>

                        <div className="download-button">
                            Download
                            <img src={download_img  } className="link-img" alt="" />
                        </div>
                    </form>

                    <div id="facebook-images" className="data-collection">
                        {RenderLinkToImage(this.sample_data, 'facebook')}
                    </div>
                </div>);
    }
    
    
    
    
}


export default Facebook;