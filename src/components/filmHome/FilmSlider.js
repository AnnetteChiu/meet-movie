import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper/core'
import 'swiper/swiper-bundle.css'

import FilmSliderCard from './FilmSliderCard'

SwiperCore.use([Navigation])

const config = {
  slidesPerView: 2,
  spaceBetween: 15,
  freeMode: true,
  edgeSwipeThreshold: 30,
  slidesOffsetBefore: 20,
  slidesPerGroup: 2,
  navigation: true,
  breakpoints: {
    576: {
      slidesPerView: 4,
      slidesOffsetBefore: 30,
    },
    767: {
      slidesPerView: 6,
      slidesOffsetBefore: 40,
    },
    1000: {
      slidesPerView: 8,
      slidesOffsetBefore: 50,
    },
  },
}

class FilmSlider extends React.Component {
  componentDidUpdate() {
    this.renderSwiper()
  }

  renderSlides(films) {
    if (!films) {
      return
    }

    return films.map((item) => {
      return (
        <SwiperSlide key={item.id} tag="li">
          <FilmSliderCard media_type={this.props.media_type} film={item} />
        </SwiperSlide>
      )
    })
  }

  renderSwiper() {
    return (
      <Swiper className="filmSwiper" tag="section" wrapperTag="ul" {...config}>
        {this.renderSlides(this.props.films)}
      </Swiper>
    )
  }

  render() {
    return (
      <section className="filmSlider">
        <h2 className="filmSlider-title">{this.props.label}</h2>
        {this.renderSwiper()}
      </section>
    )
  }
}

export default FilmSlider
