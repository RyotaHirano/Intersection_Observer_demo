import '../css/style.scss'
import createIntersectionObserver from './modules/IntersectionObserver'

const IntersectionObserverOptions = {
  targets: '.js-intersection-target',
  addClass: 'is-show'
}

Array.prototype.forEach.call(document.querySelectorAll(IntersectionObserverOptions.targets), el => {
  const observerEl = new createIntersectionObserver(el, IntersectionObserverOptions)
  observerEl.bindObserver()
})