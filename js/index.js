const scroll = document.querySelector('.menu .scroll')
const container = document.querySelector('.menu .scroll .container')
const bar = document.querySelector('.menu .bar')
const inner = document.querySelector('.menu .bar .inner')
const banner = document.querySelector('.banner')
const backTop = document.querySelector('.backTop')

const getWidth = function ($el) {
  let width = window.getComputedStyle($el).width
  return parseFloat(width)
}

const getHeight = function ($el) {
  let height = window.getComputedStyle($el).height
  return parseFloat(height)
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
}, {
  passive: true,

})

let bannerHeight = getHeight(banner)

window.addEventListener('scroll', function () {
  if (window.scrollY > bannerHeight) {
    backTop.classList.add('show')
  }
  else {
    backTop.classList.remove('show')
  }
}, {
  passive: true,
})

backTop.addEventListener('touchstart', function () {
  window.scrollTo(0, 0)
})