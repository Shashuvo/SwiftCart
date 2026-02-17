document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;
    document.querySelectorAll('nav a').forEach(link => {
        if (link.closest('footer')) {
            return;
        }
        const href = link.getAttribute('href');
        if (!href) {
            return;
        }
        link.classList.remove('bg-indigo-600', 'text-white');
        link.classList.add('bg-white', 'text-black');
        link.style.backgroundColor = '';
        link.style.color = '';
        if ((href === 'index.html' || href === '/') && (path === '/' || path === '/index.html' || path.endsWith('/'))) {
            link.classList.add('bg-indigo-600', 'text-white');
            link.classList.remove('bg-white', 'text-black');
            link.style.backgroundColor = '#4F46E5';
            link.style.color = 'white';
        }
        else if (href !== 'index.html' && href !== '/') {
            const hrefWithoutExt = href.replace('.html', '');
            const pathWithoutExt = path.replace('.html', '');
            if (pathWithoutExt === '/' + hrefWithoutExt ||
                pathWithoutExt.endsWith('/' + hrefWithoutExt) ||
                pathWithoutExt === hrefWithoutExt ||
                '/' + pathWithoutExt === '/' + hrefWithoutExt) {
                link.classList.add('bg-indigo-600', 'text-white');
                link.classList.remove('bg-white', 'text-black');
                link.style.backgroundColor = '#4F46E5';
                link.style.color = 'white';
            }
        }
    });
});
