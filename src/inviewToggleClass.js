export default class inviewToggleClass {
  constructor(el, options) {
    this.el = el
    this.options = {
      watch: true
    }
    Object.assign(this.options, options)
    this.initObserver()
  }

  initObserver() {
    if('IntersectionObserver' in window) {
      this.observer = new IntersectionObserver((change) => {
        const isIntersecting = change[0].isIntersecting
        this.toggleClass(isIntersecting)
        if(this.options.watch && isIntersecting) {
            this.offObserver()
        }
      })
    }
  }

  toggleClass(isIntersecting) {
    if(isIntersecting) {
      this.el.classList.add(this.options.addClass)
    } else {
      this.el.classList.remove(this.options.addClass)
    }
  }

  onObserver() {
    if(typeof this.observer !== 'undefined') {
      this.observer.observe(this.el)
    }
  }

  offObserver() {
    if (this.observer && this.el) {
      this.observer.unobserve(this.el)
      this.observer = null
      this.el = null
    }
  }
}