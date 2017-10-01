import React from 'react'
import NewProposalItem from './NewProposalItem'

export default class ProposalArea extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
       <p>Proposals </p>
       <NewProposalItem createProposal={this.props.createProposal}/>
      </div>
    );
  }
}
