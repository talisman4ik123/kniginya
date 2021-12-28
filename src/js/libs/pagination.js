function createPageNav (pageCount, list) {
    const listWrapper = document.querySelector(list).parentElement;
    listWrapper.innerHTML += "<div class = 'page-group'> <ul class = 'page-group__list'></ul> </div>";
    const pageList = document.querySelector('.page-group__list');
    for (let i = 0; i < pageCount; i++) {
        if (i == 0) {
            pageList.innerHTML += `<li class = 'page-group__item page-group__item--active'> <a class = "page-group__link">${i+1}</a> </li>`;
            continue;
        }
        pageList.innerHTML += `<li class = 'page-group__item'> <a class = "page-group__link">${i+1}</a> </li>`;
    }
}

function createPage (pageCount, list) {
    const listWrapper = document.querySelector(list).parentElement;
    list = list.split('.').join('');
    for (let i=0; i < pageCount-1; i++) {
        listWrapper.innerHTML += `<ul class = ${list}></ul>`;
    }
}

function addItemInPage (list, items, itemCount) {
    const lists = document.querySelectorAll(list);
    const arrayList = Array.from(items);
    for (let i=0; i<lists.length; i++) {
        let count = 0;
        if (itemCount < arrayList.length) {
            for (let k=0; k<itemCount; k++) {
                let temp = 0;
                lists[i].append(arrayList[temp]);
                count++;
                arrayList.shift();
            }
        }
        if (count == itemCount) {
            continue;
        }
        if (itemCount >= arrayList.length && arrayList.length != 0) {
            for (let k=0; k<arrayList.length; k++) {
                let temp = 0;
                lists[i].append(arrayList[temp]);
                arrayList.shift();
            }
        }
    }
}

function clickBtn(list) {
    const btns = document.querySelectorAll('.page-group__link');
    btns.forEach(btn => {
        btn.addEventListener("click", () => {
            for (let i=0; i<btns.length; i++) {
                if (btns[i].parentElement.classList.contains("page-group__item--active")) {
                    btns[i].parentElement.classList.remove("page-group__item--active");
                }
            }
            const lists = document.querySelectorAll(list);
            const listName = list.split('.').join('');
            for (let i=0; i<lists.length; i++) {
                if (lists[i].classList.contains(`${listName}--active`)) {
                    lists[i].classList.remove(`${listName}--active`);
                }
            }

            btn.parentElement.classList.add("page-group__item--active");
            let count = 0;
            for (let i=0; i<btns.length; i++) {
                if (btns[i].parentElement.classList.contains("page-group__item--active")) {
                    count = i;
                }
            }
            for (let i=0; i<lists.length; i++) {
                if (i==count) {
                    lists[i].classList.add(`${listName}--active`);
                }
            }
            console.log(document.documentElement.scrollHeight);
        });
    });
}

function pagination (list, item, itemCount) {
    const items = document.querySelectorAll(item);
    document.querySelector(list).classList.add(`${list.split(".").join("")}--active`);
    if (itemCount < items.length) {
        const currentList = document.querySelector(list);
        for (let i = 0; i < items.length; i++) {
            let k = 0;
            currentList.children[k].remove();
        }
        const pageNumber = Math.ceil(items.length / itemCount);
        createPage(pageNumber, list);
        createPageNav(pageNumber, list);
        addItemInPage(list, items, itemCount);
        clickBtn(list);
    }
}