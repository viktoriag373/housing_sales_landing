"use strict"
window.onload = function() {
    initCallMeDialog();
    initSingUpForViewingDialog();   
    addScrollForMenuAnchors();
}

function initCallMeDialog() {
    let buttonsCall = document.querySelectorAll('.company_button_call');
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

function addScrollForMenuAnchors() {
    const ANIMATION_TIME = 1000;
    const FRAMES_COUNT = 50;
    // собираем все якоря
    const anchors = document.querySelectorAll('.menu a[href^="#"]');
    console.dir(anchors)
    anchors.forEach(function(item) {
        // каждому якорю присваиваем обработчик события
        item.addEventListener('click', function(e) {
            // убираем стандартное поведение
            e.preventDefault();
            // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
            let itemCoordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;
            scrollTo(itemCoordY, ANIMATION_TIME, FRAMES_COUNT);
        });
    })

    function scrollTo(coordY, animationTime, framesCount) {
        let scrollStep = coordY / framesCount;
        let scroller = setInterval(function() {
            if (scrollStep < Math.abs(window.pageYOffset - coordY)
                && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
                // скроллим на к-во пикселей, которое соответствует одному такту
                window.scrollBy(0, scrollStep);
            } else {
                // иначе добираемся до элемента и выходим из интервала
                window.scrollTo(0, coordY);
                clearInterval(scroller);
            }
            // время интервала равняется частному от времени анимации и к-ва кадров
        }, animationTime / framesCount);
    }
}
