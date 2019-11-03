import React from 'react';
import subjects from '../Db/Subjects';
import Infoquiz from './Infoquiz';
import QuizItem from './QuizItem';

class Quiz extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      start_status: false
    }
  }
  start=()=>{
    this.setState({
          start_status: true
      });
    localStorage.setItem('start_status',JSON.stringify(true));
    localStorage.setItem('min',JSON.stringify(9));
    localStorage.setItem('second',JSON.stringify(59));
  }

  componentDidMount(){
    if (localStorage && localStorage.getItem('start_status')){
      let start_status = JSON.parse(localStorage.getItem('start_status'));
      this.setState({start_status: start_status});
    }
  }

  render(){
    let id= this.props.match.params.id;
    let subject = subjects.find((subject,index)=>subject.Id === id);
    let element = this.state.start_status === false ? <Infoquiz subject= {subject} start={this.start} /> : <QuizItem id={id} />
    return(
       <div>
        {element}
       </div>
      );
  }
}

export default Quiz;
