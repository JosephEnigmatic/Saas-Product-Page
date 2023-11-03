//! mobile menu
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('close')
    mobileMenu.classList.toggle('active')
})

// ? accordion
const accordionContainer = document.querySelector('.faqs__group');

accordionContainer.addEventListener('click', (e) => {
    const groupHeader = e.target.closest('.faqs__header')

    if (!groupHeader) return;

    const group = groupHeader.parentElement;
    const groupBody = group.querySelector('.faqs__body')

    groupBody.classList.toggle('open')


    // other group
    const otherGroup = accordionContainer.querySelectorAll('.faqs__content')
    // remove open class from other not clicked group
    otherGroup.forEach((groups) => {
        if (groups !== group) {
            groups.querySelector('.faqs__body').classList.remove('open')
        }
    })
})