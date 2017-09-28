import React from 'react';

export default class ProposalView extends React.Component{
  constructor(props){
    super(props);
  }

  render(){

    const style={
      marginTop:'1%',
      marginLeft:'1%',
      borderRadius:'10px',
      height: '80%',
      width: '80%',
      borderStyle: 'solid'
    }

    return(
      <div style={style}>
        {this.props.proposal.val().Name}
      </div>
    );
  }

}
