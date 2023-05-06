

// get element from html
const textAreaEl = document.getElementById("textarea");
const totalCountEl = document.getElementById("total-counter");
const remainCountEl = document.getElementById("remaining-counter");

//  Event listener
// 'keyup': trigger when start writing
textAreaEl.addEventListener("keyup", () => {

    updateCount();
});


// update counter 
function updateCount () {

    // get value 
    totalCountEl.innerText = textAreaEl.value.length;

    // calculate 'remaining = maxlenght - value.length
    remainCountEl.innerText = textAreaEl.getAttribute("maxlength") - textAreaEl.value.length;

}
























