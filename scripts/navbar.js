
document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname; 
    document.querySelectorAll('nav a').forEach(link => {
        if (path.includes(link.getAttribute('href').replace('.html',''))) {
            link.classList.add('bg-indigo-600', 'text-white');
            link.classList.remove('bg-white', 'text-black');
        } else {
            link.classList.remove('bg-indigo-600', 'text-white');
            link.classList.add('bg-white', 'text-black');
        }
    });
});
