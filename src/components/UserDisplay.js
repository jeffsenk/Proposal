import React from 'react';
import SideBar from './SideBar'
import MainBox from './MainBox'

export default class UserDisplay extends React.Component{

  constructor(props){
    super(props);
    this.state={
      selectedGroup:{}
    }
    this.selectGroup = this.selectGroup.bind(this);
  }

  selectGroup(group){
    this.setState({selectedGroup:group});
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
          <MainBox firebase={this.props.firebase} user={this.props.user} selectedGroup={this.state.selectedGroup}/>
        </div>
      );
    }
    return(
      <div> </div>
    );
  }  

};
