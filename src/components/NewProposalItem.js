import React from 'react';

export default class NewProposalItem extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.createProposal();
  }

  render(){
    const style={
      marginBottom:'3px'
    }

    return(
      <div style={style} onClick={this.handleClick}>
        + New Proposal
      </div>
    );
  }
}
