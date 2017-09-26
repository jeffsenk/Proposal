import React from 'react';
 
export default class GroupList extends React.Component{

  constructor(props){
    super(props);
    this.state={
      groups: []
    }
  }

  componentDidMount(){
    let database = this.props.database;
    let userGroupsRef = database.ref('Users/'+this.props.user.uid+'/groups');
    userGroupsRef.on('value',function(snapShot){
      snapShot.forEach(function(child){
        let groupRef = database.ref('Groups/'+child.key);
        groupRef.on('value',function(res){
          let newState = this.state.groups;
          newState.push(res.val().Name);
          this.setState({groups:newState});
        }.bind(this));
      }.bind(this));       
    }.bind(this));
  }

  render(){
    if(this.state.groups.length >0){
      let groupArray = [];
      this.state.groups.forEach(function(group){
        groupArray.push(<li key={group}>{group}</li>);
      });

      return(
        <div>
         <ul>{groupArray}</ul>
        </div>
      );
    }
    return(
      <div>
        <p> Loading... </p>
      </div>
    );
  }  

};
