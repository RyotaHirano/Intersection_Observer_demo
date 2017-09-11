import '../css/style.scss'

const observer = new IntersectionObserver((change) => {
  console.log(change[0].isIntersecting);
})

const targetEl = document.querySelector('.js-target')
observer.observe(targetEl)