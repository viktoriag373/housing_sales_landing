"use strict"
window.onload = function() {
    initCallMeDialog();
    initSingUpForViewingDialog();   
}


function initCallMeDialog() {
    let buttonsCall = document.querySelectorAll('.button_call');
    let modalDialogCallMe = document.querySelector('.modal_dialog_call_me');
    let modalDialogCallMeCloseButton = document.querySelector('.modal_dialog_call_me_close_button');

    buttonsCall.forEach(element => {
        element.onclick = openModalCallMe;
    });

    modalDialogCallMeCloseButton.onclick = closeModalCallMe;
    
    function openModalCallMe() {
        modalDialogCallMe.classList.add('modal_dialog_call_me_visible');
        // window.document.body.classList.add('disable_scroll');
    }

    function closeModalCallMe() {
        modalDialogCallMe.classList.remove('modal_dialog_call_me_visible');
        // window.document.body.classList.remove('disable_scroll');

    }
}

function initSingUpForViewingDialog() {
    let modalDialogSignUpForViewing = document.querySelector('.modal_dialog_sign_up_for_viewing');
    let firstFormButton = document.querySelector('.first_form_button');
    let modalDialogSignUpForViewingBodyButton = document.querySelector('.modal_dialog_sign_up_for_viewing_body_button');
    let modalDialogSignUpForViewingCloseButton = document.querySelector('.modal_dialog_sign_up_for_viewing_close_button');
    let firstFormInputName = document.querySelector('.first_form_input_name');
    let firstFormInputNumber = document.querySelector('.first_form_input_number');

    firstFormButton.onclick = checkValues;

    modalDialogSignUpForViewingBodyButton.onclick = closeModalSignUpForViewing;
    modalDialogSignUpForViewingCloseButton.onclick = closeModalSignUpForViewing;

    function checkValues() {
        let reg = /^[A-ZА-Я]*$/gi;
        if (firstFormInputName.value == '' || !reg.test(firstFormInputName.value)) {
            firstFormInputName.style.border = '2px solid red'; 
            return;  
        } else {
            firstFormInputName.style.border = 'none'; 
        }

        if (firstFormInputNumber.value == '' || isNaN(firstFormInputNumber.value)) {
            firstFormInputNumber.style.border = '2px solid red'; 
            return
        } else {
            firstFormInputName.style.border = 'none';
            openModalSignUpForViewing();
        }
    }

    function openModalSignUpForViewing() {
        modalDialogSignUpForViewing.classList.add('modal_dialog_sign_up_for_viewing_visible');
        // window.document.body.classList.add('disable_scroll');
    }

    function closeModalSignUpForViewing() {
        modalDialogSignUpForViewing.classList.remove('modal_dialog_sign_up_for_viewing_visible');
        // window.document.body.classList.remove('disable_scroll');

    }
}

