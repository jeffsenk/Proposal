import React from 'react';
import SideBar from './SideBar'
import MainBox from './MainBox'

export default class UserDisplay extends React.Component{

  constructor(props){
    super(props);
    this.state={
      selectedGroup:{},
      selectedProposal:{}
    }
    this.selectGroup = this.selectGroup.bind(this);
    this.selectProposal = this.selectProposal.bind(this);
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
          <SideBar firebase={this.props.firebase} user={this.props.user} selectGroup={this.selectGroup}/>
          <MainBox firebase={this.props.firebase} user={this.props.user} selectedGroup={this.state.selectedGroup}
           selectProposal={this.selectProposal} selectedProposal={this.state.selectedProposal}/>
        </div>
      );
    }
    return(
      <div> </div>
    );
  }  

};
