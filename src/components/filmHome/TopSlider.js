import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Autoplay, EffectFade } from 'swiper/core'
import 'swiper/swiper-bundle.css'
import { connect } from 'react-redux'
import { get_trending } from '../../actions'

import SlideCard from './SlideCard'

SwiperCore.use([Navigation, Autoplay, EffectFade])

const config = {
  speed: 1000,
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 5000,
  },
  navigation: true,
}

class TopSlider extends React.Component {
  componentDidMount() {
    this.props.get_trending()
  }

  componentDidUpdate() {
    this.renderSlides()
  }

  renderSlides() {
    if (!this.props.trending_films) {
      return
    }
    return this.props.trending_films.map((film) => {
      return (
        <SwiperSlide key={film.id} tag="li">
          <SlideCard film={film} />
        </SwiperSlide>
      )
    })
  }

  renderSwiper() {
    return (
      <Swiper className="topSwiper" tag="section" wrapperTag="ul" {...config}>
        {this.renderSlides()}
      </Swiper>
    )
  }

  render() {
    return <section className="topSlider">{this.renderSwiper()}</section>
  }
}

const mapStateToProps = (state) => {
  return { trending_films: state.film.trending_films }
}

export default connect(mapStateToProps, { get_trending })(TopSlider)
