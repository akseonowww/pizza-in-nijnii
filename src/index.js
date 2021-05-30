import './libs/hystModal-0.4/hystModal.min.css'
import './libs/hystModal-0.4/hystModal.min.js'
import './scss/index.scss'

const checkboxAll = document.querySelectorAll('.form__item')
const counterHeader = document.getElementsByClassName('header.header__counter')

// const tabButton = document.getElementsByClassName('.tabs__nav .nav__item')
const tabButton = document.querySelector('nav__item_input').textContent
// counterHeader.style.background = 'green'

const cHHtml = counterHeader.innerHTML
console.log(checkboxAll, counterHeader, tabButton[0])
console.log(cHHtml)


const winsdowsWidth = document.documentElement.clientWidth

console.log(winsdowsWidth)

if (document.documentElement.clientWidth > 768) {
  // alert(winsdowsWidth)
}

