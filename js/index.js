const scroll = document.querySelector('.menu .scroll')
const container = document.querySelector('.menu .scroll .container')
const bar = document.querySelector('.menu .bar')
const inner = document.querySelector('.menu .bar .inner')

const getWidth = function ($el) {
  let width = window.getComputedStyle($el).width
  return parseFloat(width)
}

let scrollWidth = getWidth(scroll)
let containerWidth = getWidth(container)
let barWidth = getWidth(bar)
inner.style.width = parseInt(scrollWidth / containerWidth * barWidth) + 'px'

const getScrollLeft = function ($el) {
  return $el.scrollLeft
}

scroll.addEventListener('scroll', function () {
  inner.style.transform = `translateX(${getScrollLeft(scroll) / containerWidth * barWidth}px)`
})