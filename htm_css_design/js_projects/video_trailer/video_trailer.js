
// get html elements
let btnEl = document.querySelector('.btn')
let closeEl = document.querySelector('.close-icon')
let trailerConrEl = document.querySelector('.trailer-container')

// Event Listener
btnEl.addEventListener('click', () => {

    // show video
    trailerConrEl.classList.remove('active')
    //test
    console.log('remove')

})



closeEl.addEventListener('click', () => {

    // hide video
    trailerConrEl.classList.add('active')
    //test
    console.log('hide')

})






























