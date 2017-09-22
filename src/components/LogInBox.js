import React from 'react';

export default class LogInBox extends React.Component {

  constructor(props){
    super(props);
    this.state = {email:"",password:""}
    this.toggleSignIn = this.toggleSignIn.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount(){
    this.props.firebase.auth().onAuthStateChanged(function(user) {
      if(user){
        console.log(user);
      }
    });
  }

  handleChange(event){
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]:value
    });
  }

  toggleSignIn(){
    if (this.props.firebase.auth().currentUser){
      this.props.firebase.auth().signOut();
    }else{
      var email = this.state.email;
      var password = this.state.password;
      this.props.firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
    }
  }

  render(){
    return (
      <div>
        <input type ="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email"/>
        <input type ="text" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password"/>
        <button id="quickstart-sign-in" name="signin" onClick={this.toggleSignIn}>Sign In</button>
      </div>
    );
  }
}
