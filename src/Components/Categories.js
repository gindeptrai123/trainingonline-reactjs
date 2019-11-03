import React from 'react';

class Boxtest extends React.Component  {
   render() {
      return (
        <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
          <div id="categories" className="panel panel-default">
            <div className="panel-heading panel-heading-custom">
              Danh mục
            </div>
            <div className="panel-body panel-body-custom">
              <ul>
                <li> Reactjs </li>
                <li> Angular</li>
                <li> PHP</li>
                <li> Ruby On Rails</li>
                <li> HTML CSS </li>
              </ul>
            </div>
          </div>
        </div>
      );
   }
}

export default Boxtest;
