import React from 'react';
import LogInBox from './LogInBox'
 
export default class DefaultDisplay extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <LogInBox firebase={this.props.firebase}/>
        <p> Default Display Here </p>
      </div>
    );
  }  

};
