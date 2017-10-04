import React from 'react'

export default class VoteArea extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    const side={
      fontSize: 'large',
      display: 'inline-block',
      marginLeft:'1%'
    }

    const votes={
      fontSize: 'large',
      marginLeft:'1%',
      display: 'inline-block'
    }

    const button={
      height:'10%',
      width:'10%',
      borderRadius:'5px',
      fontSize: 'large',
      border:'solid',
      display: 'inline-block',
      marginRight:'1%',
      float: 'right'
    }

    return(
      <div style={this.props.style}>
        <div style={side}>
          {this.props.Side}
        </div>
        <div style={votes}>
         {this.props.Votes}
        </div>
        <div onClick={this.props.newVote} style={button}>
          Vote
        </div>
      </div>
    );
  }

}
