import React, { Component } from 'react';
import axios from 'axios';



class Login extends Component {
  state = { 
    username : '',
    password : ''
   }

  handleChange = (event) =>  {
    this.setState({ [event.target.name] : event.target.value })
  }

  handleSubmit = (event) => {
    axios.post('http://localhost:2345/auth/login', 
    {
      username: this.state.username,
      password: this.state.password
    }
    ).then((res) => {
            console.log(res)
            localStorage.setItem('x-auth-token', res.data.token)
        }).catch((err)=> {
            console.error(err); 
        })
  }

  render () {
    return (
      <div>
        <input placeholder="username" name="username" onChange={this.handleChange}/> <br />
        <input placeholder="password" name="password" onChange={this.handleChange}/> <br />
        <button onClick={this.handleSubmit}>Connect</button>
      </div>
    );
  }
};
export default Login;
