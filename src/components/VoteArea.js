import React from 'react'

export default class VoteArea extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    const side={
      display: 'inline-block',
      marginLeft:'1%'
    }

    const votes={
      marginLeft:'1%',
      display: 'inline-block'
    }

    const button={
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
        <div style={button}>
          <button>Vote</button>
        </div>
      </div>
    );
  }

}
