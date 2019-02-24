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
      // <div class="container">
      //   <Segment inverted>
      //   <Form inverted>
      //     <Form.Group widths='seven'>
      //       <Form.Input 
      //         placeholder='email' 
      //         name='email'
      //         type='email'
      //         value={email}
      //         onChange={this.handleChange}
      //         />
      //       <Form.Input 
      //         placeholder='password'
      //         type='password' 
      //         name='password'
      //         value={password}
      //         onChange={this.handleChange}
      //         />
      //       <Form.Button type="submit"
      //       onClick={this.handleSubmit}>
      //       Login</Form.Button>
      //     </Form.Group>
      //   </Form>
      //   </Segment>
      // </div>

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
      
      // <div className="container">
      //   <form className="white" onSubmit={this.handleSubmit}>
      //     <h5 className="grey-text text-darken-3">Sign In</h5>
      //     <div className="input-field">
      //       <label htmlFor="email">Email</label>
      //       <input type="email" id='email' onChange={this.handleChange} />
      //     </div>
      //     <div className="input-field">
      //       <label htmlFor="password">Password</label>
      //       <input type="password" id='password' onChange={this.handleChange} />
      //     </div>
      //     <div className="input-field">
      //       <div className="center red-text">
      //         { authError ? <p>{authError}</p> : null }
      //       </div>
      //     </div>
      //   </form>
      // </div>
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