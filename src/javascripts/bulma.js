document.addEventListener('DOMContentLoaded', () => {
  const hambuger = document.querySelector('.navbar-burger')
  const target = document.querySelector('.navbar-menu')
  if(hambuger) {
    hambuger.onclick = () => {
      target.classList.toggle('is-active')
    }
  }
})