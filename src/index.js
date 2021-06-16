import './scss/index.scss'

// START - Tabs Products
const tabTitleProducts = document.querySelectorAll(
  '.vkus-v__products .nav__item'
)
const tabContentProducts = document.querySelectorAll(
  '.vkus-v__products .tabs-info__item'
)

for (let i = 0; i < tabTitleProducts.length; i++) {
  tabTitleProducts[i].addEventListener('click', () => {
    clearActiveClasses(tabTitleProducts)
    clearActiveClasses(tabContentProducts)

    tabTitleProducts[i].classList.add('active')
    tabContentProducts[i].classList.add('active')
  })
}

const clearActiveClasses = (elems) => {
  elems.forEach((elem) => {
    elem.classList.remove('active')
  })
}
// END - Tabs Products


// START - Checkbox for E-mail
const checkboxLabelEmail = document.querySelectorAll('.form__item')
const checkboxInputEmailAll = document.getElementById('checkbox-all')
const btnSubmitEmail = document.querySelector('.vkus-v__e-mail .button')
const checkboxInputEmail = document.querySelectorAll('.form__item input')

checkboxInputEmailAll.addEventListener('click', () => {
  if (checkboxInputEmailAll.checked) {
    for (let i = 0; i < checkboxInputEmail.length; i++) {
      checkboxInputEmail[i].checked = true
    }
  } else {
    for (let i = 0; i < checkboxInputEmail.length; i++) {
      checkboxInputEmail[i].checked = false
    }
  }
})

// checkboxInputEmail.forEach((elem) => {
//   elem.addEventListener('click', () => {
//     console.log(checkboxLabelEmail[0].innerHTML)
//     console.log(elem, ', status: ', elem.checked)
//   })
// })

btnSubmitEmail.addEventListener('click', () => {
  checkboxInputEmail.forEach((elem) => {
    elem.checked ? console.log(elem.id, ', status: ', elem.checked,
      checkboxLabelEmailList) :
      ''
  })
})

const checkboxLabelEmailList = ['Все блюда']

for (let i = 0; i < checkboxLabelEmail.length - 1; i++) {
  checkboxLabelEmailList.unshift(checkboxLabelEmail[i].innerHTML.slice(
    54, 63
  ).trim())
}

// END - Checkbox for E-mail
