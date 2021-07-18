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

const cubic = value => Math.pow(value, 3);
const easeInOutCubic = value => value < 0.5
  ? cubic(value * 2) / 2
  : 1 - cubic((1 - value) * 2) / 2;


const eventName = document.hasOwnProperty("ontouchstart") ? "ontouchstart" : "click"

backTop.addEventListener(eventName, function () {
  // window.scrollTo(0, 0)
  const el = document.documentElement || document.body;
  const beginTime = Date.now();
  const beginValue = el.scrollTop;
  const rAF = window.requestAnimationFrame || (func => setTimeout(func, 16));
  const frameFunc = () => {
    const progress = (Date.now() - beginTime) / 500;
    if (progress < 1) {
      el.scrollTop = beginValue * (1 - easeInOutCubic(progress));
      rAF(frameFunc);
    } else {
      el.scrollTop = 0;
    }
  };
  rAF(frameFunc);
})