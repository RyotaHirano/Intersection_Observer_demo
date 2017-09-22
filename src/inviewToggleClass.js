import _IntersectionObserver from './modules/IntersectionObserver'
import inviewObserver from './modules/inviewObserver'

export default function inviewToggleClass(el, options) {
  let observer
  if('IntersectionObserver' in window) {
    observer = new _IntersectionObserver(el, options)
    observer.on()
  } else {
    // for old browser
    observer = new inviewObserver(el, options)
    observer.on()
  }
}