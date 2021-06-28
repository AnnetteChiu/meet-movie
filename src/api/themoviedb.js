import axios from 'axios'

const api_key = 'ea0a44f94fdcdf0da6b39ac06f4ed93a'

//const language = 'zh-TW'

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: api_key,
    // region: 'TW',
    // language: language,
    // with_original_language: 'ja|zh|ko|th',
    // without_genres: '16',
  },
})
