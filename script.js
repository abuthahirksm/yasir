function openMenu() {
    let menuEl = document.querySelector('.menu');
    menuEl.classList.remove('inactive');
}

function closeMenu() {
    let menuEl = document.querySelector('.menu');
    menuEl.classList.add('inactive');
}