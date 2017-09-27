import React from 'react';
import ProposalBox from './ProposalBox'

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
        let newState = this.state.proposals;
        newState.push(res);
        this.setState({proposals:newState});
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

    if(this.state.proposals.length > 0){
      let proposalArray =[]
      this.state.proposals.forEach(function(proposal){
        proposalArray.push(<li key={proposal.key}>{proposal.val().Name}</li>);
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
