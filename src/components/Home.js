import React from 'react';

export default class Home extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const style={
      height:'5%'
    }

    return(
      <div style={style}>
        <p>Home</p>
      </div>
    );
  }
}
