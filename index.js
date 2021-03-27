

// var spanElement = document.getElementById('colorMeRed').addEventListener('mouseover', colorMeRed);
var spanElement = document.querySelector('.col-12.border.border-danger').addEventListener('mouseover', colorMeRed);
var spanElement = document.querySelector('.col-12.border.border-danger').addEventListener('mouseleave', colorMeNone);

// var spanElement = document.getElementById('colorMeRed').addEventListener('mouseleave', colorMeNone);

function colorMeRed() {

    document.querySelector('.col-12.border.border-danger').style.color = 'white';
    document.querySelector('.col-12.border.border-danger').style.backgroundColor = 'red';
}

function colorMeNone() {
    document.querySelector('.col-12.border.border-danger').style.color = 'black';
    document.querySelector('.col-12.border.border-danger').style.backgroundColor = 'white';
}


function promptInput() {
    let inputString = prompt('Please enter an input!!!');

    document.getElementById('promtValue').innerText = inputString;

}

function headingClicked(event) {
    let x = event.x;
    let y = event.y;

    console.log(x + ' ' + y);

    document.getElementById('coordinates').innerText = 'X: ' + x + '. & Y:' + y;
}

function charCount() {
    console.log(document.getElementById('floatingTextarea2').value.length);
    document.getElementById('charCount').innerHTML = document.getElementById('floatingTextarea2').value.length;

}

function numToBinary() {
    let num = document.getElementById('inputNumber').value;

    document.getElementById('binNum').value = parseInt(num).toString(2);
}

function numToHex() {
    let num = document.getElementById('inputNumbe2').value;
    document.getElementById('hexNum').value = parseInt(num).toString(16);
}

console.log(document.querySelectorAll('form input'))


function formValidation(event) {
    document.querySelectorAll('form input').forEach(x => {
        if (!x.value) {
            console.log(x.id);

            alert('Please Enter ' + x.id + ' of Contact form')

        }
    });
    event.preventDefault();
}

function fullScreen() {
    var element = document.getElementById('natureImage');

    element.requestFullscreen();
}

function exitFullScreen() {
    // var element = document.getElementById('natureImage');

    // element.exitFullScreen;

    document.exitFullscreen();
}


let bodyElement = document.getElementsByTagName('body')[0];
window.open("", "_self");
bodyElement.addEventListener('keypress', function (event) {
    console.log(event.charCode);

    if (event.charCode == 32) {
        alert('Thank You..!!');
        close();
    } else {
        alert('Invalid Key Pressed');

    }
});

let editParagraph = document.getElementById('editableParagrah');
editParagraph.addEventListener('mouseover', function (event) {
    console.log('editable now')
    editParagraph.style.
        editParagraph.contentEditable = true;
});

function editP() {
    editParagraph.contentEditable = true;
}

editParagraph.addEventListener('mouseleft', function () {
    editParagraph.contentEditable = false;
});


