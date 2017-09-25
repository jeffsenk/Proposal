import React from 'react';
import ProfileArea from './ProfileArea'

export default class SideBar extends React.Component{
 
 constructor(props){
    super(props);
  }

  render(){

    const style ={
      width: '15%',
      height: '100%',
      borderRight: 'solid'
    }

    return(
      <div style={style}>
        <ProfileArea firebase={this.props.firebase} user={this.props.user}/>
      </div>
    );
  }
}
