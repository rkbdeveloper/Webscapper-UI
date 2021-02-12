import React from 'react';
import {SendPostApiRequest} from '../utility/network';
import {BYPASS3_URL, FACEBOOK_URL, SNAPCHAT_URL, MEGA_URL, INSTAGRAM_URL} from '../utility/constant';
import facebook_img from '../imgs/facebook.png';
import mega_img from '../imgs/mega.png';
import snapchat_img from '../imgs/snapchat.png';
import instagram_img from '../imgs/instagram.png';



class Home extends React.Component {

    constructor(props){
        super(props);
        this.OnSubmitForm = this.OnSubmitForm.bind(this);
        this.APISuccess = this.APISuccess.bind(this);
        this.APIFails = this.APIFails.bind(this);
    }

    render(){
        return (<div className={`content ${this.props.currentTab !== "home"? "hide" : "show"}`}>
                    <div className="title"> Get data from websites</div>
                    <div className="forms">
                        {/* facebook link */}
                        <form className="link facebook-link" onSubmit={this.OnSubmitForm} name="facebook">
                            <label htmlFor="facebook-link">
                                <img src={facebook_img} className="link-img" alt="" /> Facebook
                            </label>
                            <div>
                                <input name="facebook-link" type="url"/>
                                <input name="facebook-button" type="submit" value=">"/>
                            </div>
                        </form>

                        {/* mega link */}
                        <form className="link mega-link" onSubmit={this.OnSubmitForm} name="mega">
                            <label htmlFor="mega-link">
                                <img src={mega_img} className="link-img" alt=""/> Mega
                            </label>
                            <div>
                                <input name="mega-link" type="url"/>
                                <input name="mega-button" type="submit" value=">"/>
                            </div>
                        </form>

                        {/* instagram link*/}
                        <form className="link instagram-link" onSubmit={this.OnSubmitForm} name="instagram">
                            <label htmlFor="instagram-link">
                                <img src={instagram_img} className="link-img" alt=""/> Instagram
                            </label>
                            <div>
                                <input name="instagram-link" type="url"/>
                                <input name="instagram-button" type="submit" value=">"/>
                            </div>
                        </form>
                        
                        {/* snapchat link */}
                        <form className="link snapchat-link" onSubmit={this.OnSubmitForm} name="snapchat">
                            <label htmlFor="snapchat-link">
                                <img src={snapchat_img} className="link-img" alt=""/> Snapchat
                            </label>
                            <div>
                                <input name="snapchat-link" type="url"/>
                                <input name="snapchat-button" type="submit" value=">"/>
                            </div>
                        </form>
                    </div>
                    

                </div>);
    }
    

    APISuccess(args){
        console.log(args);
    }

    APIFails(args){
        console.log(args);
    }
    
    OnSubmitForm(sender){

        sender.preventDefault();

        console.log(sender.target.name);
        console.log(sender.target[0].value);

        let name = sender.target.name;

        let data = sender.target[0].value;

        const json = "{\"link \":\"" + data +"\"}";

        data = JSON.parse(json);

        const api_link = this.GetAPIURL(name);

        SendPostApiRequest(api_link, data, this.APISuccess, this.APIFails);
    }

    GetAPIURL(name){
        switch(name)
        {
            case 'facebook': return FACEBOOK_URL;
            case 'mega': return MEGA_URL;
            case 'instagram': return INSTAGRAM_URL;
            case 'snapchat': return SNAPCHAT_URL;
            default: return BYPASS3_URL;
        }
    }
    
}


export default Home;