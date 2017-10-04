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
      cursor: 'pointer',
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

    var total = this.props.proposal.val().VotesPro + this.props.proposal.val().VotesCon;
    var pro =0;
    var con =0;
    if(total>0){
     var pro= ((this.props.proposal.val().VotesPro/total)*100).toFixed(0);
     var con= ((this.props.proposal.val().VotesCon/total)*100).toFixed(0);
    }
    const proPer = pro;
    const conPer = con;

    return(
      <div style={outer} onClick={this.handleClick}>
        <div style={group}>
         {this.props.proposal.val().GroupName}
        </div>
        <div style={name}>
          {this.props.proposal.val().Name}
        </div>
        <div style={votes}>
          <div style={upVote}>
            Pro {proPer} %
          </div>
          <div style={downVote}>
            Con {conPer} %
          </div>
        </div>
      </div>
    );
  }
}
