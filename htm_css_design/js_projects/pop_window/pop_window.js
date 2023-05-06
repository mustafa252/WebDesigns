
// get html element
let btnEl = document.querySelector('.btn')
let closeEl = document.querySelector('.close-icon')
let containerEl = document.querySelector('.container')
const popEl = document.querySelector('.popup-container ')


// click to join 
btnEl.addEventListener('click', () => {

    // show popup window
    popEl.classList.remove('active')
    // bluerr background
    containerEl.classList.add('active')
    // test
    console.log('click to join')
})



// close 

closeEl.addEventListener('click', () => {

    // hide popup window
    popEl.classList.add('active')
    // unbluerr background
    containerEl.classList.remove('active')
    // test
    console.log('close')
})











