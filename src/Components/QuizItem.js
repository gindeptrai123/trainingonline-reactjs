import React from 'react';
import ItemQuiz from './Quiz/ItemQuiz';
import Result from './Quiz/Result';

class QuizItem extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      finish: false,
      mark: 0
    }
  }

  finish=(m)=> {
    this.setState({
      finish: true,
      mark  : m});
  }

  render(){
    let id= this.props.id;
    let element;
    if (this.state.finish === false  ){
      element = <ItemQuiz id={id} finish={(m)=>this.finish(m)} />
    }else{
      element = <Result mark={this.state.mark} />
    }
    return(
      <div>
        {element}
      </div>
    );
  }
}

export default QuizItem;
