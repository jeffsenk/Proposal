import React from 'react';

export default class ProfileArea extends React.Component{
  constructor(props){
    super(props);
    this.signOut = this.signOut.bind(this);
  }

  signOut(){
    this.props.firebase.auth().signOut();
  }

  render(){
    const style={
      height:'25%'
    }

    return(
      <div style={style}>
        <p>{this.props.user.email}</p>
        <button id="signOut" name="signOut" onClick={this.signOut}>Sign Out</button>
      </div>
    );
  }
}
