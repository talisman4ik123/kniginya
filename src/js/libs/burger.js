export function burger(menu) {
    const burgerBtn = document.querySelector('.burger');
    burgerBtn.addEventListener("click", () => {
        burgerBtn.classList.toggle("burger--active");
        document.body.classList.toggle("_lock");
        const menuList = document.querySelector(`.${menu}`);
        menuList.classList.toggle(`${menu}--active`);
    });
}