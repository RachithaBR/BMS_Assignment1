var existingNumbers = [100, 200, 201, 203];

window.onload = function(){ 
    document.getElementById('number').onkeypress = function(e){
        if (event.key === "Enter") {
            event.preventDefault();
            clearFields();
            checkForDuplicates();
        }
        
    }
    document.getElementById('btn').onclick = function(e){
            clearFields();
            checkForDuplicates();
    }
};

function clearFields() {
    document.getElementById("non-duplicates").innerText = '';
    document.getElementById("duplicates").innerText = '';
    document.getElementById("non-duplicates_label").style.display = 'none';
    document.getElementById("duplicates_label").style.display = 'none';
}

function getNumbers(range) {
    let startVal = Number(range.split('-')[0]);
    let endVal = Number(range.split('-')[1]);

    var list = [];
    for (var i = startVal; i <= endVal; i++) {
        list.push(i);
    }
    return list;
}

function printMessage(finalArray, duplicateNumbersArray) {
    if(finalArray.length) {
        document.getElementById("non-duplicates").innerText = finalArray;
        document.getElementById("non-duplicates_label").style.display = 'block';
    }
    if(duplicateNumbersArray.length) {
        document.getElementById("duplicates").innerText = duplicateNumbersArray;
        document.getElementById("duplicates_label").style.display = 'block';
    }
}

function checkForDuplicates() {
    var inputs = [];
    let inputNum = document.getElementById("number").value;
    var inputNumbersArray = [];
    var finalArray = [];
    var duplicateNumbersArray = [];

    if(inputNum.includes(',')){
        inputs = inputNum.split(',');
        inputs.forEach((input) => {
            if(input.includes('-')) {
                inputNumbersArray.push.apply(inputNumbersArray, getNumbers(input));
            } else {
                inputNumbersArray.push.apply(inputNumbersArray, [Number(input)]);
            }
        });
    } else if(inputNum.includes('-')) {
        inputNumbersArray.push.apply(inputNumbersArray, getNumbers(inputNum));
    }else {
        inputNumbersArray.push.apply(inputNumbersArray, [Number(inputNum)]);
    }
    finalArray = inputNumbersArray.filter(val => !existingNumbers.includes(val));
    duplicateNumbersArray = inputNumbersArray.filter(val => existingNumbers.includes(val));
    
    printMessage(finalArray, duplicateNumbersArray);
   
}

