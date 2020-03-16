class TypeWriter {
  constructor(typewriterEl, greetings) {
    this.element = typewriterEl
    this.greetings = greetings
    this.currentText = ''
    this.counter = 0
    this.deleting = false

    this.type()
  }

  type = () => {
    const currentWordIndex = this.counter % this.greetings.length
    const currentWord = this.greetings[currentWordIndex]
    document.title = currentWord

    let charDifference = this.deleting ? -1 : 1
    this.currentText = currentWord.substring(0, this.currentText.length + charDifference);

    this.element.innerHTML = `<span id="typewriter">${this.currentText}</span>`

    let typingDelay = this.deleting ? 50 : 200

    if (this.currentText === currentWord) {
      this.deleting = true
      typingDelay = 3000
    } else if (this.currentText === '') {
      this.deleting = false
      this.counter++
    }

    setTimeout(this.type, typingDelay)
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const greetings = ['Dzień dobry!', 'Good morning!', 'Guten Tag!', 'Buenos Dias!']
  const typewriterEl = document.getElementById('typewriter')

  new TypeWriter(typewriterEl, greetings)
})