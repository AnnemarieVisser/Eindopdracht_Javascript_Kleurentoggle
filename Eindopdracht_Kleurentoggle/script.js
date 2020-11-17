//maak van background een element
const bgColor = document.querySelector("body");

//als je op kleur/list [1] klikt, worden alle andere kleuren verwijderd
//alleen de juiste kleur blijft over

const noColor = document.querySelector(".none");
const red = document.querySelector(".red");
const orange = document.querySelector(".orange");
const yellow = document.querySelector(".yellow");
const green = document.querySelector(".green");
const blue = document.querySelector(".blue");
const purple = document.querySelector(".purple");

noColor.addEventListener('click', function () {
    bgColor.classList.remove('red', 'orange', 'yellow', 'green', 'blue', 'purple');
    bgColor.classList.add('none');
})

red.addEventListener('click', function () {
    bgColor.classList.remove('red', 'orange', 'yellow', 'green', 'blue', 'purple', 'none');
    bgColor.classList.add('red');
})

orange.addEventListener('click', function () {
    bgColor.classList.remove('red', 'orange', 'yellow', 'green', 'blue', 'purple', 'none');
    bgColor.classList.add('orange');
})

yellow.addEventListener('click', function () {
    bgColor.classList.remove('red', 'orange', 'yellow', 'green', 'blue', 'purple', 'none');
    bgColor.classList.add('yellow');
})

green.addEventListener('click', function () {
    bgColor.classList.remove('red', 'orange', 'yellow', 'green', 'blue', 'purple', 'none');
    bgColor.classList.add('green');
})

blue.addEventListener('click', function () {
    bgColor.classList.remove('red', 'orange', 'yellow', 'green', 'blue', 'purple', 'none');
    bgColor.classList.add('blue');
})

purple.addEventListener('click', function () {
    bgColor.classList.remove('red', 'orange', 'yellow', 'green', 'blue', 'purple', 'none');
    bgColor.classList.add('purple');
})


//Hamburger menu

function myFunction() {
    var x = document.getElementById("navigation");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}