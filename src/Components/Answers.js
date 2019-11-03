import React from 'react';

class Answers extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pick: false
    }
  }
  pick(anId,index,quesId){
    this.props.pick(index);
    this.props.pickanswer(anId,quesId);
  }
  changepick(index){
    if(index === this.props.index){
      this.setState({pick: true});
    } else {
      this.setState({pick: false});
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.indexpick === props.index) {
      return {
        pick: true
      };
    }else{
       return {
        pick: false
      };
    }
  }

  render(){
    let {an,index,quesId}= this.props;
    let alphabet;
    switch(index){
      case 0:
        alphabet = "A";
        break;
      case 1:
        alphabet = "B";
        break;
      case 2:
        alphabet = "C";
        break;
      case 3:
        alphabet = "D";
        break;
      case 4:
        alphabet = "E";
        break;
      case 5:
        alphabet = "F";
        break;
      default:
        break;
    }
    let element= this.state.pick === true ? "picked" : "";
    return(
        <div>
            <button className={`box-answer ${element}`} onClick={()=>this.pick(an.Id,index,quesId)}> <p>{alphabet}. {an.Text} </p></button>
        </div>
      );
    }
  }


export default Answers;
