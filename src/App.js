import React from 'react';
import './styles/style.scss'
import {APP_TABS} from './utility/constant';
import Pagination from './utility/Pagination';
import Home from './home';
import Facebook from './facebook';
import Mega from './mega';
import Snapchat from './snapchat';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      current_tab: 'home'
    };
  }

  render(){
    return (
      <div className="main-layout">
        <header className="main-header">
          <div className="tab">
            {this.GetTabs()}
          </div>
        </header>
        <div className="main-content">
          <Home currentTab={this.state.current_tab}/>
          <Facebook currentTab={this.state.current_tab}/>
          <Mega currentTab={this.state.current_tab}/>
          <Snapchat currentTab={this.state.current_tab}/>
        </div>
        
      </div>
    );
  }


  GetTabs(){
    return APP_TABS.map((tab, index) => (<div key={"tab_"+index} className="tab-item" onClick={() => this.ChangeTab(tab)}>{tab}</div>))
  }
  
  ChangeTab(val){
    this.setState((state) => {
      // Important: read `state` instead of `this.state` when updating.
      return {current_tab: val}
    })
  }

}

export default App;
