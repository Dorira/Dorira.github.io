const mobileMenu = document.querySelector('.mobile-menu')
const buttons = document.querySelectorAll('.request-button')
const telInput = document.querySelector('.tel-input')
const requestForm = document.querySelector('.request-form')
const requestFormContent = document.querySelector('.popup-content')
const navbarButton = document.querySelector('.navbar-button')
new IMask(telInput, {
    mask: '+7(000)000-00-00',
})

const toggleNavbar = event => {
    document.body.style.overflowY = event.checked ? 'hidden' : 'auto'
    mobileMenu.style.display = !event.checked ? 'none' : 'flex'
}

const toggleForm = (event, isClose) => {
    if (window.innerWidth < 800) navbarButton.style.display = !isClose ? 'none' : 'flex'
    document.body.style.overflowY = !isClose ? 'hidden' : 'auto'
    requestForm.style.display = isClose ? 'none' : 'flex'
}

requestForm.addEventListener('click', event => {
    toggleForm(null, true)

})
requestFormContent.addEventListener('click', event => {
    event.stopPropagation()
})

buttons.forEach(button => {
    button.addEventListener('click', toggleForm)
})

new Splide('.splide').mount()