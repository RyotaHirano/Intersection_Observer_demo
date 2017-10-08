import toggleClass from './toggleClass'

export default class inviewObserver {
  constructor(el, options) {
    this.el = el
    this.options = {
      watch: false
    }
    Object.assign(this.options, options)

    this.scrollEvent = () => {
      this.handleScroll()
    }
    this.windowHeight = window.innerHeight
    this.windowScrollTop = window.pageYOffset
    this.offsetTop = this.el.offsetTop
  }

  handleScroll() {
    this.windowScrollTop = window.pageYOffset
    const isIntersecting = this.windowScrollTop + this.windowHeight > this.offsetTop
    if (isIntersecting) {
      toggleClass(this.el, this.options, isIntersecting)
    }
    if (!this.options.watch && isIntersecting) {
      this.off()
    }
  }

  on() {
    this.handleScroll()
    window.addEventListener('scroll', this.scrollEvent, false)
  }

  off() {
    window.removeEventListener('scroll', this.scrollEvent, false)
  }
}