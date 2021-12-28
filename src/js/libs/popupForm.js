let scrollbarWidth = (window.innerWidth - document.documentElement.clientWidth - 0.5) + "px";

function openForm (buttons, formBG, form) {
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            formBG.classList.add('active');
            form.classList.add('active');
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = scrollbarWidth;
            form.tabIndex = 0;
            form.focus();
        });
    });
}

function closeForm (formBG, form) {
    formBG.classList.remove('active');
    form.classList.remove('active');
    document.body.style.overflowY = 'scroll';
    document.body.style.paddingRight = 0;
}

function closeFormClickBG (formBG, form, Body) {
    document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
        if(e.target === Body) {
            closeForm(formBG, form);
            form.reset();
        }
    });
}

function closeFormClickBtn(formBG, form) {
    CloseBtns.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            closeForm(formBG, form);
            form.reset();
        });
    });
}

function submitFormBtn (formBG, form) {
    form.addEventListener('submit', () => {
        let formValidation = true;
        const formElements = form.querySelectorAll('*');
        formElements.forEach((element) => {
            if (element.classList.contains('form__input') && element.getAttribute("required") != null && element.value == '') {
                formValidation = false;
            }
            if (element.classList.contains('form__checkbox') && element.getAttribute("required") != null && !element.checked) {
                formValidation = false;
            }
            if (element.classList.contains('form__textarea') && element.getAttribute("required") != null && element.value == '') {
                formValidation = false;
            }
        });
        if (formValidation) {
            clearForm(form, formBG);
        }
    });
}

function clearForm(form, formBG) {
    closeForm(formBG, form);
    setTimeout(() => {  form.reset(); }, 2000);
}


function formPopup (openBtns, formBG, form, body) {
    openForm(openBtns, formBG, form);
    closeFormClickBG(formBG, form, body);
    closeFormClickBtn(formBG, form);
    submitFormBtn(formBG, form);
}

//закрывающие кнопки формы
const CloseBtns = document.querySelectorAll('.close-btn');