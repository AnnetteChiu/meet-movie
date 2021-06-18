import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { search_multi } from '../actions'
import history from '../history'

class SearchBar extends React.Component {
  renderInput({ input }) {
    return <input {...input} className="searchbar" placeholder="Search" autoComplete="off" />
  }

  onSubmit = (formValue) => {
    this.props.search_multi(formValue.search)
  }

  render() {
    return (
      <form className="p-relative" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="search" component={this.renderInput} type="text" />
        <i className="fas fa-search"></i>
      </form>
    )
  }
}

const connectComponent = connect(null, { search_multi })(SearchBar)
export default reduxForm({ form: 'search' })(connectComponent)
