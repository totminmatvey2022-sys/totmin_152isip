const themeBtn = document.getElementById('theme-btn');
const body = document.body;
themeBtn.addEventListener('click', function() {
body.classList.toggle('dark');
if (body.classList.contains('dark')) {
themeBtn.textContent = 'Светлая тема';
} else {
themeBtn.textContent = 'Темная тема';
}
});