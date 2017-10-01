import React from 'react';

export default class NewProposalView extends React.Component{
  constructor(props){
    super(props)
    this.handleCancel=this.handleCancel.bind(this);
  }

  handleCancel(){
    this.props.resetAfter();
  }

  render(){
    return(
      <div>
        <div>
	  New Proposal
        </div>
        <div onClick={this.handleCancel}>
          Cancel
        </div>
      </div>
    );
  }

}
