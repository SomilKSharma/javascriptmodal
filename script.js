'use strict'

// Get access to classes
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const buttonClose = document.querySelector('.close-modal')

// Get access to open modal buttons
const buttonOpen = document.querySelectorAll('.show-modal')
// loop through all of them
for (let index = 0; index < 3; index++) {
    console.log(buttonOpen[index].addEventListener(
        'click', function () {
            modal.classList.remove('hidden')
            overlay.classList.remove('hidden')
        }))
}

// close button
buttonClose.addEventListener('click', function() {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
})

// keyboard events
document.addEventListener('keydown', function () {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
})
