import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import netlifyIdentity from 'netlify-identity-widget';

import Nav from "./components/Nav"
import MainuserContent from "./components/MainuserContent"
import UserContent from "./components/UserContent"

class App extends Component {
  constructor () {
    super();
    this.state = {
      userName: "",
      userRole: ""
    }
  }


  componentDidMount() {
    netlifyIdentity.init();
  
  }
  handleIdentity = (e) => {
    e.preventDefault();
    netlifyIdentity.open();

  }

  //This generates headers but they are not used for anything yet
  generateHeaders() {
    const headers = { "Content-Type": "application/json" };
    if (netlifyIdentity.currentUser()) {
      return netlifyIdentity.currentUser().jwt().then((token) => {
        return { ...headers, Authorization: `Bearer ${token}` };
      })
    }
    return Promise.resolve(headers);
  } 



  render() {

    //This is not secure way to check user role
    netlifyIdentity.on("login", user => {
      let userName = user.user_metadata.full_name;
      let userRole = user.app_metadata.roles[0]
      this.setState({
        userName: userName,
        userRole: userRole
      })
      if (userRole === "mainuser") {
        console.log("You are mainuser")
      } else {
        console.log("You are not mainuser. You are " + this.state.userRole )
      }
    });

    let content;
    if(this.state.userRole === "mainuser") {
     content = <div><MainuserContent /><UserContent /></div>
    } else if(this.state.userRole === "user"){
       content = <UserContent />
    } else {
      content = "You don't have rights to access this content"
    }
    return (
      <div className="App">
        <Nav userName={this.state.userName} handleIdentity={this.handleIdentity} />
        <div className="container">
          
       
            <p>{content}</p>
          
        </div>
      </div>
    );
  }
}

export default App;
