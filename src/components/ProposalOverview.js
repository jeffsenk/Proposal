import React from 'react'

export default class ProposalOverview extends React.Component{
  constructor(props){
    super(props);
  }

  render(){

    const groupName={
      fontSize:'small'
    }

    const name={
      marginTop:'2%',
      fontSize:'xx-large'
    }

    const description={
      marginTop:'2%'
    }

    return(
      <div style={this.props.style}>
        <div style={groupName}>
          {this.props.proposal.val().GroupName}
        </div>
        <div style={name}>
          {this.props.proposal.val().Name}
        </div>
        <div style={description}>
          {this.props.proposal.val().Description}
        </div>
      </div>
    );
  }

}
