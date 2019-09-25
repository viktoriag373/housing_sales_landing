"use strict"
window.onload = function() {
    var buttonsCall = document.querySelectorAll('.button_call');
    var modalDialogCallMe = document.querySelector('.modal_dialog_call_me');
    var modalDialogCallMeCloseButton = document.querySelector('.modal_dialog_call_me_close_button');

    buttonsCall.forEach(element => {
        element.onclick = openModal;
    });

    modalDialogCallMeCloseButton.onclick = closeModal;

    
    function openModal() {
        modalDialogCallMe.classList.add('modal_dialog_call_me_visible');
        window.document.body.classList.add('disable_scroll');
    }

    function closeModal() {
        modalDialogCallMe.classList.remove('modal_dialog_call_me_visible');
        window.document.body.classList.remove('disable_scroll');

    }


}