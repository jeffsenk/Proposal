import React from 'react';

export default class NewProposalView extends React.Component{
  constructor(props){
    super(props)
    this.handleCancel=this.handleCancel.bind(this);
    this.state={
      name:"",
      group:"",
      description:""
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
    console.log(this.state.name,this.state.group);
    this.props.database.ref('Proposals/').push({
      Name:this.state.name,
      GroupName:this.state.group,
      Submitter:this.props.user.uid,
      VotesPro:0,
      VotesCon:0,
      Description:this.state.description
    });
  }

  render(){
    return(
      <div>
        <div>  New Proposal </div>
        <div>  Name </div>
          <input type ="text" name="name" value={this.state.name} onChange={this.handleChange}/>
        <div>  Group </div>
          <input type ="text" name="group" value={this.state.group} onChange={this.handleChange}/>
        <div>  Description </div>
          <input type ="text" name="description" value={this.state.description} onChange={this.handleChange}/>
        <div onClick={this.handleCancel}>Cancel</div>
        <div onClick={this.handleSubmit}>Create</div>
      </div>
    );
  }

}
