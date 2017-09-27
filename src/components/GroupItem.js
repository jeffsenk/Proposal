import React from 'react';

export default class GroupItem extends React.Component{
  constructor(props){
    super(props);
    this.state={
      highlight: 'initial'
    }
    this.handleClick=this.handleClick.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseExit = this.handleMouseExit.bind(this);
  }

  handleMouseEnter(){
    this.setState({highlight:'lightGrey'});
  }

  handleMouseExit(){
    this.setState({highlight:'initial'});
  }

  handleClick(){
    this.props.selectGroup(this.props.group);
  }

  render(){
    const style={
      backgroundColor: this.state.highlight
    }

    return(
      <div style={style} onClick={this.handleClick} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseExit}>
        {this.props.group.val().Name}
      </div>
    );
  }

}
