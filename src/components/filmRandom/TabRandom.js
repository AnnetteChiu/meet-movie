import React from 'react'
import { connect } from 'react-redux'
import { create_number } from '../../actions'

class TabRandom extends React.Component {
  state = { clicked: false }
  onBtnClick = () => {
    let arr = []
    while (arr.length < 3) {
      let random = Math.floor(Math.random() * 80)
      if (arr.indexOf(random) === -1) {
        arr.push(random)
      }
    }
    this.props.create_number(arr)

    // loader
    this.props.loaderTimer()
    // tell to render try again
    this.setState({ clicked: true })
  }

  render() {
    return (
      <div className="tab-random tab-item">
        <p>
          Just Click <span className="tx-primary">I'm Ready!</span>
        </p>
        <div className="filmSearchBar">
          <button className="randomBtn" onClick={this.onBtnClick}>
            {this.state.clicked ? 'Try Again' : "I'm Ready"}
          </button>
        </div>
      </div>
    )
  }
}

export default connect(null, { create_number })(TabRandom)
