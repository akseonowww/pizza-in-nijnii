const btnMenu = document.querySelector('.button-menu')
const menu = document.querySelector('.menu')
const menuContainer = document.querySelector('.menu .container')

const showMenu = () => {
    menu.style.right = '0'
    document.body.style.overflowY = 'hidden'
}

const closeMenu = () => {
    document.body.style.overflowY = 'auto'
    menu.style.right = '-100vw'
}




console.log(btnMenu)



















// $("#myTab a").click(function (e) {
//   e.preventDefault()
//   $(this).tab("show")
// })

// $('#myTab a[href="#profile"]').tab("show") // Выбрать вкладку по имени
// $("#myTab a:first").tab("show") // Выбрать первую вкладку
// $("#myTab a:last").tab("show") // Выбрать последнюю вкладку
// $("#myTab li:eq(2) a").tab("show") //Выбрать третью вкладку (в 0-indexed)


// // ---------------------------  КОРЗИНА  ---------------------------
// const d = document
// let itemBox = d.querySelectorAll('.product-card__container')
// let cartCont = d.getElementById('cart_content')
// let basketCounter = d.querySelector('.basket__number')
// let modalShop = d.querySelector('.modal-shop')
// let basketPrice = d.querySelector('.basket__price')
// let basketPriceValue = d.querySelector('.price__item')
// let products = eval('({obj:[' + localStorage.cart + ']})')
// let productsCounter

// // basketPriceValue.innerHTML = 0

// console.log(basketPriceValue)

// const openModuleShop = () => {
//   modalShop.style.display = 'flex'
//   openCart()
// }

// const closeModuleShop = () => {
//   modalShop.style.display = 'none'
// }

// const priceSum = () => {
//   return products.obj[0][1][1] * products.obj[0][1][2]
// }

// // Функция кроссбраузерная установка обработчика событий
// function addEvent(elem, type, handler) {
//   if (elem) {
//     elem.addEventListener(type, handler, false)
//   } else {
//     elem.attachEvent('on' + type, function () { handler.call(elem) })
//   }
//   return false
// }

// let basketBtn = d.querySelectorAll('.basket__button')

// if (products.obj[0] != undefined) {
//   basketCounter.innerHTML = products.obj[0][1] ? products.obj[0][1][2] : 0
//   productsCounter = products.obj[0][1] ? products.obj[0][1][1] : 0
//   basketPriceValue.innerHTML = products.obj[0][1] ? (products.obj[0][1][1] * products.obj[0][1][2]) : 0
//   basketCounter.style.display = "flex"
//   basketPrice.style.display = "flex"
// }





// // Получаем данные из LocalStorage
// function getCartData() {
//   return JSON.parse(localStorage.getItem('cart'))
// }
// // Записываем данные в LocalStorage
// function setCartData(o) {
//   localStorage.setItem('cart', JSON.stringify(o))
//   return false
// }

// // Добавляем товар в корзину
// function addToCart(e) {
//   this.disabled = true // блокируем кнопку на время операции с корзиной
//   let cartData = getCartData() || {}, // получаем данные корзины или создаём новый объект, если данных еще нет
//     parentBox = this.parentNode, // родительский элемент кнопки &quotДобавить в корзину&quot
//     itemId = this.getAttribute('data-id') // ID товара

//   let itemTitle = parentBox.querySelector('.product__title').innerHTML, // название товара
//     itemPrice = parentBox.querySelector('.product__price').innerHTML // стоимость товара

//   if (cartData.hasOwnProperty(itemId)) { // если такой товар уже в корзине, то добавляем +1 к его количеству
//     cartData[itemId][2] += 1
//     basketCounter.innerHTML = cartData[itemId][2]
//     basketCounter.style.display = "flex"
//     console.log('1: ' + basketCounter)

//   } else { // если товара в корзине еще нет, то добавляем в объект
//     cartData[itemId] = [itemTitle, itemPrice, 1]
//     basketCounter.innerHTML = cartData[itemId][2]
//     basketCounter.style.display = "flex"
//   }
//   if (products.obj[0] != undefined) {
//   basketPriceValue.innerHTML = products.obj[0][1] ? (products.obj[0][1][1] * products.obj[0][1][2]) : 0
//     console.log('123445345--------')
//   }
//   // Обновляем данные в LocalStorage
//   if (!setCartData(cartData)) {
//     this.disabled = false // разблокируем кнопку после обновления LS
//     cartCont.innerHTML = 'Товар добавлен в корзину.'
//     setTimeout(function () {
//       cartCont.innerHTML = 'Продолжить покупки...'
//     }, 1000)
//   }
//   if (products.obj[0] != undefined) {
//     // console.log(products.obj[0][1][1], products.obj[0][1][2])
//   }

//   return false
// }

// // Устанавливаем обработчик события на каждую кнопку &quotДобавить в корзину&quot
// for (let i = 0; i < itemBox.length; i++) {
//   addEvent(itemBox[i].querySelector('.button__add-product'), 'click', addToCart)
// }
// // Открываем корзину со списком добавленных товаров
// function openCart(e) {

//   let cartData = getCartData(), // вытаскиваем все данные корзины
//     totalItems = ''
//   console.log(JSON.stringify(cartData))
//   console.log(JSON.stringify(cartData))
//   // если что-то в корзине уже есть, начинаем формировать данные для вывода
//   if (cartData !== null) {
//     totalItems = '<table class="table table-striped align-self-start"><tr><th>Наименование</th><th>Цена</th><th>Кол-во</th></tr>'
//     for (let items in cartData) {
//       totalItems += '<tr>'
//       for (let i = 0; i < cartData[items].length; i++) {
//         totalItems += '<td>' + cartData[items][i] + '</td>'
//       }
//       totalItems += '</tr>'
//     }
//     // totalItems += '<table>'
//     cartCont.innerHTML = totalItems

//     d.getSelection('#clear_cart').style.display = "block"
//   } else {
//     // если в корзине пусто, то сигнализируем об этом
//     cartCont.innerHTML = 'Корзина пуста'
//   }
//   return false
// }
// /* Открыть корзину */
// // addEvent(d.getElementById('checkout'), 'click', openCart)
// /* Очистить корзину */
// addEvent(d.getElementById('clear_cart'), 'click', function (e) {
//   localStorage.removeItem('cart')
//   cartCont.innerHTML = 'Корзина пуста'
//   basketCounter.innerHTML = 0
//   basketCounter.style.display = "none"
// })





