import React from 'react'

export default class ProposalOverview extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div style={this.props.style}>
        {this.props.proposal.val().Name}
      </div>
    );
  }

}
