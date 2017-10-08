import toggleClass from './toggleClass'

export default class _IntersectionObserver {
  constructor(el, options) {
    this.el = el
    this.options = {
      watch: false
    }
    Object.assign(this.options, options)
    this.initObserver()
  }

  initObserver() {
    this.observer = new IntersectionObserver((change) => {
      const isIntersecting = change[0].isIntersecting
      toggleClass(this.el, this.options, isIntersecting)
      if(!this.options.watch && isIntersecting) {
        this.off()
      }
    })
  }

  on() {
    if(typeof this.observer !== 'undefined') {
      this.observer.observe(this.el)
    }
  }

  off() {
    if (this.observer && this.el) {
      this.observer.unobserve(this.el)
      this.observer = null
      this.el = null
    }
  }
}