import React from 'react';
import SideBar from './SideBar'
import MainBox from './MainBox'

export default class UserDisplay extends React.Component{

  constructor(props){
    super(props);
    this.state={
      newGroup:false,
      newProposal:false,
      selectedGroup:{},
      selectedProposal:{}
    }
    this.selectGroup = this.selectGroup.bind(this);
    this.selectProposal = this.selectProposal.bind(this);
    this.createGroup = this.createGroup.bind(this);
    this.createProposal = this.createProposal.bind(this);
    this.resetAfter = this.resetAfter.bind(this);
  }

  createGroup(){
    let newState={
      newGroup: true,
      newProposal:false,
      selectedGroup: this.state.selectedGroup,
      selectedProposal: this.state.selectedProposal
    }
    this.setState(newState);
  }

  createProposal(){
    let newState={
      newGroup: false,
      newProposal: true,
      selectedGroup: this.state.selectedGroup,
      selectedProposal: this.state.selectedProposal
    }
    this.setState(newState);
  }

  resetAfter(){
    let newState={
      newGroup: false,
      newProposal: false,
      selectedGroup: this.state.selectedGroup,
      selectedProposal: this.state.selectedProposal
    }
    this.setState(newState);
  }

  selectGroup(group){
    this.setState({selectedGroup:group,
      selectedProposal:{}
    });
  }

  selectProposal(proposal){
    let newState={
      selectedGroup:this.state.selectedGroup,
      selectedProposal: proposal
    }
    this.setState(newState);
  }

  componentDidMount(){
    let database = this.props.firebase.database();
    let groupRef = database.ref('Groups/9dj3k');
    groupRef.on('value',function(snapShot){
      this.setState({selectedGroup:snapShot});
    }.bind(this));
  }

  render(){
    if(this.state.selectedGroup.key){
      return(
        <div>
          <SideBar firebase={this.props.firebase} user={this.props.user} selectGroup={this.selectGroup} createGroup={this.createGroup}
           createProposal={this.createProposal}/>
          <MainBox firebase={this.props.firebase} user={this.props.user} selectedGroup={this.state.selectedGroup}
           selectProposal={this.selectProposal} selectedProposal={this.state.selectedProposal} newGroup={this.state.newGroup}
           newProposal={this.state.newProposal} resetAfter={this.resetAfter}/>
        </div>
      );
    }
    return(
      <div> </div>
    );
  }  

};
