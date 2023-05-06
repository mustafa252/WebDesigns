
// get html element
const imgEl = document.getElementById('bg-image')



// window event
window.addEventListener('scroll', ()=> {

    updateImage();
    //test
    console.log('update image');
})


// change image opacity
function updateImage(){

    // reduce the opacity by scrolling
    // op = 1 - (value less than zero)
    imgEl.style.opacity = 1 - window.pageYOffset / 800;
}










