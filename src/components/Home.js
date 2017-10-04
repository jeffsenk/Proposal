import React from 'react';

export default class Home extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const style={
      cursor:'pointer',
      height:'5%'
    }

    return(
      <div style={style} onClick={this.props.reset}>
        <p>Home</p>
      </div>
    );
  }
}
