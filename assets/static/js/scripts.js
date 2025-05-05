document.addEventListener('DOMContentLoaded', () => {
    // Search bar functionality
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    searchButton.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query) {
            alert(`Searching for: ${query}`);
            // Implement search functionality here
        } else {
            alert('Please enter a search term.');
        }
    });

    // Profile dropdown toggle
    const profileButton = document.querySelector('.profile-button');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    profileButton.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', () => {
        dropdownMenu.style.display = 'none';
    });

    // Filter functionality
    const categoryFilter = document.getElementById('category-filter');
    const typeFilter = document.getElementById('type-filter');
    const minPriceInput = document.getElementById('min-price');
    const maxPriceInput = document.getElementById('max-price');
    const applyFiltersButton = document.getElementById('apply-filters');
    const assetCards = document.querySelectorAll('.asset-card');
    const spinner = document.createElement('div');
    spinner.className = 'loading-spinner';
    document.body.appendChild(spinner);

    applyFiltersButton.addEventListener('click', () => {
        spinner.style.display = 'block';

        setTimeout(() => {
            const selectedCategory = categoryFilter.value;
            const selectedType = typeFilter.value;
            const minPrice = parseFloat(minPriceInput.value) || 0;
            const maxPrice = parseFloat(maxPriceInput.value) || Infinity;

            assetCards.forEach(card => {
                const assetCategory = card.dataset.category;
                const assetType = card.dataset.type;
                const assetPrice = parseFloat(card.dataset.price);

                if (
                    (selectedCategory === '' || assetCategory === selectedCategory) &&
                    (selectedType === '' || assetType === selectedType) &&
                    assetPrice >= minPrice &&
                    assetPrice <= maxPrice
                ) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });

            spinner.style.display = 'none';
        }, 500); // Simulate loading delay
    });

    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';

    // Apply saved theme on page load
    if (currentTheme === 'dark') {
        document.body.classList.add('dark');
        themeToggle.querySelector('img').src = '/static/icons/sun-icon.svg';
    } else {
        document.body.classList.remove('dark');
        themeToggle.querySelector('img').src = '/static/icons/moon-icon.svg';
    }

    // Toggle theme on button click
    themeToggle.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark');
        themeToggle.querySelector('img').src = isDark
            ? '/static/icons/sun-icon.svg'
            : '/static/icons/moon-icon.svg';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });
});
