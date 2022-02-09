'use strict'
// For displaying or hiding the element use the class 
//BTW: You are setting both visibility: hidden and display: none in the css. That is a "belt and braces" approach. You should only do one or the other. Which one depends on how you want the page to look:
// visibility: hidden just means it is not visible, but it still is there and so the space for it is empty.
// display: none on the other hand removes it completely from the page, and so the space it occupied is free for other elements to use.

const h1a = document.querySelector('.h1a');
const buttons = document.getElementById('buttons');
const modal = document.querySelector('.modal')

buttons.addEventListener('mouseover', function() {
    h1a.classList.add('h1aColored')
})
buttons.addEventListener('mouseout', function() {
    h1a.classList.remove('h1aColored')
})

// getting the modal of rebbe to poppout
const rebbeButton = document.querySelector('.rebbeButton');
const popupRebbe = document.querySelector('.popupRebbe');
const overlay = document.querySelector('.overlay')

const reveal = function(a) {
    overlay.classList.remove('hidden')
    a.classList.remove('hidden')
}


rebbeButton.addEventListener('click', function() {
    reveal(popupRebbe)
})

// getting alter modal popout
const alterButton = document.querySelector('.alterButton');
const popupAlter = document.querySelector('.popupAlter');


alterButton.addEventListener('click', function() {
        reveal(popupAlter)
    })
    // getting 770 modal popout
const sevenButton = document.querySelector('.sevenButton');
const popupSeven = document.querySelector('.popupSeven');

sevenButton.addEventListener('click', function() {
    reveal(popupSeven);
})

// Exiting the modal
const hide = function(a) {
        overlay.classList.add('hidden');
        a.classList.add('hidden');
    }
    // for 770
overlay.addEventListener('click', function() {
        hide(popupSeven)
    })
    // for alterRebbe
overlay.addEventListener('click', function() {
    hide(popupAlter)
})

// for rebbe
overlay.addEventListener('click', function() {
    hide(popupRebbe)
})


// using esc to leave modal
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        hide(modal)
        hide(popupAlter)
        hide(popupSeven)
        hide(popupRebbe)
    }
})