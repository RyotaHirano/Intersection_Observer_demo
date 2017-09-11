export default class createIntersectionObserver {
  constructor(el) {
    this.el = el
    this.initObserver()
  }

  initObserver() {
    this.observer = new IntersectionObserver((change) => {
      console.log(change[0].isIntersecting)
    })
  }

  bindObserver() {
    if(typeof this.observer !== 'undefined') {
      this.observer.observe(this.el)
    }
  }
}