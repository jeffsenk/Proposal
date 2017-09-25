import React from 'react';
import ProfileArea from './ProfileArea'
import GroupArea from './GroupArea'
import ProposalArea from './ProposalArea'

export default class SideBar extends React.Component{
 
 constructor(props){
    super(props);
  }

  render(){

    const style ={
      width: '15%',
      height: '100%',
      borderRight: 'solid',
      display: 'inline-block'
    }

    return(
      <div style={style}>
        <ProfileArea firebase={this.props.firebase} user={this.props.user}/>
        <GroupArea />
        <ProposalArea />
      </div>
    );
  }
}
