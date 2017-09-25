import React from 'react';
import SideBar from './SideBar'
import MainBox from './MainBox'

export default class UserDisplay extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <SideBar firebase={this.props.firebase} user={this.props.user}/>
        <MainBox firebase={this.props.firebase} user={this.props.user} />
      </div>
    );
  }  

};
