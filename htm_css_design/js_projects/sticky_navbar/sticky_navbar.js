
// the Navbar is fixed during scroll by using 'position: fixed;' in css.file
// we want to add class 'active' into it, so it changes color when reach the 'bottom-container'.
// bottom.start = bottom.top(PX) - Navbar.hieght(PX) - merge(PX) [ before the start of bottom, if it exist...]


// get element from html
const navbarEl = document.querySelector(".navbar");
const bottomEl = document.querySelector(".bottom-container");


//value of the offsets
console.log(navbarEl.offsetHeight);
console.log(bottomEl.offsetTop);

// listen to the 'scroll'
window.addEventListener('scroll', () => {

    // show scroll value of 'y-axis'
    // console.log(window.scrollY);

    // Apply the condition to add the class
    const f = bottomEl.offsetTop - navbarEl.offsetHeight - 50;

    if ( window.scrollY > f) {

        console.log('ok') // test
        //add class 'active'
        navbarEl.classList.add('active');

    }
    else {

        //remove class 'active'
        navbarEl.classList.remove('active');

    }


});


// NOTE:- Also add 'transition: background-color 0.4s;' into css.file to slow the change and make it better.