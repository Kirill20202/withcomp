


const menuButton = document.getElementById('nav_img');
const menu = document.getElementById('nav');

const toggles = document.querySelectorAll('.themeToggle');
const body = document.body;

// Функция для переключения видимости меню
function toggleMenu() {
    if (menu.style.animation = 'anis 0.5s forwards') {
		menu.style.animation = 'ani 0.5s forwards';
    } else {
		menu.style.animation = 'ani 0.5s forwards';
    }
}

// Обработчик нажатия на кнопку
menuButton.addEventListener('click', function(event) {
    event.stopPropagation(); // Останавливаем всплытие события
    toggleMenu();
});

// Обработчик нажатия на документ
document.addEventListener('click', function(event) {
    // Проверяем, находится ли клик вне меню и кнопки
    if (!menu.contains(event.target) && event.target !== menuButton & menu.style.animation == '0.5s ease 0s 1 normal forwards running ani') {
		menu.style.animation = 'anis 0.5s forwards';
    }
});


// Функция для синхронизации состояния переключателей
function syncToggles(checked) {
    toggles.forEach(toggle => {
        toggle.checked = checked;
    });
}

// Проверяем сохраненную тему в localStorage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
    body.classList.remove('light-theme');
    syncToggles(true);
} else {
    body.classList.add('light-theme');
    body.classList.remove('dark-theme');
    syncToggles(false);
}

// Обработчик события для всех переключателей
toggles.forEach(toggle => {
    toggle.addEventListener('change', () => {
        const isChecked = toggle.checked;
        syncToggles(isChecked);
        if (isChecked) {
            body.classList.add('dark-theme');
            body.classList.remove('light-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.add('light-theme');
            body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
        }
    });
});