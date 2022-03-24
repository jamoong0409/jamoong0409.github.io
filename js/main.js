const toggleBtn = document.querySelector('.menu_small')
const menu = document.querySelector('.menu')

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});

