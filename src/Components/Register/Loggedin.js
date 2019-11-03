import React from 'react';
import {Link} from 'react-router-dom';


class Loggedin extends React.Component {
  logout(){
    localStorage.removeItem('status_login');
    this.props.logout();
  }
  render(){
    return (
      <li className="dropdown">
          <Link to="#" className="dropdown-toggle" data-toggle="dropdown">Tài khoản<b className="caret"></b></Link>
          <ul className="dropdown-menu">
            <li><Link to="#"> Quản lý tài khoản </Link></li>
            <li><Link to="#">Hồ sơ cá nhân </Link></li>
            <hr/>
            <li><Link to="#" onClick={()=>this.logout()}>Đăng xuất</Link></li>
          </ul>
      </li>
    );
  }
}

export default Loggedin;
