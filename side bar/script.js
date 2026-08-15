document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('.nav li');
    const sections = document.querySelectorAll('.section');
    const sidebar = document.querySelector('.sidebar');
    const hamburger = document.getElementById('hamburger');

    // Mostrar la sección activa y ocultar las demás
    links.forEach(link => {
        link.addEventListener('click', () => {
            const sectionId = link.getAttribute('data-section');
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === sectionId) {
                    section.classList.add('active');
                }
            });
            sidebar.classList.remove('active'); // Ocultar el menú al seleccionar
        });
    });

    // Mostrar o ocultar el sidebar al hacer clic en el hamburger
    hamburger.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });
});
