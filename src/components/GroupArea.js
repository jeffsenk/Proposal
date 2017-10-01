import React from 'react'
import GroupList from './GroupList'
import NewGroupItem from './NewGroupItem'

export default class GroupArea extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const style ={
      height: '25%'
    }

    const title={
      fontSize:'large'
    }

    return(
      <div style={style}>
       <p style={title}>Groups </p>
       <NewGroupItem createGroup={this.props.createGroup}/>
       <GroupList user={this.props.user} database={this.props.database} selectGroup={this.props.selectGroup}/>
      </div>
    );
  }
}
