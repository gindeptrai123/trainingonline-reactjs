import React from 'react';
import {NavLink} from 'react-router-dom';

class Result extends React.Component {
  constructor(props){
    super(props);
    this.state ={

    }
  }

  render(){

    return(
        <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 box-quiz-item">
        <h2> Kết quả: </h2>
          <p className="red">Bạn đc {this.props.mark} điểm </p><br /> <br /><br /> <br />
          <NavLink to="/">Quay lại trang chủ</NavLink>
        </div>
      );
  }
}

export default Result;
