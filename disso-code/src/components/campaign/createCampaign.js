import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createCampaign } from '../../store/actions/campaignActions'
import { Redirect } from 'react-router-dom'

class CreateCampaign extends Component {
  state = {
    title: '',
    hashtag: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createCampaign(this.state);
    this.props.history.push('/');
  }
  render() {
    const { auth } = this.props;
    // if(!auth.uid) return <Redirect to='/signin'/>
    return (
      <div className="content">
        <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create a New Project</h5>
          <div className="input-field">
            <input type="text" id='title' onChange={this.handleChange} />
            <label htmlFor="title">Project Title</label>
          </div>
          <div className="input-field">
            <textarea id="hashtag" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="hashtag">Project Hashtag</label>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Create</button>
          </div>
        </form>
      </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createCampaign: (campaign) => dispatch(createCampaign(campaign))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCampaign)