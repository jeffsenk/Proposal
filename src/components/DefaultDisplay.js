import React from 'react';
import LogInBox from './LogInBox'
import OverviewBox from './OverviewBox'
 
export default class DefaultDisplay extends React.Component{

  constructor(props){
    super(props);
  }

  componentWillMount(){
  }

  render(){
    return(
      <div>
        <LogInBox auth={this.props.firebase.auth()}/>
        <OverviewBox database={this.props.firebase.database()}/>
      </div>
    );
  }  

};
