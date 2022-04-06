class Menu {
   constructor(menu, openBtn, closeBtn) {
      this.menu = document.querySelector(menu)
      this.openBtn = document.querySelector(openBtn)
      this.closeBtn = document.querySelector(closeBtn)

      this.media = window.matchMedia('(min-width: 750px)')
   }

   setup() {
      this.openBtn.addEventListener('click', this.openMenu)
      this.closeBtn.addEventListener('click', this.closeMenu)

      this.menu.addEventListener('click', (e) => {
         if (e.target === e.currentTarget) this.closeMenu()
      })

      this.media.addEventListener('change', (e) => {
         if (e.matches) this.closeMenu()
      })
   }

   openMenu = () => {
      this.menu.classList.add('menu--opened')
   }

   closeMenu = () => {
      this.menu.classList.remove('menu--opened')
   }
}

export default Menu