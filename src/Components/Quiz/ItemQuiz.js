import React from 'react';
import quizs from '../../Db/Quizs/quizs';
import Pagination from 'react-js-pagination';
import Itemofquiz from '../Itemofquiz';

class ItemQuiz extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      activePage: 1,
      second: 0,
      min: 10,
      finish: false,
      result: [],
      picked: [],
      mark: 0
    }
  }
  handlePageChange(pageNumber) {
    this.setState({activePage: pageNumber});
    localStorage.setItem('activePage',JSON.stringify(pageNumber))
  }

  finish() {
      let {result,picked,mark} =this.state;
      for(let i=0;i <result.length;i++){
        if(result[i]===picked[i]){
          mark++;
        }
      }
      this.props.finish(mark);
  }

  checkfinish(){
    if(this.state.finish === false ){
       setInterval(
        function() {
          if(this.state.second !== 0){
            this.setState({second: this.state.second -1});
          }else {
            this.setState({second: 59});
            this.setState({min: this.state.min -1});
          }
        localStorage.setItem('min',JSON.parse(this.state.min));
        localStorage.setItem('second',JSON.parse(this.state.second));
        }
        .bind(this), 1000
      );

    } else{
      this.finish();
    }
  }

  pickanswer(anId,quesId){
    let picked = this.state.picked;
    picked[quesId] = anId;
    this.setState({
      picked
    });
  }


  componentDidMount () {
    this.checkfinish();
    if( localStorage && localStorage.getItem('min') && localStorage.getItem('second')){
      this.setState({
        min: localStorage.getItem('min'),
        second: localStorage.getItem('second')
      });
    }

    if(localStorage && localStorage.getItem('activePage')){
        this.setState({
          activePage: JSON.parse(localStorage.getItem('activePage'))
        });
    }

    let id= this.props.id;
    let quiz = quizs.find((quiz,index)=>quiz.id === id);
    let questions= quiz.Cauhoi;
    let {result,picked} = this.state
    questions.forEach((question,index)=>{
       result.push(question.AnswerId);
       picked.push(0);
    });
    this.setState({result: result});
  }


  render(){
    let id= this.props.id;
    let quiz = quizs.find((quiz,index)=>quiz.id === id);
    let questions= quiz.Cauhoi;
    let element = questions.map((question,index)=>{
      if(index === this.state.activePage-1){
      return(
        <Itemofquiz question={question}
         index={index}
         key={index}
         pickanswer={(anId,quesId)=>this.pickanswer(anId,quesId)} />
        );
      } else {
        return ""
      }
    });

    return(
        <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 box-quiz-item">
            {element}
            <div className="box-time">
              {this.state.min} :
              {this.state.second}
            </div>
            <div className="box-finish">
              <button type="button" className="btn btn-primary" onClick={()=>this.finish()}>Kết thúc bài thi</button>
            </div>

             <div id="pagination" className="quiz-pagination">
                <Pagination
                  activePage={this.state.activePage}
                  prevPageText='prev'
                  nextPageText='next'
                  firstPageText='first'
                  lastPageText='last'
                  pageRangeDisplayed={10}
                  itemsCountPerPage={1}
                  totalItemsCount={quiz.Cauhoi.length}
                  onChange={(number)=>this.handlePageChange(number)}
                />
            </div>
        </div>
      );
  }
}

export default ItemQuiz;
