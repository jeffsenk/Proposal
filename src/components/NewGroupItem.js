import React from 'react';

export default class NewGroupItem extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.createGroup();
  }

  render(){
    const style={
      marginBottom:'3px'
    }

    return(
      <div style={style} onClick={this.handleClick}>
        + New Group
      </div>
    );
  }
}
