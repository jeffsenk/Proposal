import React from 'react';

export default class MainBox extends React.Component {

  constructor(props){
    super(props);
  }

  componentWillMount(){
  }

  componentDidMount(){
  }

  render(){
    if(this.props.user.email){
      return(
        <div>
         <p>{this.props.user.email}</p>
        </div>
      );
    }else{   
    //default display 
      return (
        <div>
          <p>Hello World</p>
        </div>
      );
    }
  }
}
