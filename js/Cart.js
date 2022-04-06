class Cart {
   constructor(cart, cartItems, openBtn) {
      this.cart = document.querySelector(cart)
      this.cartItems = document.querySelector(cartItems)
      this.openBtn = document.querySelector(openBtn)
      this.items = []
      this.itemTemplate = document.querySelector('#item-template')
      this.noItemsTemplate = document.querySelector('#no-items-template')
   }

   setup() {
      this.openBtn.addEventListener('click', this.toggleCart)
      this.renderCart()
   }

   addItem(item) {
      const sameItem = this.items.find(({ id }) => id === item.id)

      if (sameItem) {
         sameItem.pcs = sameItem.pcs + item.pcs;
         this.renderCart()
         return
      }

      this.items.push({ ...item })
      this.renderCart()
   }

   renderCart() {
      this.cartItems.innerHTML = ''

      if (!this.items.length) {
         const element = this.noItemsTemplate.content.cloneNode(true)
         this.cartItems.append(element)
         return
      }

      this.items.forEach((item) => {
         const element = this.itemTemplate.content.cloneNode(true)
         const thumb = element.querySelector('.cart_thumb')
         const name = element.querySelector('.cart_name')
         const price = element.querySelector('.cart_item-price')
         const pcs = element.querySelector('.cart_pcs')
         const fullPrice = element.querySelector('.cart_full-price')
         const deleteItem = element.querySelector('.cart_delete')

         name.innerText = item.name
         price.innerText = `$${item.price.toFixed(2)}`
         pcs.innerText = `x ${item.pcs}`
         fullPrice.innerText = `$${(item.pcs * item.price).toFixed(2)}`
         deleteItem.addEventListener('click', () => this.deleteItem(item.id))

         thumb.setAttribute('src', item.thumb)

         this.cartItems.append(element)
      })
   }

   deleteItem = (id) => {
      this.items = this.items.filter((item) => item.id !== id)
      this.renderCart()
   }

   toggleCart = () => {
      this.cart.classList.toggle('cart--visible')
   }
}

export default Cart