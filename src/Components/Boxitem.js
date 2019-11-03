import React from 'react';
import {Link} from 'react-router-dom';

class Boxitem extends React.Component {
  render(){
    return(
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
          <Link to={`/quiz/${this.props.id}`}>
            <div className="box-item">
              <img src={`./img/logos/${this.props.logo}`} alt="logo" />
              {this.props.id} <br />
              {this.props.name}
            </div>
          </Link >
        </div>
      );
  }
}

export default Boxitem;
