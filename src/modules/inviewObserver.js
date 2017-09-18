import toggleClass from './toggleClass'

export default class inviewObserver {
  constructor(el, options) {
    this.el = el
    this.options = {
      watch: true
    }
    Object.assign(this.options, options)

    this.windowHeight = window.innerHeight
    this.windowScrollTop = window.pageYOffset
    this.offsetTop = this.el.offsetTop
    this.offsetHeight = this.el.offsetHeight
  }

  handleScroll() {
    console.log(this.options);
    this.windowScrollTop = window.pageYOffset
    const isIntersecting = this.windowScrollTop + this.windowHeight > this.offsetTop
    if (isIntersecting) {
      toggleClass(this.el, this.options, isIntersecting)
      this.off()
    }
  }

  on() {
    window.addEventListener('scroll', this.handleScroll)
  }

  off() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}