import { isWebp } from "./libs/webpImg.js";
isWebp();

import { burger } from "./libs/burger.js";
burger('burger-content');

if (document.title == "Контакты") {
    const form = document.querySelector("#contact-form");
    form.addEventListener("input", inputHandler);
    const inputArr = Array.from(form);
    const validIputArr = [];
    inputArr.forEach(element => {
        if (element.hasAttribute("data-reg")) {
            element.setAttribute("is-valid", "0");
            validIputArr.push(element);
        }
    });

    function buttonHandler(e) {
        const isAllValid = [];
        validIputArr.forEach((el) => {
            isAllValid.push(el.getAttribute("is-valid"));
        });
        let temp = 0;
        for (let i = 0; i < isAllValid.length; i++) {
            if (isAllValid[i] == 0) {
                temp++;
            }
        }
        if (temp == 0) {
            const checkbox = document.querySelector('#form-write-to-us-checkbox');
            if (checkbox.checked) {
                const capture = document.querySelector(".form-write-to-us__capture");
                const captureSrc = capture.getAttribute("src");
                const captureNumber = parseInt(captureSrc.match(/\d+/)) - 1;
                const inputCaptureValue = document.querySelector("#input-capture").value;
                if (inputCaptureValue !== captureArr[captureNumber]) {
                    e.preventDefault();
                    alert("Капча введена неправильно!");
                }
            } else {
                document.querySelector(".checkbox__text").style.color = "red";
                e.preventDefault();
            }
        } else {
            e.preventDefault();
        }
    }

    const submitBtn = document.querySelector(".form-write-to-us__btn");
    submitBtn.addEventListener("click", buttonHandler);

    function inputHandler({ target }) {
        const toolTip = target.previousElementSibling;
        if (target.hasAttribute("data-reg")) {
            inputCheck(target, toolTip);
        }
    }

    function inputCheck(el, toolTip) {
        const inputValue = el.value;
        const inputReg = el.getAttribute("data-reg");
        const inputName = el.getAttribute("name");
        const reg = new RegExp(inputReg);
        if (reg.test(inputValue)) {
            el.style.border = "1px solid rgb(0, 196, 0)";
            el.setAttribute("is-valid", "1");
            toolTip.classList.remove("active");

        } else {
            el.style.border = "1px solid rgb(255, 0, 0)";
            el.setAttribute("is-valid", "0");
            toolTip.classList.add("active");
        }
        if (inputName == "name" && inputValue.length < 2) {
            el.style.border = "1px solid rgb(255, 0, 0)";
            el.setAttribute("is-valid", "0");
            toolTip.classList.add("active");
        }
    }
    const captureArr = ["3blHDas", "75NP2DW", "B2v7KLp", "dTaFkWk", "m5r2bCz", "pRbwf3L", "WRZSR5B", "z2bD6Pe", "uZrTGTv", "rmUMpgF"];
    const refreshBtn = document.querySelector(".svg-refresh");
    refreshBtn.addEventListener("click", refreshCapture);

    function refreshCapture() {
        const capture = refreshBtn.previousElementSibling;
        let captureSrc = capture.getAttribute("src");
        let captureNumber = parseInt(captureSrc.match(/\d+/));
        let newCaptureNumber = String(captureNumber + 1);
        captureNumber = String(captureNumber);
        if (newCaptureNumber == '11') {
            newCaptureNumber = '1';
        }
        captureSrc = captureSrc.replace(captureNumber, newCaptureNumber);
        capture.setAttribute("src", captureSrc);
        capture.style.width = "100px";
    }
}




// import "./libs/inputMask.js";
// const inputmask = window.Inputmask;


// import {formPopup} from "./libs/popupForm.js"
// formPopup(openBtns, fromBG, form, formBody);


// import {blurElements} from "./libs/blurElements.js";
// blurElements();


// import {isMobile} from "./libs/isMobile.js";
// if (isMobile.any()) {
//     document.body.classList.add('_mobile');
// } else {
//     document.body.classList.add('_pc');
// }


//import Swiper, { Navigation, Pagination } from 'swiper';
//const swiper = new Swiper();

function openSelect(selectClass) {
    const select = document.querySelector(`.${selectClass}`);
    select.addEventListener("click", () => {
        select.classList.toggle(`${selectClass}--active`);
    });

    document.addEventListener('click', function (event) {
        if (!select.contains(event.target)) {
            select.classList.remove(`${selectClass}--active`);
        }
    });
}

function selectItem(selectableItem) {
    const allItemSelect = document.querySelectorAll(`.${selectableItem}`);
    allItemSelect[0].classList.add(`${selectableItem}--active`);
    for (let i = 0; i < allItemSelect.length; i++) {
        allItemSelect[i].setAttribute("order-attr", i);
        allItemSelect[i].addEventListener("click", () => {
            const clickItemAttr = allItemSelect[i].getAttribute("order-attr");
            const activeItem = document.querySelector(`.${selectableItem}--active`);
            activeItem.setAttribute("order-attr", clickItemAttr);
            activeItem.style.order = clickItemAttr;
            activeItem.classList.remove(`${selectableItem}--active`);
            allItemSelect[i].setAttribute("order-attr", 0);
            allItemSelect[i].style.order = 0;
            allItemSelect[i].classList.add(`${selectableItem}--active`);
        });
    }
}

if (document.title == "Акции") {
    openSelect("sort-filters__list");
    selectItem("sort-filters__item");
    openSelect("items-filters__list");
    selectItem("items-filters__item");
}

import { pagination } from "./libs/pagination.js";
pagination(".discounts__list", ".discounts__item", 10);