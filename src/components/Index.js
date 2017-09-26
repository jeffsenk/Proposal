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
    firebase.auth().onAuthStateChanged(function(currentUser) {
      if(currentUser){
        this.setState({
          user: currentUser
        });
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
