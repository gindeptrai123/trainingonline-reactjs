import React from 'react';
import {Link, Redirect} from 'react-router-dom';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state={
      username: "",
      password: "",
      login: "",
      status_login: -1
    }
  }
  onFormChange=(event)=>{
    var target = event.target;
    var name = target.name;
    var value =target.value;
    this.setState({
      [name] : value
    });
  }
  onFormSubmit = (event) =>{
    event.preventDefault();
    let {username,password} = this.state;
    this.props.login(username,password);
    this.resetForm();
  }
  resetForm(){
    this.setState({
      password: ""
    });
  }

  static getDerivedStateFromProps(props,state) {
   if(props.status === true ){
    return {
      login: true
    }
   }else{
    if (localStorage && localStorage.getItem('status_login')){
      return {
        login: JSON.parse(localStorage.getItem('status_login')),
        status_login : props.status_login
      }
      }else{
        return{
        login: false,
        status_login : props.status_login
        }
      }
   }
  }
  render(){
    let {status_login} =this.state;
    let {username, password, login} = this.state;
    if (login) {
       return <Redirect to= '/' />
    }
    let error;
    switch(status_login){
      case 0:
        error = "Sai tài khoản";
        break;
      case -1:
        error = "";
        break;
      case 2:
        error = "Sai mật khẩu";
        break;
      default:
        break;
    }
    return(
        <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
          <form className="form-login" onSubmit={this.onFormSubmit}>
              <legend>Đăng nhập </legend>
              <div className="form-group">
                <p className="red">{error} </p>
                <label>Tên tài khoản </label>
                <input type="text" className="form-control"
                 name="username"
                 value = {username}
                onChange={this.onFormChange} />
              </div>

              <div className="form-group">
                <label>Mật khẩu </label>
                <input type="password"
                 className="form-control"
                 value = {password}
                 name="password"
                 onChange={this.onFormChange} />
              </div>
              <button type="submit" className="btn btn-primary" >Đăng nhập </button>
              <br /> <br />
              Chưa có tài khoản? <Link to="/dang-ky">Đăng ký </Link>
            </form>
        </div>
      );
  }
}

export default Login;

