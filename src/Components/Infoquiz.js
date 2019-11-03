import React from 'react';
import quizs from '../Db/Quizs/quizs';

class InfoQuiz extends React.Component {

  render(){
    let {subject, start} = this.props;
    let quiz = quizs.find((quiz,index)=>quiz.id === subject.Id);
    return(
        <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
          <div className="box-item quiz-logo">
              <div className = "row">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                  <img src={`../img/logos/${subject.Logo}`} alt="logo" />
                </div>
                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                  <h4> Thông tin </h4>
                  <br />
                  {subject.Id} <br />
                  {subject.Name} <br />
                  Số câu hỏi : {quiz.Cauhoi.length} <br />
                  Thời gian : 15 phút <br />
                  <br/ >
                  <br/ >
                  <button type="button" className="btn btn-primary"
                   onClick={start}>Làm quiz </button>
                </div>
              </div>
            </div>

        </div>
      );
  }
}

export default InfoQuiz
