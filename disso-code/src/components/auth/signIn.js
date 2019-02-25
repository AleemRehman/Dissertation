import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state)
  }
  render() {
    const { authError, auth } = this.props;
    const { email, password} = this.state;
    if(auth.uid) return <Redirect to='/dashboard'/>
    return (
      <div className='login-form'>
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}</style>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Form size='large' inverted>
              <Segment inverted stacked>
                <Form.Input fluid icon='user' 
                iconPosition='left' 
                placeholder='email' 
                name='email'
                type='email'
                value={email}
                onChange={this.handleChange} 
                />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='password'
                  type='password' 
                  name='password'
                  value={password}
                  onChange={this.handleChange}
                />

                <Form.Button 
                color='teal' 
                fluid size='small'
                onClick={this.handleSubmit}>
                  Login
                </Form.Button>
              </Segment>
            </Form>
            { authError ? 
            <Message
              attached='bottom' warning>
              { this.props.authError ? <p>{this.props.authError}</p> : null }
            </Message> 
            : null }
            <Message>
              New User? <a href='/signup'>Sign Up</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}



const mapStateToProps = (state) => {
  return{
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)