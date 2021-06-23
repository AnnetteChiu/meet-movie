import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { search_movie_filter } from '../../actions'
import FilterGenres from '../data/FilterGenres'
import Languages from '../data/Languages'

const TabFilter = (props) => {
  const { handleSubmit, filterValue, search_movie_filter, loaderTimer } = props
  const renderOptions = (options) => {
    return options.map((option) => {
      return (
        <option value={option.id} key={option.id}>
          {option.name}
        </option>
      )
    })
  }

  const onSubmit = (filterValue) => {
    const language = filterValue.language
    const genre = filterValue.genre
    search_movie_filter(language, genre)
    loaderTimer()
  }

  return (
    <div className="tab-filter tab-item" onSubmit={handleSubmit(onSubmit)}>
      <p>
        Select Film Genre or Area, and Click <span className="tx-primary">I'm Ready!</span>
      </p>
      <form className="filmSearchBar">
        <Field name="genre" className="searchByGenre first-radius" component="select">
          <option value="all" key="all" defaultValue>
            All Genre
          </option>
          {renderOptions(FilterGenres)}
        </Field>

        <Field name="language" className="searchByGenre" component="select">
          <option value="all" key="all" defaultValue>
            All Languages
          </option>
          {renderOptions(Languages)}
        </Field>
        <button className="searchBtn" type="submit">
          I'm Ready!
        </button>
      </form>
    </div>
  )
}

const FormComponent = reduxForm({
  form: 'FilterValues',
})(TabFilter)

const selector = formValueSelector('FilterValues')
const mapStateToProps = (state) => {
  const filterValue = selector(state, 'genre', 'language')
  return {
    filterValue,
  }
}

export default connect(mapStateToProps, { search_movie_filter })(FormComponent)
