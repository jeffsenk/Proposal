import React from 'react';

export default class NewProposalView extends React.Component{
  constructor(props){
    super(props)
    this.handleCancel=this.handleCancel.bind(this);
    this.state={
      name:"",
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
    var newProposalKey = this.props.database.ref('Proposals/').push({
      Name:this.state.name,
      GroupName:this.props.group.val().Name,
      Group:this.props.group.key,
      Submitter:this.props.user.uid,
      SubmitterName:this.props.user.displayName,
      VotesPro:0,
      VotesCon:0,
      Description:this.state.description
    }).key;
    this.props.database.ref('Groups/' + this.props.group.key + '/Proposals/'+newProposalKey).set(true);
    this.props.resetAfter();
  }

  render(){
    return(
      <div>
        <div>  New Proposal </div>
        <div>  Name </div>
          <input type ="text" name="name" value={this.state.name} onChange={this.handleChange}/>
        <div>  Group </div>
        <div> {this.props.group.val().Name}</div>
        <div>  Description </div>
          <input type ="text" name="description" value={this.state.description} onChange={this.handleChange}/>
        <div onClick={this.handleCancel}>Cancel</div>
        <div onClick={this.handleSubmit}>Create</div>
      </div>
    );
  }

}
