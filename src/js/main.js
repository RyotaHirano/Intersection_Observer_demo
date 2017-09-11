import '../css/style.scss'

const observer = new IntersectionObserver((change) => {
    // const target = change.target
    console.log(change);
  },
  {
    //
  }
)

const targetEl = document.querySelector('.js-target')
observer.observe(targetEl)