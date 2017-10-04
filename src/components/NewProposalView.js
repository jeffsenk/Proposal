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
    const cancel={
      borderStyle:'solid',
      borderRadius:'10px',
      padding:'10px',
      display:'inline-block',
      cursor:'pointer'
    }

    const submit={
      float:'right',
      marginRight:'2%',
      borderStyle:'solid',
      borderRadius:'10px',
      padding:'10px',
      display:'inline-block',
      cursor:'pointer'
    }

    const style={
      paddingLeft:'2%',
      paddingBottom:'1%',
      marginTop:'1%',
      marginLeft:'1%',
      fontSize:'x-large',
      borderRadius:'10px',
      height: '90%',
      width: '80%',
      borderStyle: 'solid'

    }

    const title={
      fontSize:'xx-large',
      marginBottom:'5%'
    }

    const name={
      marginBottom:'5%'
    }

    const group={
      marginBottom:'5%'
    }
    const description={
      marginBottom:'5%'
    }

    const nameBox={
      width:'80%',
      fontSize:'x-large'
    }

    const descripBox={
      width:'90%',
      height:'20%',
    }

    return(
      <div style={style}>
        <div style={title}>  New Proposal </div>
        <div style={name}>
          <div> Name </div>
          <input style={nameBox} type ="text" name="name" value={this.state.name} onChange={this.handleChange}/>
        </div>
        <div style={group}> 
          <div> Group </div>
          <div> {this.props.group.val().Name}</div>
        </div>
        <div style={description}> 
          <div> Description </div>
          <textarea style={descripBox} type ="text" name="description" value={this.state.description} onChange={this.handleChange}/>
        </div>
        <div style={cancel} onClick={this.handleCancel}>Cancel</div>
        <div style={submit} onClick={this.handleSubmit}>Create</div>
      </div>
    );
  }

}
