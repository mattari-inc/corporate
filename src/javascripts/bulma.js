document.addEventListener('DOMContentLoaded', () => {
  const hambuger = document.querySelector('.navbar-burger')
  const target = document.querySelector('.navbar-menu')
  hambuger.onclick = () => {
    target.classList.toggle('is-active')
  }
})