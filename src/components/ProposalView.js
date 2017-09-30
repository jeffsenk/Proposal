import React from 'react';
import ProposalOverview from './ProposalOverview'
import VoteArea from './VoteArea'

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

    const upper={
      height:'49%',
      borderStyle: 'solid',
    }

    const lower={
      height:'49%',
      borderStyle: 'solid',
    }

    const pro={
      borderStyle: 'solid',
      height:'100%',
      width:'49%',
      display:'block',
      float: 'left'
    }

    const con={
      borderStyle: 'solid',
      height: '100%',
      width: '49%',
      overflow: 'hidden'      
    }

    return(
      <div style={style}>
        <ProposalOverview style={upper} proposal={this.props.proposal}/>
        <div style={lower}>
          <VoteArea style={pro} Side='Pro'/>
          <VoteArea style={con} Side='Con'/>
        </div>
      </div>
    );
  }

}
