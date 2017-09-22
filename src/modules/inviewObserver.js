import toggleClass from './toggleClass'

export default class inviewObserver {
  constructor(el, options) {
    this.el = el
    this.options = {
      watch: true
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
      this.off()
    }
  }

  on() {
    this.handleScroll()
    window.addEventListener('scroll', this.scrollEvent, false)
  }

  off() {
    window.removeEventListener('scroll', this.scrollEvent, false)
    this.clear()
  }

  clear() {
    this.el = null
    this.options = null
    this.scrollEvent = null
    this.windowHeight = null
    this.windowScrollTop = null
    this.offsetTop = null
  }
}