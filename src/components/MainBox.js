import React from 'react';
import ProposalBox from './ProposalBox'

export default class MainBox extends React.Component {

  constructor(props){
    super(props);
  }

  componentWillMount(){
  }

  componentDidMount(){
  }

  render(){

    const style = {
      height: '100%',
      overflow: 'scroll',
      verticalAlign: 'top'
    }

    return (
      <div style={style}>
        <ProposalBox/>
        <ProposalBox/>
        <ProposalBox/>
        <ProposalBox/>
        <ProposalBox/>
        <ProposalBox/>
        <ProposalBox/>
        <ProposalBox/>
        <ProposalBox/>
        <ProposalBox/>
      </div>
    );
  }
}
