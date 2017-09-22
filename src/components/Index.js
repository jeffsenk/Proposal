import React from 'react';
import fire from '../fire'
import LogInBox from './LogInBox'

export default class Index extends React.Component {

  componentWillMount(){
    let database = fire.database();
    let groupRef = database.ref('Groups/Austin');
     groupRef.on('value',function(res){
       console.log(res.val().Style);
     });
  }

  render(){
    return (
      <div>
        <p>Hello World</p>
        <LogInBox firebase={fire}/>
      </div>
    );
  }
}
