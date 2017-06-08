import React from 'react';
import { Input, Container } from 'semantic-ui-react'

export default class SignUpForm extends React.Component {
  constructor(){
    super()
    this.state = {
      username: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(prop, value){
    this.setState({
      [prop]: value
    })
  }

  handleSubmit(){
    this.props.onSignUp({ account: { username: this.state.username, password: this.state.password}})
  }

  render(){
    return(
      <Container text>
        <label>Create a username: </label>
        <Input icon="add user" value={this.state.username} onChange={ e => this.handleChange('username', e.target.value)} placeholder="Username"/><br/>
        <label>Password: </label>
        <Input type="password" placeholder="Password" value={this.state.password} onChange={ e => this.handleChange('password', e.target.value)} />
        <input onClick={this.handleSubmit} type="submit" content="Sign Up"></input>
      </Container>
    )
  }
}
