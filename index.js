//Dark mode button
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const button = document.getElementById('toggle-dark-mode');
    button.textContent=document.body.classList.contains("dark-mode") ? "modo claro":"modo oscuro";
}
// Añadir el event listener usando la función nombrada
document.getElementById('toggle-dark-mode').addEventListener('click', toggleDarkMode);