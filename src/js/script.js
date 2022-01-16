import { isWebp } from "./libs/webpImg.js";
isWebp();

import { burger } from "./libs/burger.js";
burger('burger-content');

import { books } from "./books.js";

let basketProducts = [];

if (document.title == "Контакты") {
    activeMenuLink("Контакты");
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

function searchBooks(val, items, correctitems, className, classWrapper, paginationCount = 6) {
    if (val != "") {
        items.forEach(item => {
            if (item.querySelector(`.${className}__content`).querySelector(`.${className}__title`).innerText.toLowerCase().search(val) != -1) {
                correctitems.push(item);
            } else {

            }
        });

        const lists = document.querySelectorAll(`.${className}__list`);
        lists.forEach(list => {
            list.parentNode.removeChild(list);
        });

        const pageGroup = document.querySelector(".page-group");
        if (pageGroup != null) {
            pageGroup.parentNode.removeChild(pageGroup);
        }

        document.querySelector(`.${classWrapper}`).innerHTML = `<ul class="${className}__list"></ul>`;
        for (let i = 0; i < correctitems.length; i++) {
            document.querySelector(`.${className}__list`).append(correctitems[i]);
        }
        pagination(`.${className}__list`, `.${className}__item`, paginationCount);
    } else {
        const lists = document.querySelectorAll(`.${className}__list`);
        lists.forEach(list => {
            list.parentNode.removeChild(list);
        });

        const pageGroup = document.querySelector(".page-group");
        if (pageGroup != null) {
            pageGroup.parentNode.removeChild(pageGroup);
        }

        document.querySelector(`.${classWrapper}`).innerHTML = `<ul class="${className}__list"></ul>`;
        for (let i = 0; i < items.length; i++) {
            document.querySelector(`.${className}__list`).append(items[i]);
        }
        pagination(`.${className}__list`, `.${className}__item`, paginationCount);
    }
}


// import "./libs/inputMask.js";
// const inputmask = window.Inputmask;


// import {formPopup} from "./libs/popupForm.js"
// formPopup(openBtns, fromBG, form, formBody);


import { blurElements } from "./libs/blurElements.js";
blurElements();


import { isMobile } from "./libs/isMobile.js";
if (isMobile.any()) {
    document.body.classList.add('_mobile');
} else {
    document.body.classList.add('_pc');
}


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


import { pagination } from "./libs/pagination.js";


function catalogMenu() {
    const catalogBtn = document.querySelector(".catalog__btn");
    const leftMenu = document.querySelector(".left-menu");
    catalogBtn.addEventListener("click", () => {
        catalogBtn.classList.toggle("catalog__btn--active");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        leftMenu.classList.toggle("left-menu--active");
        document.body.classList.toggle("_lock");
    });
}

function paginationFilter(filtersLinks) {
    filtersLinks.forEach(link => {
        link.addEventListener("click", () => {
            const discountsListStart = document.querySelector(".catalog-group-content__list");
            const discountsWrapper = document.querySelector(".catalog-group-content");
            const discountsItems = document.querySelectorAll(".catalog-group-content__item");
            const discountLists = document.querySelectorAll(".catalog-group-content__list");
            discountLists.forEach(element => {
                element.parentNode.removeChild(element);
            });
            const pageGroup = document.querySelector(".page-group");
            if (pageGroup != null) {
                pageGroup.parentNode.removeChild(pageGroup);
            }

            for (let i = 0; i < discountsItems.length; i++) {
                discountsListStart.append(discountsItems[i]);
            }

            discountsWrapper.append(discountsListStart);
            pagination(".catalog-group-content__list", ".catalog-group-content__item", link.innerText);

            if (discountsListStart.classList.contains("catalog-group-content__list_column")) {
                const temp = document.querySelectorAll(".catalog-group-content__list");
                temp.forEach(element => {
                    if (!element.classList.contains("catalog-group-content__list_column")) {
                        element.classList.add("catalog-group-content__list_column");
                    }
                });
            }
        });
    });
}

function sortFilter(sortFiltersLink, books, view) {
    sortFiltersLink.forEach(link => {
        link.addEventListener("click", () => {
            const discountsListStart = document.querySelector(".catalog-group-content__list");
            const discountsItems = document.querySelectorAll(".catalog-group-content__item");
            const newBooksGroup = sortBooks(link.innerText, books);
            const discountLists = document.querySelectorAll(".catalog-group-content__list");
            discountLists.forEach(element => {
                element.parentNode.removeChild(element);
            });
            const pageGroup = document.querySelector(".page-group");
            if (pageGroup != null) {
                pageGroup.parentNode.removeChild(pageGroup);
            }

            for (let i = 0; i < discountsItems.length; i++) {
                discountsListStart.append(discountsItems[i]);
            }

            createbooksCatalog(newBooksGroup, "catalog-group-content", view);
            const itemFilterLink = document.querySelector(".items-filters__item--active");
            const itemFilterLinkValue = Number(itemFilterLink.querySelector(".items-filters__link").innerText);

            pagination(".catalog-group-content__list", ".catalog-group-content__item", itemFilterLinkValue);

            if (discountsListStart.classList.contains("catalog-group-content__list_column")) {
                const temp = document.querySelectorAll(".catalog-group-content__list");
                temp.forEach(element => {
                    if (!element.classList.contains("catalog-group-content__list_column")) {
                        element.classList.add("catalog-group-content__list_column");
                    }
                });
            }
        });
    });
}

if (document.title == "Мир книг") {
    pagination(".world-of-books__list", ".world-of-books__item", 10);
    catalogMenu();
}

// Virtual — Модуль виртуальных слайдов
// Keyboard — Модуль управления клавиатурой
// Mousewheel — Модуль управления Mousewheel
// Navigation — Модуль навигации
// Pagination — Модуль разбивки на страницы
// Scrollbar — Модуль прокрутки
// Parallax — Модуль Parallax
// Zoom — Модуль масштабирования
// Lazy — ленивый модуль
// Controller — Модуль контроллера
// A11y — Модуль доступности
// History — История
// HashNavigation — Модуль навигации Hash
// Autoplay — Модуль автовоспроизведения
// EffectFade — Модуль Fade Effect
// EffectCube — Модуль эффектов куба
// EffectFlip — Модуль Flip Effect
// EffectCoverflow — Модуль эффектов Coverflow

import Swiper, { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, EffectFade]);

import { getBooksCatalog, getPrice, createbooksCatalog, sortBooks } from "./books.js";

if (document.title == "Главная") {
    catalogMenu();

    new Swiper('.kniginya-main-slider', {

        speed: 800,
        spaceBetween: 100,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },

        autoplay: {
            delay: 2000,
        },

        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
    });
    createbooksCatalog(books, "all-books", 1);
    pagination(".all-books__list", ".all-books__item", 6);

    new Swiper('.our-partners__slider', {

        speed: 500,
        spaceBetween: 20,

        navigation: {
            nextEl: '.swiper-button-next-partners',
            prevEl: '.swiper-button-prev-partners',
        },
        slidesPerView: 1,
        loop: true,
        loopPreventsSlide: 1,
        centeredSlides: true,

        breakpoints: {
            600: {
                slidesPerView: 3
            },
            1000: {
                slidesPerView: 5
            }
        }
    });

    const items = document.querySelectorAll(".all-books__item");
    document.querySelector(".search-box__input").oninput = function () {
        let val = this.value.trim().toLowerCase();
        let correctitems = [];
        searchBooks(val, items, correctitems, "all-books", "kniginya-main-catalog");
    };
}

function createCatalog(catalogName) {
    catalogMenu();
    let catalogBooks = getBooksCatalog(books, catalogName);
    createbooksCatalog(catalogBooks, "catalog-group-content", 2);
    pagination(".catalog-group-content__list", ".catalog-group-content__item", 6);

    openSelect("sort-filters__list");
    selectItem("sort-filters__item");
    openSelect("items-filters__list");
    selectItem("items-filters__item");

    const filtersLinks = document.querySelectorAll(".items-filters__item");
    paginationFilter(filtersLinks);

    const sortFiltersLink = document.querySelectorAll(".sort-filters__link");
    sortFilter(sortFiltersLink, catalogBooks, 2);

    const items = document.querySelectorAll(".catalog-group-content__item");
    document.querySelector(".search-box__input").oninput = function () {
        let val = this.value.trim().toLowerCase();
        let correctitems = [];
        const paginationCount = document.querySelector(".items-filters__item--active");
        let paginationLink = paginationCount.querySelector(".items-filters__link").innerText;
        paginationLink = Number(paginationLink);
        searchBooks(val, items, correctitems, "catalog-group-content", "catalog-group-content", paginationLink);
    };
    addProductsInBasket();
}

if (document.title == "Уникальные и коллекционные книги") {
    createCatalog("Уникальные и коллекционные книги");

    activeLeftMenuLink("Уникальные и коллекционные книги");
}
if (document.title == "Подержанные книги") {
    createCatalog("Подержанные книги");

    activeLeftMenuLink("Подержанные книги");
}
if (document.title == "Русская литература") {
    createCatalog("Русская литература");

    activeLeftMenuLink("Русская литература");
}
if (document.title == "Мировая классика") {
    createCatalog("Мировая классика");

    activeLeftMenuLink("Мировая классика");
}
if (document.title == "Зарубежная литература") {
    createCatalog("Зарубежная литература");

    activeLeftMenuLink("Зарубежная литература");
}
if (document.title == "Современная литература") {
    createCatalog("Современная литература");

    activeLeftMenuLink("Современная литература");
}
if (document.title == "История, философия, психология") {
    createCatalog("История, философия, психология");

    activeLeftMenuLink("История, философия, психология");
}
if (document.title == "Религия") {
    createCatalog("Религия");

    activeLeftMenuLink("Религия");
}
if (document.title == "Манга") {
    createCatalog("Манга");

    activeLeftMenuLink("Манга");
}
if (document.title == "Сборники стихов") {
    createCatalog("Сборники стихов");

    activeLeftMenuLink("Сборники стихов");
}
if (document.title == "Научная литература") {
    createCatalog("Научная литература");

    activeLeftMenuLink("Научная литература");
}
if (document.title == "Книги для школы") {
    createCatalog("Книги для школы");

    activeLeftMenuLink("Книги для школы");
}


if (document.title == "Акции") {
    activeMenuLink("Акции");
    openSelect("sort-filters__list");
    selectItem("sort-filters__item");
    openSelect("items-filters__list");
    selectItem("items-filters__item");

    let salesBooks = [];
    for (let i = 0; i < books.length; i++) {
        if (books[i].sale != 0) {
            salesBooks.push(books[i]);
        }
    }

    createbooksCatalog(salesBooks, "catalog-group-content", 3);
    pagination(".catalog-group-content__list", ".catalog-group-content__item", 8);

    const filtersLinks = document.querySelectorAll(".items-filters__item");
    paginationFilter(filtersLinks);

    const filterBtns = document.querySelectorAll(".view-filters__btn");

    filterBtns[0].addEventListener("click", () => {
        const discountsListActive = document.querySelectorAll(".catalog-group-content__list");
        for (let i = 0; i < discountsListActive.length; i++) {
            discountsListActive[i].classList.add("catalog-group-content__list_column");
        }
    });

    filterBtns[1].addEventListener("click", () => {
        const discountsListActive = document.querySelectorAll(".catalog-group-content__list");
        for (let i = 0; i < discountsListActive.length; i++) {
            discountsListActive[i].classList.remove("catalog-group-content__list_column");
        }
    });


    const sortFiltersLink = document.querySelectorAll(".sort-filters__link");
    sortFilter(sortFiltersLink, salesBooks, 3);

    const items = document.querySelectorAll(".catalog-group-content__item");
    document.querySelector(".search-box__input").oninput = function () {
        let val = this.value.trim().toLowerCase();
        let correctitems = [];
        const paginationCount = document.querySelector(".items-filters__item--active");
        let paginationLink = paginationCount.querySelector(".items-filters__link").innerText;
        paginationLink = Number(paginationLink);
        searchBooks(val, items, correctitems, "catalog-group-content", "catalog-group-content", paginationLink);
    };
}

function addProductsInBasket() {
    const basketBtns = document.querySelectorAll(".like-btn");
    basketBtns.forEach(basketBtn => {
        basketBtn.addEventListener("click", () => {
            const bookName = basketBtn.parentElement.parentElement.parentElement.querySelector(".catalog-group-content__title").innerText;
            for (let i = 0; i < books.length; i++) {
                let count = 0;
                if (bookName == books[i].nameOfTheBook) {
                    for (let j = 0; j < basketProducts.length; j++) {
                        if (basketProducts[j].nameOfTheBook == books[i].nameOfTheBook) {
                            count = 1;
                            document.querySelector(".popup-wrapper-repeat-product").classList.add("popup-wrapper--active");
                            setTimeout(() => document.querySelector(".popup-wrapper-repeat-product").classList.remove("popup-wrapper--active"), 1500);
                        }
                    }
                    if (count == 0) {
                        basketProducts.push(books[i]);
                        document.querySelector(".popup-wrapper-add-product").classList.add("popup-wrapper--active");
                        setTimeout(() => document.querySelector(".popup-wrapper-add-product").classList.remove("popup-wrapper--active"), 1500);
                    }
                }
            }
            document.querySelector(".header-icons__span").innerText = basketProducts.length;
        });
    });
}

if (document.title == "Акции") {
    const basketBtns = document.querySelectorAll(".like-btn");
    basketBtns.forEach(basketBtn => {
        basketBtn.addEventListener("click", () => {
            const bookName = basketBtn.parentElement.parentElement.parentElement.parentElement.querySelector(".catalog-group-content__title").innerText;
            for (let i = 0; i < books.length; i++) {
                let count = 0;
                if (bookName == books[i].nameOfTheBook) {
                    for (let j = 0; j < basketProducts.length; j++) {
                        if (basketProducts[j].nameOfTheBook == books[i].nameOfTheBook) {
                            count = 1;
                            document.querySelector(".popup-wrapper-repeat-product").classList.add("popup-wrapper--active");
                            setTimeout(() => document.querySelector(".popup-wrapper-repeat-product").classList.remove("popup-wrapper--active"), 1500);
                        }
                    }
                    if (count == 0) {
                        basketProducts.push(books[i]);
                        document.querySelector(".popup-wrapper-add-product").classList.add("popup-wrapper--active");
                        setTimeout(() => document.querySelector(".popup-wrapper-add-product").classList.remove("popup-wrapper--active"), 1500);
                    }
                }
            }
            document.querySelector(".header-icons__span").innerText = basketProducts.length;
        });
    });
}

if (document.title == "Корзина") {
    createBasketProducts();

    const removeBts = document.querySelectorAll(".basket-content__close");

    removeBts.forEach(btn => {
        btn.addEventListener("click", () => {
            const basketItems = document.querySelectorAll(".basket-content__item");
            if (basketItems.length == 1) {
                document.querySelector(".basket-content__list").remove();
                document.querySelector(".basket-content-bottom").remove();
                document.querySelector(".basket-content").innerHTML += "<p class='basket-content__text'>Корзина пуста</p>";
                document.querySelector(".header-icons__span").innerText = 0;
            }

            let totalPrice = document.querySelector(".basket-content-bottom__price").innerText;
            totalPrice = Number(totalPrice.replace(" ₽", ""));

            let itemPrice = btn.parentElement.parentElement.querySelector(".basket-content__price").innerText;
            itemPrice = Number(itemPrice.replace(" ₽", ""));

            let newPrice = totalPrice - itemPrice;
            document.querySelector(".basket-content-bottom__price").innerText = `${newPrice} ₽`;

            btn.parentElement.parentElement.parentNode.removeChild(btn.parentElement.parentElement);

            let productCount = document.querySelector(".header-icons__span").innerText;
            productCount = Number(productCount);
            productCount--;
            document.querySelector(".header-icons__span").innerText = productCount;
        });
    });

    const incrBtns = document.querySelectorAll(".basket-content__incr");
    incrBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const bookName = btn.parentElement.parentElement.parentElement.querySelector(".basket-content__subtitle").innerText;
            let bookCount = 0;
            let startPrice = 0;
            for (let i = 0; i < basketProducts.length; i++) {
                if (basketProducts[i].nameOfTheBook == bookName) {
                    bookCount = basketProducts[i].count;
                    startPrice = basketProducts[i].price;
                }
            }
            let currentBookCount = btn.parentElement.parentElement.parentElement.querySelector(".basket-content__count").innerText;
            currentBookCount = Number(currentBookCount);
            if (currentBookCount < bookCount) {
                currentBookCount++;
                btn.parentElement.parentElement.parentElement.querySelector(".basket-content__count").innerText = currentBookCount;
                let currentPrice = btn.parentElement.parentElement.parentElement.querySelector(".basket-content__price").innerText;
                currentPrice = Number(currentPrice.replace(" ₽", ""));
                currentPrice += startPrice;
                btn.parentElement.parentElement.parentElement.querySelector(".basket-content__price").innerText = `${currentPrice} ₽`;

                let totalPrice = document.querySelector(".basket-content-bottom__price").innerText;
                totalPrice = Number(totalPrice.replace(" ₽", ""));
                totalPrice += startPrice;
                document.querySelector(".basket-content-bottom__price").innerText = `${totalPrice} ₽`;
            } else {
                document.querySelector(".popup-wrapper-basket-product").querySelector("span").innerText = bookCount;
                document.querySelector(".popup-wrapper-basket-product").classList.add("popup-wrapper--active");
                setTimeout(() => document.querySelector(".popup-wrapper-basket-product").classList.remove("popup-wrapper--active"), 1500);
            }
        });
    });

    const decrBtns = document.querySelectorAll(".basket-content__decr");
    decrBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const bookName = btn.parentElement.parentElement.parentElement.querySelector(".basket-content__subtitle").innerText;
            let bookCount = 0;
            let startPrice = 0;
            for (let i = 0; i < basketProducts.length; i++) {
                if (basketProducts[i].nameOfTheBook == bookName) {
                    bookCount = basketProducts[i].count;
                    startPrice = basketProducts[i].price;
                }
            }
            let currentBookCount = btn.parentElement.parentElement.parentElement.querySelector(".basket-content__count").innerText;
            currentBookCount = Number(currentBookCount);
            if (currentBookCount > 1) {
                currentBookCount--;
                btn.parentElement.parentElement.parentElement.querySelector(".basket-content__count").innerText = currentBookCount;
                let currentPrice = btn.parentElement.parentElement.parentElement.querySelector(".basket-content__price").innerText;
                currentPrice = Number(currentPrice.replace(" ₽", ""));
                currentPrice -= startPrice;
                btn.parentElement.parentElement.parentElement.querySelector(".basket-content__price").innerText = `${currentPrice} ₽`;

                let totalPrice = document.querySelector(".basket-content-bottom__price").innerText;
                totalPrice = Number(totalPrice.replace(" ₽", ""));
                totalPrice -= startPrice;
                document.querySelector(".basket-content-bottom__price").innerText = `${totalPrice} ₽`;
            }
        });
    });
}

function createBasketProducts() {
    basketProducts = [books[2], books[5], books[7]];

    document.querySelector(".header-icons__span").innerText = basketProducts.length;
    if (basketProducts.length != 0) {
        document.querySelector(".basket-content").innerHTML = ("<ul class='basket-content__list'></ul>");

        for (let i = 0; i < basketProducts.length; i++) {
            document.querySelector(".basket-content__list").innerHTML += "<li class='basket-content__item'></li>";
        }

        const basketContentItems = document.querySelectorAll(".basket-content__item");
        let allPrice = 0;
        for (let i = 0; i < basketContentItems.length; i++) {
            basketContentItems[i].innerHTML += `<img class="basket-content__img" src="${basketProducts[i].src[0]}" alt="Изображение книги ${basketProducts[i].nameOfTheBook}">`;
            basketContentItems[i].innerHTML += `<h4 class="basket-content__subtitle">${basketProducts[i].nameOfTheBook}</h4>`;
            basketContentItems[i].innerHTML += "<div class='basket-content__main'></div>"
            basketContentItems[i].querySelector(".basket-content__main").innerHTML += "<div class='basket-content__count-group'></div>";

            basketContentItems[i].querySelector(".basket-content__count-group").innerHTML += "<button class='basket-content__decr'>-</button>";
            basketContentItems[i].querySelector(".basket-content__count-group").innerHTML += "<span class='basket-content__count'>1</span>";
            basketContentItems[i].querySelector(".basket-content__count-group").innerHTML += "<button class='basket-content__incr'>+</button>";

            basketContentItems[i].querySelector(".basket-content__main").innerHTML += `<span class='basket-content__price'>${getPrice(basketProducts[i].price, basketProducts[i].sale)} ₽</span>`;
            basketContentItems[i].querySelector(".basket-content__main").innerHTML += "<span class='basket-content__close'></span>";
            allPrice += getPrice(basketProducts[i].price, basketProducts[i].sale);
        }

        document.querySelector(".basket-content").innerHTML += "<div class='basket-content-bottom'></div>";
        document.querySelector(".basket-content-bottom").innerHTML += "<div class='basket-content-bottom__price-group'></div>";
        document.querySelector(".basket-content-bottom__price-group").innerHTML += "<span class='basket-content-bottom__caption'>Итого:</span>";
        document.querySelector(".basket-content-bottom__price-group").innerHTML += `<span class='basket-content-bottom__price'>${allPrice} ₽</span>`;
        document.querySelector(".basket-content-bottom").innerHTML += "<button class='basket-content-bottom__btn'>Оформить заказ</button>";
    } else {
        document.querySelector(".basket-content").innerHTML += "<p class='basket-content__text'>Корзина пуста</p>";
    }
}

if (document.title == "О нас") {
    activeMenuLink("О нас");
}

if (document.title == "Оплата и доставка") {
    activeMenuLink("Оплата и доставка");
}

if (document.title == "Мир книг") {
    activeMenuLink("Мир Книг");
}

if (document.title == "Переплет книг") {
    activeMenuLink("Индивидуальный переплет");
}

function activeMenuLink(title) {
    const menuLinks = document.querySelectorAll(".menu__link");
    menuLinks.forEach(link => {
        if (link.innerText == title) {
            if (document.body.classList.contains("_pc")) {
                link.style.color = "#FF8A50";
                link.style.pointerEvents = "none";
            } else {
                link.style.color = "black";
                link.style.pointerEvents = "none";
            }
        }
    });
}

function activeLeftMenuLink(title) {
    const leftMenuLinks = document.querySelectorAll(".left-menu__link");
    leftMenuLinks.forEach(link => {
        if (link.innerText == title) {
            if (document.body.classList.contains("_pc")) {
                link.style.color = "white";
                const svgPath = link.querySelectorAll("path");
                svgPath.forEach(element => {
                    element.style.fill = "white";
                });
                link.parentElement.style.backgroundColor = "#FF8A50";
                link.style.paddingRight = "10px";
            } else {
                link.style.paddingRight = "10px";
                link.parentElement.style.display = "inline-flex";
                link.parentElement.style.backgroundColor = "black";
            }
        }
    });
}