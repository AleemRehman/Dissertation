import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'
import { storage } from '../../config/fbConfig'
import { Label, Form, Grid, Divider, Image, Message, Segment, Progress } from 'semantic-ui-react'

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    image: null,
    photoURL: '',
    progress: 0
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  fileSelectedChange = (e) => {
    this.setState({
      image: e.target.files[0]
    })
  }

  fileUploadHandler = (e) => {
    const {image} = this.state;
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on('state_changed', 
      (snapshot) => {
        // progrss function ....
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        this.setState({progress});
      }, 
      (error) => {
        // error function ....
        console.log(error);
      }, 
      () => {
      // complete function ....
        storage.ref('images').child(image.name).getDownloadURL().then(photoURL => {
          console.log(photoURL);
          this.setState({photoURL});
      })
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  }

  render() {
    const { auth, authError } = this.props;
    const { email, password, firstName, lastName} = this.state;
    if (auth.uid) return <Redirect to='/dashboard' /> 
    return (
      <div className='login-form'>
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }`}</style>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Form size='large' inverted>
              <Segment inverted stacked>
                <span>
                  <Image 
                  src={this.state.photoURL || 'http://via.placeholder.com/600x600'} 
                  size='small' 
                  circular 
                  verticalAlign='middle' />
                  <br/>
                  <br/>
                  <br/>
                  <Label>
                    {firstName + ' ' + lastName}
                  </Label>                
                </span>
                <Divider/>
                <br/>
                {this.state.progress ?
                <Progress percent={this.state.progress} indicating /> : ''}
                <Form.Input 
                  type='file'
                  onChange={this.fileSelectedChange}
                />
                <Form.Button 
                  color='teal' 
                  size='small'
                  onClick={this.fileUploadHandler}>Upload
                </Form.Button>
                <br />
                <Form.Input 
                  fluid icon='user' 
                  iconPosition='left' 
                  placeholder='Email' 
                  name='email'
                  value={this.state.email}
                  onChange= {this.handleChange}
                />
                <Form.Input 
                  fluid icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password' 
                  name='password'
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <Form.Input 
                  fluid icon='user' 
                  iconPosition='left' 
                  placeholder='First Name' 
                  name='firstName'
                  type='text'
                  value={this.state.firstName}
                  onChange={this.handleChange} 
                />
                <Form.Input 
                  fluid icon='user' 
                  iconPosition='left' 
                  placeholder='Last Name' 
                  name='lastName'
                  type='text'
                  value={this.state.lastName}
                  onChange={this.handleChange} 
                />
                <Form.Button 
                  color='teal' 
                  fluid size='small'
                  onClick={this.handleSubmit}>Sign Up
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
              Already a User? <a href='/signin'>Sign In</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    signUp: (creds) => dispatch(signUp(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)