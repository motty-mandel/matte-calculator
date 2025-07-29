const display = document.getElementById('display');
const question = document.getElementById('question');
const answer = document.getElementById('answer');

// Iteration 3
function displayNumber(e) {
    let checkEquals = localStorage.getItem('equals');
    if (checkEquals == 0) {
        question.textContent = `${parseInt(e.id)}`;
        answer.textContent = " ";
        localStorage.setItem('equals', '1');
        return;
    }
    for (i=0; i<10; i++) {
        if (i == e.id) {
            question.textContent += `${parseInt(e.id)}`;
        }
    }
}

function actions(e) {
    let checkEquals = localStorage.getItem('equals');
    if (checkEquals == 0) {
        question.textContent = answer.textContent;
        answer.textContent = " ";
        localStorage.setItem('equals', '1');
    }

    if (e.id === 'clearDisplay') {
        question.textContent = " ";
        answer.textContent = " ";
    } else if (e.id === 'plus') {
        question.textContent += "+"; 
    } else if (e.id === 'minus') {
        question.textContent += "-"; 
    } else if (e.id === 'multiply') {
        question.textContent += "*"; 
    } else {
        question.textContent += "/"; 
    }
}

function equals() {
    var math = eval(question.textContent);
    answer.textContent = math;
    localStorage.setItem('equals', '0')
}

// ----------------Iteration 2-------------------
// function questionNumber(e) {
//     console.log(e.id);
//     if (e.id == 1) {
//         question.textContent += '1';
//     } else if (e.id == 2) {
//         question.textContent += '2';
//     } else if (e.id == 3) {
//         question.textContent += '3';
//     } else if (e.id == 4) {
//         question.textContent += '4';
//     } else if (e.id == 5) {
//         question.textContent += '5';
//     } else if (e.id == 6) {
//         question.textContent += '6';
//     } else if (e.id == 7) {
//         question.textContent += '7';
//     } else if (e.id == 8) {
//         question.textContent += '8';
//     } else if (e.id == 9) {
//         question.textContent += '9';
//     } else {
//         question.textContent += '0';
//     }
// };


// --------------Iteration 1-----------------
// function one(e) {
//     question.textContent += '1';
//     console.log(e.id);
// }

// function two() {
//     question.textContent += '2';
// }

// function three() {
//     question.textContent += '3';
// }

// function four() {
//     question.textContent += '4';
// }

// function five() {
//     question.textContent += '5';
// }

// function six() {
//     question.textContent += '6';
// }

// function seven() {
//     question.textContent += '7';
// }

// function eight() {
//     question.textContent += '8';
// }

// function nine() {
//     question.textContent += '9';
// }

// function zero() {
//     question.textContent += '0';
// }

// function question() {
//     question.textContent = " ";
// }

// function plus() {
//     question.textContent += '+';
// }

// function minus() {
//     question.textContent += '-';
// }

// function multiply() {
//     question.textContent += 'x';
// }

// function divide() {
//     question.textContent += '/';
// }

// function equals() {
//     question.textContent += '=';
// }