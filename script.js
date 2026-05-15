// Abre e fecha o menu hambúrguer no mobile
function toggleMenu() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
}

// Fecha o menu ao clicar em qualquer link dele
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        const nav = document.getElementById("nav");
        nav.classList.remove("active");
    });
});