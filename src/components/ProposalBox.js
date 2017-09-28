import React from 'react'

export default class ProposalBox extends React.Component{

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.selectProposal(this.props.proposal);
  }

  render(){
    const outer={
      borderRadius:'10px',
      borderStyle:'solid',
      marginTop:'1%',
      marginLeft:'1%',
      width:'40%',
      height:'20%'
    }

    const group={
      height:'30%'
    }

    const name={
      fontSize:'large',
      height:'30%'
    }

    const votes={
      height:'30%',
      float: 'right'
    }

    const upVote={
      display:'block',
      float:'left',
      marginRight:'5px',
    }

    const downVote={
      overflow:'hidden',
    }

    return(
      <div style={outer} onClick={this.handleClick}>
        <div style={group}>
         {this.props.proposal.val().Group}
        </div>
        <div style={name}>
          {this.props.proposal.val().Name}
        </div>
        <div style={votes}>
          <div style={upVote}>
            Yes {this.props.proposal.val().VotesFor}
          </div>
          <div style={downVote}>
            No  {this.props.proposal.val().VotesAgainst}
          </div>
        </div>
      </div>
    );
  }
}
