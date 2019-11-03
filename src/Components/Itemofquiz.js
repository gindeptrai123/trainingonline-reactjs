import React from 'react';
import Answers from './Answers';

class Itemofquiz extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      indexpick: -1
    }
  }
  pick(index){
    this.setState({ indexpick: index});
  }
  pickanswer(anId,quesId){
    this.props.pickanswer(anId,quesId);
  }
  render(){
    let {question, index} = this.props;
    let ans = question.Answers;
    let element = ans.map((an,i)=>{
      return(
          <Answers an={an} key={i} index = {i}
          quesId={index}
          indexpick ={this.state.indexpick}
          pickanswer={(anId,quesId) =>this.pickanswer(anId,quesId)}
          pick={(i)=>this.pick(i)} />
        );
    });
    return(
        <div >
              Câu hỏi {index +1}: {question.Text} <br/>
              {element}
        </div>
      );
    }
  }
export default Itemofquiz;
