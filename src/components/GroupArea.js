import React from 'react'

export default class GroupArea extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const style ={
      height: '25%'
    }

    return(
      <div style={style}>
       <p>Groups </p>
      </div>
    );
  }
}
