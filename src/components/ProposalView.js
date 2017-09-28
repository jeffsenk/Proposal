import React from 'react';

export default class ProposalView extends React.Component{
  constructor(props){
    super(props);
  }

  render(){

    const style={
      height:'80%',
      width:'80%',
      border: 'solid'
    }

    return(
      <div>
        {this.props.proposal.val().Name}
      </div>
    );
  }

}
