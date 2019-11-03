import React from 'react';
import Boxitem from './Boxitem';
import subjects from '../Db/Subjects.json';
import Pagination from 'react-js-pagination';

const PAGEITEM  = 6;

class Boxtest extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      subjects : subjects,
      activePage: 1
    }
}

  handlePageChange(pageNumber) {
    this.setState({activePage: pageNumber});
  }
  componentDidMount(){
    localStorage.setItem('start_status',JSON.stringify(false));
    localStorage.setItem('activePage',JSON.stringify(1));

  }

  render(){
    let {activePage} = this.state;
    let elements= this.state.subjects.map((subject,index)=>{
      if (index < activePage*PAGEITEM  && index >= (activePage-1) * PAGEITEM ){
        return ( <Boxitem id={subject.Id} name={subject.Name} logo={subject.Logo} key={index}> </Boxitem>);

      }else {
        return ""
      }

    });
    return (
      <div className="col-xs-12 col-sm-9 col-md-9 col-lg-9">
        <div id="main-content" className="panel panel-default">
            <h4 className="text-center">Tất cả bài thi</h4>
            <hr />
            <div className="row">
              {elements}
            </div>

          <div id="pagination">
                <Pagination
                  activePage={this.state.activePage}
                  prevPageText='prev'
                  nextPageText='next'
                  firstPageText='first'
                  lastPageText='last'
                  pageRangeDisplayed={3}
                  itemsCountPerPage={6}
                  totalItemsCount={20}
                  onChange={(number)=>this.handlePageChange(number)}
                />
          </div>
        </div>
      </div>
    );
  }
}

export default Boxtest;
