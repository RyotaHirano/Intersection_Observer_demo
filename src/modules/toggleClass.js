export default function toggleClass(el, options, isIntersecting) {
  if(isIntersecting) {
    el.classList.add(options.addClass)
  } else {
    el.classList.remove(options.addClass)
  }
}