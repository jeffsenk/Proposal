import React from 'react'

export default class VoteArea extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    const side={
      fontSize: 'x-large',
      display: 'inline-block',
      marginLeft:'1%'
    }

    const votes={
      fontSize: 'x-large',
      marginLeft:'1%',
      display: 'inline-block'
    }

    const button={
      textAlign: 'center',
      cursor:'pointer',
      height:'10%',
      width:'15%',
      borderRadius:'5px',
      fontSize: 'x-large',
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
          {this.props.buttonText}
        </div>
      </div>
    );
  }

}
