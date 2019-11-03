import React from 'react';
import {Link,Redirect} from 'react-router-dom';

class Signup extends React.Component {
  constructor(props){
    super(props);
    this.state={
      login: "",
      username: "",
      fullname: "",
      password: "",
      password_confirm: "",
      error: ""
    }
  }

  static getDerivedStateFromProps(props,state) {
   if(props.status === true ){
    return {
      login: true
    }
   } else{
      if (localStorage && localStorage.getItem('status_login')){
      return {
        login: JSON.parse(localStorage.getItem('status_login'))
      }
      }else{
        return{
        login: false
        }
      }
  }
}

handleChange=(event)=>{
    var target = event.target;
    var name = target.name;
    var value =target.value;
    this.setState({
      [name] : value
    });
  }

onFormSubmit = (event) =>{
    event.preventDefault();
    let {students} = this.props;
    let {username,fullname,password,password_confirm} = this.state;
    let status = 0;
    students.map((student,index)=>{
      if(student.username === username){
        status = 1;
      }
      return status;
    });
    if(status === 1){
      this.setState({ error: "Tên tài khoản đã tồn tại"});
    }else if(password=== "" || username ==="" || fullname === "" || password_confirm === ""){
      this.setState({ error: "Các trường không được để trống"});
    }else if (password !== password_confirm){
      this.setState({ error: "Xác nhận mật khẩu không khớp "});
    }else {
      this.props.register(username,fullname,password);
      this.setState({ error: "Đăng ký thành công"});
    }
    this.resetForm();
  }
resetForm(){
    this.setState({
      password: "",
      password_confirm: ""
    });
  }
  render(){
     if(this.state.login) {
       return <Redirect to= '/' />
    }
    let {error} = this.state;
    return(
        <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
          <form onSubmit={this.onFormSubmit} className="form-login">
            <legend>Đăng ký </legend>
            <div className="red" >{error} </div>
            <div className="form-group">
              <label>Tên tài khoản </label>
              <input type="text" className="form-control" name="username" onChange={this.handleChange } value= {this.state.username} />
            </div>
            <div className="form-group">
              <label >Tên đầy đủ  </label>
              <input type="text" className="form-control" name="fullname" onChange={this.handleChange } value= {this.state.fullname} />
            </div>
            <div className="form-group">
              <label>Mật khẩu </label>
              <input type="password" className="form-control" name="password" onChange={this.handleChange } value= {this.state.password} />
            </div>
            <div className="form-group">
              <label>Xác nhận mật khẩu </label>
              <input type="password" className="form-control" name="password_confirm" onChange={this.handleChange } value= {this.state.password_confirm} />
            </div>
            <button type="submit" className="btn btn-primary">Đăng ký</button>
            <br /> <br />
            Đã có tài khoản? <Link to="/dang-nhap">Đăng nhập ngay </Link>
          </form>
        </div>
      );
  }
}

export default Signup;
