import Slider from './Slider.js'

class LightboxSlider extends Slider {
   constructor(nextBtn, prevBtn, mainImage, images, lightbox) {
      super(nextBtn, prevBtn, mainImage, images)

      this.lightbox = document.querySelector(lightbox)
   }

   setup() {
      super.setup()

      const closeBtn = document.querySelector('#close-lightbox')
      closeBtn.addEventListener('click', this.close)
   }

   open = () => {
      this.lightbox.classList.add('lightbox--visible')
   }

   close = () => {
      this.lightbox.classList.remove('lightbox--visible')
   }

   changeImage = (direction) => {
      super.changeImage(direction)
      const image = this.images[this.visibleImg]

      this.setMainImage(image.querySelector('img').getAttribute('src'))
   }
}

export default LightboxSlider