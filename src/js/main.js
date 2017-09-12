import '../css/style.scss'
import createIntersectionObserver from './modules/IntersectionObserver'

const options = {
  class: 'is-show'
}

Array.prototype.forEach.call(document.querySelectorAll('.js-intersection-target'), el => {
  const observerEl = new createIntersectionObserver(el, options)
  observerEl.bindObserver()
})