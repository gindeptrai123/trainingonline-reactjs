import React from 'react';
import Header from './Components/Header';
import Menu from './Components/Menu';
import Boxtest from './Components/Boxtest';
import Categories from './Components/Categories';
import Footer from './Components/Footer';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Feedback from './Components/Pages/Feedback';
import Quiz from './Components/Quiz';
import Login from './Components/Register/Login';
import Signup from './Components/Register/Signup';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//database
import Students from './Db/Students.json';

class App extends React.Component  {
  constructor(props){
    super(props);
    this.state = {
      status_login: -1,
      login: false,
      users: Students
    }
  }
  login = (username,password) =>{
    let {users} = this.state;
    let status = 0;
    users.map((user,index)=>{
      if(user.username === username){
        if(user.password === password){
          status = 1;
        } else {
          status =2
        }
      }
      return status;
    });
    switch(status){
      case 0:
        this.setState({
          status_login: 0
        });
        break;
      case 1:
        this.setState({
          login: true,
          status_login: 1
        });
        localStorage.setItem('status_login',JSON.stringify(true))
        break;
      case 2:
        this.setState({
          status_login: 2
        });
        break;
      default:
        break;
    }
  }
  register = (user,full,pass,passcf) =>{
    let {users}=this.state;
    let newaccount={
      username: user,
      fullname: full,
      password: pass
    }
    users.push(newaccount);
    this.setState({
      users
    });
    this.login(user,pass);
  }
  componentDidMount(){
    if(localStorage && localStorage.getItem('status_login')){
      this.setState({
        login: JSON.parse(localStorage.getItem('status_login'))
      })
    }
  }
  static getDerivedStateFromProps(props, state) {
    if(localStorage && localStorage.getItem('status_login')){
      return {
        login: JSON.parse(localStorage.getItem('status_login'))
      }
    } else {
      return {
        login: false
      }
    }
  }
  logout(){
    this.setState({
      login: false
    });
  }

  render(){
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header/>
            <Menu login={this.state.login} logout={()=>this.logout()} />
            <main>
              <div className="row">
                <Switch>
                  <Route path="/" exact component={Boxtest} />
                  <Route path="/lien-he" component={Contact} />
                  <Route path="/gioi-thieu" component={About} />
                  <Route path="/gop-y" component={Feedback} />
                  <Route path="/quiz/:id" component={Quiz} />
                  <Route path="/dang-nhap" render={(props) => (
                      <Login {...props}
                      login={(username,password)=>this.login(username,password)}
                      status = {this.state.login}
                      status_login={this.state.status_login} />
                    )} />
                  <Route path="/dang-ky" render={(props) => (
                      <Signup {...props}
                      register={(username,fullname,password)=>this.register(username,fullname,password)}
                      students = {this.state.users}
                       />
                    )}/>
                </Switch>
                <Categories/>
              </div>
            </main>
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
