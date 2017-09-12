import '../css/style.scss'
import createIntersectionObserver from './modules/IntersectionObserver'

const options = {
  targets: '.js-intersection-target',
  addClass: 'is-show'
}

Array.prototype.forEach.call(document.querySelectorAll(options.targets), el => {
  const observerEl = new createIntersectionObserver(el, options)
  observerEl.bindObserver()
})