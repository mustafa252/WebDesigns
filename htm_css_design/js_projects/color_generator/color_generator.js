

//get element from html
const containerEl = document.querySelector(".container");


// creating 30 random colors
// 1- loop=30
// 2- create 'div' element
// 3- add class 'color-container'

for (let count=1; count <= 30; count+=1) {

    //test
    console.log('color#', count);
    // create 'div' element
    const colorConTainerEl = document.createElement("div");
    // add class 'color-container' 
    colorConTainerEl.classList.add('color-container');
    // append to the parent class 'container'
    containerEl.appendChild(colorConTainerEl);
    // <dive parent>
    //      <dive class='color-container'></>
    // </>
}


// get classes 'color-container' As array
const colorContainerEl = document.querySelectorAll(".color-container");



// create a function to generate random color pallet
function randomColor () {

    // create color values
    const chars = '0123456789abcdef';
    // create length of color value
    const colorCodeLenght = 6;
    // create list
    let colorCode = [];

    for (let i=0; i < colorCodeLenght ; i+=1) {

        // create random number between (0,16) for 6 times
        let randomNum = Math.ceil(Math.random()*chars.length);
        // test
        // console.log(randomNum);

        // substring, get the letters between two indices(start, end)
        // 'end' will not included, only start , so we do end=start+1
        // this will applied for 6-times, untile we have colorCode= 6-chars.
        colorCode += chars.substring(randomNum, randomNum + 1);
        console.log(colorCode);
        
    }

    // return color value to be used   
    return colorCode;
}

// create function to generate color
function generateColor() {

    //apply function on array of 30 class of 'color-container'
    colorContainerEl.forEach((colorContainerEl) => {

        //test
        // console.log(colorContainerEl);
        const color = randomColor();
        //get css attribute from class 'color-container'
        colorContainerEl.style.background = '#' + color;
        colorContainerEl.innerText = "#" + color;
    })
}


// test
randomColor();
generateColor();