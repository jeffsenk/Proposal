import React from 'react';
import ProposalOverview from './ProposalOverview'
import VoteArea from './VoteArea'

export default class ProposalView extends React.Component{
  constructor(props){
    super(props);
    this.upVote=this.upVote.bind(this);
    this.downVote=this.downVote.bind(this);
  }

  upVote(){
    var proVoteRef = this.props.database.ref('Proposals/'+this.props.proposal.key+'/VotesPro');
    proVoteRef.transaction(function(currentValue){
      return(currentValue || 0)+1;
    });    
  }

  downVote(){
    var conVoteRef = this.props.database.ref('Proposals/'+this.props.proposal.key+'/VotesCon');
    conVoteRef.transaction(function(currentValue){
      return(currentValue || 0)+1;
    });
  }

  render(){

    const style={
      marginTop:'1%',
      marginLeft:'1%',
      borderRadius:'10px',
      height: '90%',
      width: '80%',
      borderStyle: 'solid'
    }

    const upper={
      position:'relative',
      marginLeft:'1%',
      height:'49%',
    }

    const lower={
      height:'49%',
    }

    const pro={
      color:'dodgerBlue',
      borderRadius:'10px',
      marginLeft:'1%',
      borderStyle: 'solid',
      height:'100%',
      width:'48%',
      display:'inline-block'
    }

    const con={
      color:'salmon',
      borderRadius:'10px',
      marginLeft:'1%',
      width: '48%',
      borderStyle: 'solid',
      height: '100%',
      display:'inline-block'
    }

    return(
      <div style={style}>
        <ProposalOverview style={upper} proposal={this.props.proposal}/>
        <div style={lower}>
          <VoteArea newVote={this.upVote} style={pro} Side='Pro' Votes={this.props.proposal.val().VotesPro}/>
          <VoteArea newVote={this.downVote} style={con} Side='Con' Votes={this.props.proposal.val().VotesCon}/>
        </div>
      </div>
    );
  }

}
