class Counter {
   constructor(counter, plus, minus) {
      this.count = 1
      this.counter = document.querySelector(counter)
      this.plus = document.querySelector(plus)
      this.minus = document.querySelector(minus)
   }

   setup() {
      this.plus.addEventListener('click', () => this.setCounter(1))
      this.minus.addEventListener('click', () => this.setCounter(-1))
      this.updateCounter()
   }

   setCounter(number) {
      if (number == 1) this.count++;
      else if (this.count > 1) this.count--;
      this.updateCounter()
   }

   updateCounter() {
      this.counter.innerText = this.count;
   }
}

export default Counter