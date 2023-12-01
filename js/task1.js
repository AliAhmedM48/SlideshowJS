// ^ single node
var form = document.getElementById('form');
var submitButton = document.getElementById('submit');
var resetButton = document.getElementById('reset');
// ^ collection of nodes
var inputs = document.getElementsByClassName('form-control');
var feedbacks = document.getElementsByClassName('validation-feedback');
// ====================================================================

// * addEventListener "submit" event to the form.
form.addEventListener('submit', formValidation);
var isValid = 0;

// * formValidation for the form "submit" event.
function formValidation(event) {
    var isEmpty = [0, 0, 0];
    isValid = 1;
    for (var i = 0; i < inputs.length; i++) {
        // ! empty inputs case.
        if (inputs[i].value === '') {
            event.preventDefault();
            isValid = 0;
            feedbacks[i].innerText = 'required';
            isEmpty[i] = 1;
        } else {
            feedbacks[i].innerText = '';
        }

        // ! name is numerical values case.
        if (isFinite(inputs[0].value) && !isEmpty[0]) {
            event.preventDefault();
            isValid = 0;
            feedbacks[0].innerText = 'characters only';
        }


        // ! age is not a number case.
        if (isNaN(inputs[1].value) && !isEmpty[1]) {
            event.preventDefault();
            isValid = 0;
            feedbacks[1].innerText = 'numbers only';
        }

        // ! email is invalid format case.
        if ((inputs[2].value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) === null) && !isEmpty[2]) {
            event.preventDefault();
            isValid = 0;
            feedbacks[2].innerText = 'invalid email, user@example.com';
        }
    }
    if (isValid) {
        console.log('done');
        displayInTable(inputs);
        resetForm();
    }


    // if (isEmpty) return;

    // // ! name is numerical values case.
    // if (isFinite(inputs[0].value)) {
    //     event.preventDefault();
    //     feedbacks[0].innerText = 'characters only';
    //     // return;
    // }

    // // ! age is not a number case.
    // if (isNaN(inputs[1].value)) {
    //     event.preventDefault();
    //     feedbacks[1].innerText = 'numbers only';
    //     // return;
    // }
    // // ! email is invalid format case.
    // if (inputs[2].value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) === null) {
    //     event.preventDefault();
    //     feedbacks[2].innerText = 'invalid email, user@example.com';
    //     // return;
    // }
}

// * addEventListener "reset" event to the form.
form.addEventListener('reset', resetForm)

// * resetForm for the form "submit" event.
function resetForm() {
    for (var i = 0; i < 3; i++) {
        inputs[i].value = '';
        feedbacks[i].innerText = '';
    }
}

// * add data to table.
function displayInTable(inputs) {
    var tbody = document.getElementById('tbody');
    var trCount = document.querySelectorAll('#tbody tr').length;
    var tr = document.createElement('tr');
    var th = document.createElement('th');
    tr.appendChild(th);
    th.innerText = trCount + 1;

    for (var i = 0; i < inputs.length; i++) {

        var td = document.createElement('td');
        td.innerText = inputs[i].value;
        tr.appendChild(td);
    }

    tbody.appendChild(tr);
}
