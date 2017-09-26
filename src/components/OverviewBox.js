import React from 'react';
 
export default class OverviewBox extends React.Component{

  constructor(props){
    super(props);
    this.state={
      proposals: []
    }
  }

  componentDidMount(){
    let database = this.props.database;
    let defaultGroupRef = database.ref('Groups/9dj3k/Proposals');
    defaultGroupRef.on('value',function(snapShot){
      snapShot.forEach(function(child){
        let proposal = database.ref('Proposals/'+child.key);
        proposal.on('value',function(res){
          let newState = this.state.proposals;
          newState.push(res.val().Name);
          if(this.refs.OverviewBox){
            this.setState({proposals:newState});
          }
        }.bind(this));
      }.bind(this));       
    }.bind(this));
  }

  render(){
    if(this.state.proposals.length >0){
      let proposalArray = [];
      this.state.proposals.forEach(function(proposal){
        proposalArray.push(<li key={proposal}>{proposal}</li>);
      });

      return(
        <div ref="OverviewBox">
         <ul>{proposalArray}</ul>
        </div>
      );
    }
    return(
      <div ref="OverviewBox">
      </div>
    );
  }  

};
