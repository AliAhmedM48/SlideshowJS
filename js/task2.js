//#region IMAGE
// * get image tag from html tags.
var img = document.getElementById('image');                     // ^ image tag

// * get number of images in our gallery folder.
var imagesQuantity = 6;

// * get image index from Image tag.
// ^ we use iterable naming for our gallery images...[images gallery folder contains 1.jpg, 2.jpg...]
var imgCurrentIndex = parseInt(img.getAttribute('src').split('/')[1].split('.')[0]);

// * edit image paths based on indices.
function editImagePath(imgTag, index) {
    return imgTag.getAttribute('src').split('.')[0].split('/')[0] + '/' + (index) + '.jpg';
}
//#endregion

//#region BUTTONS
// * get buttons tags from html tags.
var btnGroup = document.getElementById('btn-group');            // * all buttons
var nextBtn = document.getElementById('nextBtn');               // ^ next button
var previousBtn = document.getElementById('previousBtn');       // ^ previous button
var slideShowBtn = document.getElementById('slideShowBtn');     // ^ slide show button
var stopBtn = document.getElementById('stopBtn');               // ^ stop button
//#endregion

// & disable [STOP] & [PREVIUOS] buttons.
previousBtn.disabled = true;
stopBtn.disabled = true;

// * add Event Listener to button group.
btnGroup.addEventListener('click', btnGroupFunctions);

// * Event Listener function.
function btnGroupFunctions(event) {
    // ! check image index before event.
    console.log('index before event: ' + imgCurrentIndex);

    // * which button is clicked? then calling its function & get upadted image index and update its variable [imgCurrentIndex].
    switch (event.target.id) {
        case 'nextBtn':
            // * call next button function.
            imgCurrentIndex = nextBtnFunction(imgCurrentIndex);

            // & enable & disable [next][previous] buttons.
            if (imgCurrentIndex === imagesQuantity) nextBtn.disabled = true; else nextBtn.disabled = false;
            if (imgCurrentIndex === 1) previousBtn.disabled = true; else previousBtn.disabled = false;
            break;

        case 'slideShowBtn':
            // * call slide show button function.
            slideShowBtnFunction();
            break;

        case 'stopBtn':
            // * call stop button function.
            // ^ no update, no assign.
            stopBtnFunction();
            break;

        case 'previousBtn':
            // * call previous button function.
            imgCurrentIndex = previousBtnFunction(imgCurrentIndex);

            // & enable & disable [next][previous] buttons.
            if (imgCurrentIndex === imagesQuantity) nextBtn.disabled = true; else nextBtn.disabled = false;
            if (imgCurrentIndex === 1) previousBtn.disabled = true; else previousBtn.disabled = false;
            break;
    }
}

// * slide show button function.
function slideShowBtnFunction() {

    // & enable [stop] & disable [next][previous][slide show] buttons.
    stopBtn.disabled = false;
    slideShowBtn.disabled = true;
    nextBtn.disabled = true;
    previousBtn.disabled = true;

    function sliding() {

        // ^ make sure that when index reach imagesQuantity will be 1.
        imgCurrentIndex++;
        if (imgCurrentIndex > imagesQuantity) imgCurrentIndex = 1;

        img.setAttribute('src', editImagePath(img, imgCurrentIndex));

        // ! ensure image is changed.
        console.log('image: ' + imgCurrentIndex);
    }

    slidingInterval = setInterval(sliding, 1000);

    // ! check image index after slide show button event.
    console.log('index after slide show button event: ' + imgCurrentIndex);
}

// * stop button function.
function stopBtnFunction() {

    // * clear setInterval of slideShowBtnFunction.
    clearInterval(slidingInterval);

    // & enable [stop] & disable [next][previous][slide show] buttons.
    stopBtn.disabled = true;
    slideShowBtn.disabled = false;
    // & enable & disable [next][previous] buttons.
    if (imgCurrentIndex === imagesQuantity) nextBtn.disabled = true; else nextBtn.disabled = false;
    if (imgCurrentIndex === 1) previousBtn.disabled = true; else previousBtn.disabled = false;

    // ! check image index after stop button event.
    console.log('index after stop button event: ' + imgCurrentIndex);

}






















// * next button function.
function nextBtnFunction(imgCurrentIndex) {
    if (imgCurrentIndex < imagesQuantity) {
        // img.setAttribute('src', img.getAttribute('src').split('.')[0].split('/')[0] + '/' + (++imgCurrentIndex) + '.jpg');
        img.setAttribute('src', editImagePath(img, ++imgCurrentIndex));

        // ! ensure image is changed.
        console.log('next image.');
    }
    // ! check image index after next button event.
    console.log('index after next button event: ' + imgCurrentIndex);
    return imgCurrentIndex;
}

// * previous button function.
function previousBtnFunction(imgCurrentIndex) {
    if (imgCurrentIndex > 1) {
        img.setAttribute('src', editImagePath(img, --imgCurrentIndex));
        // ! ensure image is changed.
        console.log('previous image.');
    }
    // ! check image index after previous button event.
    console.log('index after previous button event: ' + imgCurrentIndex);
    return imgCurrentIndex;
}
























// ! ================================================================>

// // * get image tag from html tags.
// var img = document.getElementById('image');                     // ^ image tag
// // * get number of images in our gallery folder.
// var imagesQuantity = 6;

// // * get image index from Image tag.
// // ^ we use iterable naming for our gallery images...[images gallery folder contains 1.jpg, 2.jpg...]
// var imgCurrentIndex = parseInt(img.getAttribute('src').split('/')[1].split('.')[0]);

// // * edit image paths based on indices.
// function editImagePath(imgTag, index) {
//     return imgTag.getAttribute('src').split('.')[0].split('/')[0] + '/' + (index) + '.jpg';
// }

// // * get buttons tags from html tags.
// var btnGroup = document.getElementById('btn-group');            // * all buttons
// var nextBtn = document.getElementById('nextBtn');               // ^ next button
// var previousBtn = document.getElementById('previousBtn');       // ^ previous button
// var slideShowBtn = document.getElementById('slideShowBtn');     // ^ slide show button
// var stopBtn = document.getElementById('stopBtn');               // ^ stop button

// // & disable [STOP] & [PREVIUOS] buttons.
// previousBtn.disabled = true;
// stopBtn.disabled = true;








// // * add Event Listener to button group.
// btnGroup.addEventListener('click', btnGroupFunctions);




// // * Event Listener function.
// // function btnGroupFunctions(event) {
// function btnGroupFunctions(event, callback) {
//     console.log(callback);
//     // ! check image index before event.
//     console.log('index before event: ' + imgCurrentIndex);

//     // * which button is clicked? then calling its function & get upadted image index and update its variable [imgCurrentIndex].
//     switch (event.target.id) {
//         case 'nextBtn':
//             // * call next button function.
//             imgCurrentIndex = nextBtnFunction(imgCurrentIndex);

//             // & enable & disable [next][previous] buttons.
//             if (imgCurrentIndex === imagesQuantity) nextBtn.disabled = true; else nextBtn.disabled = false;
//             if (imgCurrentIndex === 1) previousBtn.disabled = true; else previousBtn.disabled = false;
//             break;

//         case 'slideShowBtn':
//             // * call slide show button function.
//             // imgCurrentIndex = slideShowBtnFunction(imgCurrentIndex);
//             imgCurrentIndex = slideShowBtnFunction(imgCurrentIndex, callback);
//             break;

//         case 'stopBtn':
//             // * call stop button function.
//             // ^ no update, no assign.
//             imgCurrentIndex = stopBtnFunction(imgCurrentIndex);
//             break;

//         case 'previousBtn':
//             // * call previous button function.
//             imgCurrentIndex = previousBtnFunction(imgCurrentIndex);

//             // & enable & disable [next][previous] buttons.
//             if (imgCurrentIndex === imagesQuantity) nextBtn.disabled = true; else nextBtn.disabled = false;
//             if (imgCurrentIndex === 1) previousBtn.disabled = true; else previousBtn.disabled = false;
//             break;
//     }
// }

// // * next button function.
// function nextBtnFunction(imgCurrentIndex) {
//     if (imgCurrentIndex < imagesQuantity) {
//         // img.setAttribute('src', img.getAttribute('src').split('.')[0].split('/')[0] + '/' + (++imgCurrentIndex) + '.jpg');
//         img.setAttribute('src', editImagePath(img, ++imgCurrentIndex));

//         // ! ensure image is changed.
//         console.log('next image.');
//     }
//     // ! check image index after next button event.
//     console.log('index after next button event: ' + imgCurrentIndex);
//     return imgCurrentIndex;
// }

// // * previous button function.
// function previousBtnFunction(imgCurrentIndex) {
//     if (imgCurrentIndex > 1) {
//         img.setAttribute('src', img.getAttribute('src').split('.')[0].split('/')[0] + '/' + (--imgCurrentIndex) + '.jpg');
//         // ! ensure image is changed.
//         console.log('previous image.');
//     }
//     // ! check image index after previous button event.
//     console.log('index after previous button event: ' + imgCurrentIndex);
//     return imgCurrentIndex;
// }

// // * slide show button function.
// // function slideShowBtnFunction(imgCurrentIndex) {
// function slideShowBtnFunction(imgCurrentIndex, callback) {

//     // & enable [stop] & disable [next][previous][slide show] buttons.
//     stopBtn.disabled = false;
//     slideShowBtn.disabled = true;
//     nextBtn.disabled = true;
//     previousBtn.disabled = true;

//     function sliding() {

//         // ^ make sure that indeses between 1 to 5, and when it reach imagesQuantity will be 1.
//         if (imgCurrentIndex < imagesQuantity) {
//             // img.setAttribute('src', img.getAttribute('src').split('.')[0].split('/')[0] + '/' + (++imgCurrentIndex) + '.jpg');
//             img.setAttribute('src', editImagePath(img, ++imgCurrentIndex));
//             // ! ensure image is changed.
//             console.log('image: ' + imgCurrentIndex);
//         }

//         else {
//             imgCurrentIndex = 1;
//             img.setAttribute('src', editImagePath(img, imgCurrentIndex));

//             // ! ensure image is changed.
//             console.log('image: ' + imgCurrentIndex);
//         }
//         // Check if a callback function is provided and call it with the updated imgCurrentIndex
//         if (typeof callback === 'function') {
//             callback(imgCurrentIndex);
//         }
//     }

//     slidingInterval = setInterval(
//         function () {
//             sliding();
//             return imgCurrentIndex;

//         }, 1000);

//     // ! check image index after slide show button event.
//     console.log('index after slide show button event: ' + imgCurrentIndex);
//     return imgCurrentIndex;

// }

// // * stop button function.
// function stopBtnFunction(imgCurrentIndex) {

//     // * clear setInterval of slideShowBtnFunction.
//     clearInterval(slidingInterval);

//     // & enable [stop] & disable [next][previous][slide show] buttons.
//     stopBtn.disabled = true;
//     slideShowBtn.disabled = false;
//     // & enable & disable [next][previous] buttons.
//     if (imgCurrentIndex === imagesQuantity) nextBtn.disabled = true; else nextBtn.disabled = false;
//     if (imgCurrentIndex === 1) previousBtn.disabled = true; else previousBtn.disabled = false;

//     // ! check image index after stop button event.
//     console.log('index after stop button event: ' + imgCurrentIndex);

//     return imgCurrentIndex;
// }





