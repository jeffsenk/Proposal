import React from 'react';

export default class GroupItem extends React.Component{
  constructor(props){
    super(props);
    this.handleClick=this.handleClick.bind(this);
  }

  handleClick(){
    this.props.selectGroup(this.props.group);
  }

  render(){
    return(
      <div onClick={this.handleClick}>
        {this.props.group.val().Name}
      </div>
    );
  }

}
