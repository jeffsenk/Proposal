import React from 'react';

export default class NewGroupView extends React.Component{
  constructor(props){
    super(props)
    this.handleCancel=this.handleCancel.bind(this);
    this.state={
      name:"",
      parentGroup:""
    }
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleChange(event){
    const label = event.target.name;
    const value = event.target.value;
    this.setState({
      [label]:value
    });
  }

  handleCancel(){
    this.props.resetAfter();
  }

  handleSubmit(){
    console.log(this.state.name,this.state.parentGroup);
    this.props.database.ref('Groups/').push({
      Name:this.state.name,
      Parent:this.state.parentGroup
    });
  }

  render(){
    return(
      <div>
        <div>  New Group </div>
        <div>  Name </div>
          <input type ="text" name="name" value={this.state.name} onChange={this.handleChange}/>
        <div>  Parent Group </div>
          <input type ="text" name="parentGroup" value={this.state.parentGroup} onChange={this.handleChange}/>
        <div onClick={this.handleCancel}>Cancel</div>
        <div onClick={this.handleSubmit}>Create</div>
      </div>
    );
  }

}
