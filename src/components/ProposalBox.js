import React from 'react'

export default class ProposalBox extends React.Component{

  constructor(props){
    super(props);
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
      <div style={outer}>
        <div style={group}>
         group
        </div>
        <div style={name}>
          Name
        </div>
        <div style={votes}>
          <div style={upVote}>
            Yes
          </div>
          <div style={downVote}>
            No
          </div>
        </div>
      </div>
    );
  }
}
