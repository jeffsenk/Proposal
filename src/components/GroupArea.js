import React from 'react'
import GroupList from './GroupList'

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
       <GroupList user={this.props.user} database={this.props.database} selectGroup={this.props.selectGroup}/>
      </div>
    );
  }
}
