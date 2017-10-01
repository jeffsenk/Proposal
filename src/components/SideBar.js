import React from 'react';
import GroupArea from './GroupArea'
import ProposalArea from './ProposalArea'
import ProfileArea from './ProfileArea'
import Home from './Home'

export default class SideBar extends React.Component{
 
 constructor(props){
    super(props);
  }

  render(){

    const style ={
      width: '15%',
      height: '100%',
      borderRight: 'solid',
      display: 'block',
      float: 'left'
    }

    return(
      <div style={style}>
        <Home />
        <ProfileArea firebase={this.props.firebase} user={this.props.user}/>
        <GroupArea user={this.props.user} database={this.props.firebase.database()} createGroup={this.props.createGroup} selectGroup={this.props.selectGroup} />
        <ProposalArea createProposal={this.props.createProposal} />
      </div>
    );
  }
}
