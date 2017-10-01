import React from 'react';

export default class NewGroupView extends React.Component{
  constructor(props){
    super(props)
    this.handleCancel=this.handleCancel.bind(this);
  }

  handleCancel(){
    this.props.resetAfter();
  }

  render(){
    return(
      <div>
        <div>
	  New Group
        </div>
        <div onClick={this.handleCancel}>
          Cancel
        </div>
      </div>
    );
  }

}
