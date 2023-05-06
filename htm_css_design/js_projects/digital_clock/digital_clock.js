
//get elements from html, we use 'const' so it can't be reassigned
//querySelector('#sum-el')
const hourEl = document.querySelector('#hour');
const minuteEl = document.querySelector('#minutes');
const secondEl = document.querySelector('#seconds');
const AmPmEl = document.querySelector('#ampm');


// clock fun
function digit_clck () {

    // get h,m, s values from 'Date()'
    // by using 'new' , we can access to functions inside objects
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "Am"; //defualt

    // Am / Pm
    if (h > 12) {
        // 12 => 13-12=1
        h = h - 12;
        ampm = "Pm";
    }

    //display
    //hourEl.textContent = h;
    hourEl.textContent = h;
    minuteEl.textContent = m;
    secondEl.textContent = s;
    AmPmEl.textContent = ampm;

    //refreshing the clock or web page by evey 1s
    //by using 'setTimeout' :--
    setTimeout( () => {

        digit_clck();
        
    }, 1000);
}


//call 
digit_clck();












