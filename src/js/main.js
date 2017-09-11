import '../css/style.scss'
import createIntersectionObserver from './modules/IntersectionObserver'

Array.prototype.forEach.call(document.querySelectorAll('.js-intersection-target'), el => {
  const observerEl = new createIntersectionObserver(el)
  observerEl.bindObserver()
})