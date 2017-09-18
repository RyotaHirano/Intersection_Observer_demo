import _IntersectionObserver from './modules/IntersectionObserver'
import inviewObserver from './modules/inviewObserver'

export default function inviewToggleClass(el, options) {
  let observer
  if('IntersectionObserver' in document) {
    observer = new _IntersectionObserver(el, options)
  } else {
    observer = new inviewObserver(el, options)
  }
  observer.on()
}