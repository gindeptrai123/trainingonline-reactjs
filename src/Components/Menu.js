import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import Loggedin from './Register/Loggedin';
import NotLoggedin from './Register/NotLoggedin';

class Menu extends React.Component  {
  constructor(props){
    super(props);
    this.state = {
      login: this.props.login

    }
  }
  static getDerivedStateFromProps(props, state) {
    return{
      login: props.login
    }
  }
  logout(){
    this.props.logout();
  }
  render(){
    let {login} =this.state;
    let element = login ? <Loggedin logout={()=>this.logout()} /> : <NotLoggedin />
    return (
      <div>
        <nav className="navbar navbar-default" role="navigation">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <Link to="#" className="navbar-brand">Online Training</Link>
              </div>


              <div className="collapse navbar-collapse navbar-ex1-collapse">
                <div>
                  <ul className="nav navbar-nav">
                    <li><NavLink to="/">Trang chủ</NavLink></li>
                    <li><NavLink to="/gioi-thieu">Giới thiệu </NavLink></li>
                    <li><NavLink exact to="/lien-he">Liên hệ </NavLink></li>
                    <li><NavLink to="/gop-y">Góp ý </NavLink></li>
                  </ul>
                  <form className="navbar-form navbar-left" role="search">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Tìm kiếm đề test" />
                    </div>

                  </form>
                  <ul className="nav navbar-nav navbar-right">
                      {element}
                  </ul>
                </div>
              </div>
            </div>
        </nav>
      </div>
    );
  }
}

export default Menu;
