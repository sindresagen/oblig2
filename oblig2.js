// controller (ingenting her ennå)
function selectedBar(barNo) {
    if (barNo == chosenBar) {
        chosenBar = '';
    } else {
        chosenBar = barNo;
    }

    show();
}

function removeBar() {
    let barToBeSpliced = chosenBar - 1;
    numbers.splice(barToBeSpliced, 1)
    show();
}

function changeBar() {

    if (inputValue > 10 && inputValue <= 0) {
        alert('Feil, tallet er ikke mellom 1 og 10.');
    } else if (inputValue <= 10) {
        numbers[chosenBar - 1] = parseInt(inputValue);
    }
    show();
}

function addBar() {
    if (inputValue > 10) {
        alert('Feil, tallet er ikke mellom 1 og 10.');
        } else if (inputValue <= 10) {
        numbers.push(inputValue);
    }
    show();
}