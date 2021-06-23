import React from 'react'
import { connect } from 'react-redux'
import { create_number } from '../../actions'

class TabRandom extends React.Component {
  state = { clicked: false }
  onBtnClick = () => {
    //FIXME:數字重複
    const num1 = Math.floor(Math.random() * 80)
    const num2 = Math.floor(Math.random() * 80)
    const num3 = Math.floor(Math.random() * 80)
    this.props.create_number([num1, num2, num3])
    this.props.loaderTimer()

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
