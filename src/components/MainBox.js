import React from 'react';

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
      verticalAlign: 'top',
      display: 'inline-block'
    }

    return (
      <div style={style}>
        <p>Main Box</p>
      </div>
    );
  }
}
