import React from 'react'

export default class VoteArea extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    return(
      <div style={this.props.style}>
        {this.props.Side}
      </div>
    );
  }

}
