import React from 'react';
import firebase from '../fire'
import DefaultDisplay from './DefaultDisplay'
import UserDisplay from './UserDisplay'

export default class Index extends React.Component {

  constructor(props){
    super(props);
    this.state={
      user: {}
    }
  }

  componentWillMount(){
    let database = firebase.database();
    let groupRef = database.ref('Groups/Austin');
     groupRef.on('value',function(res){
       console.log(res.val().Style);
     });

    firebase.auth().onAuthStateChanged(function(currentUser) {
      if(currentUser){
        this.setState({
          user: currentUser
        });
        console.log(this.state.user.email);
      }else{
        this.setState({
          user: {}
        });
      }
    }.bind(this));
  }

  render(){
    if(this.state.user.email){
      return(
        <div>
          <UserDisplay firebase={firebase} user={this.state.user}/>
        </div>
      );
    }
    return (
      <div>
        <DefaultDisplay firebase={firebase}/>
      </div>
    );
  }
}
