import React from 'react';
import ProposalBox from './ProposalBox'
import ProposalView from './ProposalView'
import NewGroupView from './NewGroupView'
import NewProposalView from './NewProposalView'

export default class MainBox extends React.Component {

  constructor(props){
    super(props);
    this.state={
      proposals:[]
    }
    this.fetchProposals = this.fetchProposals.bind(this);
  }

  fetchProposals(){
    let database = this.props.firebase.database();
    for(var proposalKey in this.props.selectedGroup.val().Proposals){
      let proposalRef = database.ref('Proposals/'+proposalKey);
      proposalRef.on('value',function(res){
        let match=false;  
        for(var i=0;i<this.state.proposals.length;i++){
          if(this.state.proposals[i].key == res.key){
            let newState = this.state.proposals;
            newState[i] = res;
            this.setState({proposals:newState});
            match=true;
            break;
          }
        }
        if(!match){
          let newState = this.state.proposals;
          newState.push(res);
          this.setState({proposals:newState});
        }
      }.bind(this));
    }
  }

  componentDidMount(){
    this.fetchProposals();
  }

  componentWillReceiveProps(nextProps){
    this.setState({proposals:[]},this.fetchProposals.bind(this));
  }

  render(){

    const style = {
      height: '100%',
      overflow: 'scroll',
      verticalAlign: 'top'
    }
    if(this.props.newGroup){
     return(
        <NewGroupView user={this.props.user} database={this.props.firebase.database()} resetAfter={this.props.resetAfter}/>
      );
    }else if(this.props.newProposal){
      return(
        <NewProposalView group={this.props.selectedGroup} user={this.props.user} database={this.props.firebase.database()}
         resetAfter={this.props.resetAfter}/>
      );
    }else if(this.props.selectedProposal.key){
     return(
       <div style={style}>
         <ProposalView database={this.props.firebase.database()} proposal={this.props.selectedProposal}/>
       </div>
     ); 
    }else if(this.state.proposals.length > 0){
      let proposalArray =[]
      this.state.proposals.forEach(function(proposal){
        proposalArray.push(<li key={proposal.key}>
          <ProposalBox proposal={proposal} selectProposal={this.props.selectProposal}/>
        </li>);
      }.bind(this));

      return(
        <div style={style}>
          <ul>{proposalArray}</ul>
        </div>
      );
    }
    return (
      <div style={style}>
      </div>
    );
  }
}
