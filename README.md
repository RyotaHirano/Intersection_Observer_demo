# Intersection Observer Demo
 
### How to use

```
const inviewToggleClassOptions = {
  targets: '.js-inview-target', // observer target
  addClass: 'is-show'           // add class name
}
```

```
Array.prototype.forEach.call(document.querySelectorAll(inviewToggleClassOptions.targets), el => {
  inviewToggleClass(el, inviewToggleClassOptions)
})
```

demo: https://ryotahirano.github.io/Intersection_Observer_demo/