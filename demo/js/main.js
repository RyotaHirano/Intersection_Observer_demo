import '../css/style.scss'
import inviewToggleClass from '../../src/inviewToggleClass'

const inviewToggleClassOptions = {
  targets: '.js-inview-target',
  addClass: 'is-show'
}

Array.prototype.forEach.call(document.querySelectorAll(inviewToggleClassOptions.targets), el => {
  const observerEl = new inviewToggleClass(el, inviewToggleClassOptions)
  observerEl.bindObserver()
})