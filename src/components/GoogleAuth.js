import React from 'react'
import { connect } from 'react-redux'
import { sign_in, sign_out, get_wishlist, clear_wishlist } from '../actions'

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
      this.props.get_wishlist()
    } else {
      this.props.sign_out()
      this.props.clear_wishlist()
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
        <div className="loginGroup">
          <p className="m-none ">Yo, {this.props.userName}</p>
          <button className="loginBtn active" onClick={this.onClickSignOut}>
            <i className="fab fa-google google m-none"></i>
            <span className="m-none">Sign out</span>
            <i className="fab fa-google mobile"></i>
          </button>
        </div>
      )
    } else {
      return (
        <button className="loginBtn" onClick={this.onClickSignIn}>
          <i className="fab fa-google google m-none"></i>
          <span className="m-none">Sign in</span>
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
    userId: state.auth.userId,
    userName: state.auth.userName,
  }
}

export default connect(mapStateToProps, { sign_in, sign_out, get_wishlist, clear_wishlist })(GoogleAuth)
