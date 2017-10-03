import React from 'react';
import GroupItem from './GroupItem'
import NewGroupItem from './NewGroupItem'
 
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
          var match = false;
          for(var i =0;i<this.state.groups.length;i++){
            if(this.state.groups[i].key == res.key){
              console.log(res.key);
              let newState = this.state.groups;
              newState[i] = res;
              this.setState({groups:newState});
              match = true;
              break;
            }
          }
          if(!match){
            let newState = this.state.groups;
            newState.push(res);
            this.setState({groups:newState});
          }
        }.bind(this));
      }.bind(this));       
    }.bind(this));
  }

  render(){

    if(this.state.groups.length >0){
      let groupArray = [];
      this.state.groups.forEach(function(group){
        groupArray.push(<li key={group.key}>
          <GroupItem group={group} selectGroup={this.props.selectGroup}/>
        </li>);
      }.bind(this));

      const list={
        listStyleType:'none',
        padding:'0px',
        marginTop:'1px',
        marginBottom:'3px'
      }

      return(
        <div>
         <ul style={list}>{groupArray}</ul>
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
