export default class createIntersectionObserver {
  constructor(el, options) {
    this.el = el
    this.options = {}
    Object.assign(this.options, options)
    this.initObserver()
  }

  initObserver() {
    this.observer = new IntersectionObserver((change) => {
      const isIntersecting = change[0].isIntersecting
      this.toggleClass(isIntersecting)
    })
  }

  toggleClass(isIntersecting) {
    if(isIntersecting) {
      this.el.classList.add(this.options.addClass)
    } else {
      this.el.classList.remove(this.options.addClass)
    }
  }

  bindObserver() {
    if(typeof this.observer !== 'undefined') {
      this.observer.observe(this.el)
    }
  }
}