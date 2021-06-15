import React from 'react'
import { connect } from 'react-redux'
import { sign_in, sign_out } from '../actions'

const clientId = '43293634793-92v5ckae79p5230in622kq8ckm1cj2ep.apps.googleusercontent.com'

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId: clientId,
          scope: 'email',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance()
          this.onAuthChange(this.auth.isSignedIn.get())
          this.auth.isSignedIn.listen(this.onAuthChange)
        })
    })
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      const id = this.auth.currentUser.get().getId()
      const name = this.auth.currentUser.get().getBasicProfile().getName()
      this.props.sign_in(id, name)
    } else {
      this.props.sign_out()
    }
  }

  onClickSignIn = () => {
    this.auth.signIn()
  }

  onClickSignOut = () => {
    this.auth.signOut()
  }

  renderAuthButton = () => {
    if (this.props.isSignedIn) {
      return (
        <button className="loginBtn" onClick={this.onClickSignOut}>
          <i className="fab fa-google m-none"></i>
          <span className="m-none">Sign out</span>
          <i className="fab fa-google mobile"></i>
        </button>
      )
    } else {
      return (
        <button className="loginBtn" onClick={this.onClickSignIn}>
          <i className="fab fa-google m-none"></i>
          <span className="m-none">SignIn with Google</span>
          <i className="fab fa-google mobile"></i>
        </button>
      )
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  }
}

export default connect(mapStateToProps, { sign_in, sign_out })(GoogleAuth)
