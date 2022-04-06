import Slider from './Slider.js'

class ResponsiveSlider extends Slider {
   constructor(nextBtn, prevBtn, mainImage, images) {
      super(nextBtn, prevBtn, mainImage, images)

      this.media = window.matchMedia('(min-width: 750px)')
   }

   setup() {
      this.chooseSetup(this.media)
      this.media.addEventListener('change', (e) => this.chooseSetup(e))
   }

   chooseSetup(e) {
      if (e.matches) this.setupDesktop()
      else this.setupMobile()
   }

   setupMobile() {
      this.prevBtn.addEventListener('click', () => this.changeImage(-1))
      this.nextBtn.addEventListener('click', () => this.changeImage(1))
   }

   setupDesktop() {
      this.images.forEach((item, index) => {
         item.addEventListener('click', () => this.desktopChangeImage(item, index))
      })
   }

   desktopChangeImage(item, index) {
      if (!this.media.matches) return

      super.setImage(item, index)
   }

   changeImage(direction) {
      if (this.media.matches) return

      super.changeImage(direction)
   }
}

export default ResponsiveSlider