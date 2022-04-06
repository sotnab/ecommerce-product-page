class Slider {
   constructor(nextBtn, prevBtn, mainImage, images) {
      this.visibleImg = 0
      this.mainImage = document.querySelector(mainImage)
      this.nextBtn = document.querySelector(nextBtn)
      this.prevBtn = document.querySelector(prevBtn)
      this.images = document.querySelectorAll(images)
   }

   setup() {
      this.images.forEach((item, index) => {
         item.addEventListener('click', () => this.setImage(item, index))
      })

      this.prevBtn.addEventListener('click', () => this.changeImage(-1))
      this.nextBtn.addEventListener('click', () => this.changeImage(1))
   }

   setImage(item, index) {
      this.setMainImage(item.querySelector('img').getAttribute('src'))

      this.images[this.visibleImg].classList.remove('slider_item--visible')
      item.classList.add('slider_item--visible')
      this.visibleImg = index
   }

   setMainImage(src) {
      this.mainImage.setAttribute('src', src)
   }

   changeImage(direction) {
      const newVisible = this.visibleImg + direction
      if (newVisible < 0 || newVisible >= this.images.length) return

      this.images[this.visibleImg].classList.remove('slider_item--visible')
      this.images[newVisible].classList.add('slider_item--visible')
      this.visibleImg = newVisible
   }
}

export default Slider