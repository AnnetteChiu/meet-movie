import React from 'react'
import { Field, reduxForm } from 'redux-form'

class SearchBar extends React.Component {
  renderInput({ input }) {
    return <input {...input} className="searchbar" placeholder="Search" autoComplete="off" />
  }

  onSubmit = (formValue) => {
    // TODO: 傳回action FETCH_FILM
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

export default reduxForm({ form: 'search' })(SearchBar)
