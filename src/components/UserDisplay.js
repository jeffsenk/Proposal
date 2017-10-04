import React from 'react';
import SideBar from './SideBar'
import MainBox from './MainBox'
const defaultGroupKey = '-KvaJHpNYjfychFjeKXX'

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
    let database = this.props.firebase.database();
    let groupRef = database.ref('Groups/'+defaultGroupKey);
    groupRef.on('value',function(snapShot){
      let newState={
        newGroup:false,
        newProposal:false,
        selectedGroup:snapShot,
        selectedProposal:{}
      }
      this.setState(newState);
    }.bind(this));
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
    this.resetAfter();
  }

  render(){
    if(this.state.selectedGroup.key){
      return(
        <div>
          <SideBar firebase={this.props.firebase} user={this.props.user} selectGroup={this.selectGroup} createGroup={this.createGroup}
           createProposal={this.createProposal} reset={this.resetAfter}/>
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
