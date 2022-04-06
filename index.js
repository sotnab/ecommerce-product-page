import Menu from './js/Menu.js'
import Cart from './js/Cart.js'
import ResponsiveSlider from './js/ResponsiveSlider.js'
import LightboxSlider from './js/LightboxSlider.js'
import Counter from './js/Counter.js'

import './scss/style.scss'

const cartItem = {
   id: '92n820r62b23br',
   name: 'Autumn Limited Edition Sneakers',
   thumb: './images/image-product-1-thumbnail.jpg',
   price: 125,
   pcs: 0,
}

document.addEventListener('DOMContentLoaded', () => {
   const menu = new Menu('#menu', '#open-menu', '#close-menu')
   const cart = new Cart('#cart', '#cart-items', '#open-cart')
   const responsiveSlider = new ResponsiveSlider('#item-next', '#item-prev', '#item-main-img', '.item-img')
   const lightboxSlider = new LightboxSlider('#lightbox-next', '#lightbox-prev', '#lightbox-main', '.lightbox-img', '#lightbox')
   const counter = new Counter('#counter', '#plus', '#minus')

   const addToCart = document.querySelector('#add-to-cart')
   const itemSliderMain = document.querySelector('#item-main-img')

   menu.setup()
   cart.setup()
   responsiveSlider.setup()
   lightboxSlider.setup()
   counter.setup()

   itemSliderMain.addEventListener('click', () => {
      lightboxSlider.open()
   })

   addToCart.addEventListener('click', () => {
      cartItem.pcs = counter.count
      cart.addItem(cartItem)
   })
})