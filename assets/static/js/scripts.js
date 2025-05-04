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
        dropdownMenu.classList.toggle('show');
    });

    document.addEventListener('click', () => {
        dropdownMenu.classList.remove('show');
    });

    // Filter functionality
    const categoryFilter = document.getElementById('category-filter');
    const typeFilter = document.getElementById('type-filter');
    const minPriceInput = document.getElementById('min-price');
    const maxPriceInput = document.getElementById('max-price');
    const applyFiltersButton = document.getElementById('apply-filters');
    const assetCards = document.querySelectorAll('.asset-card');

    applyFiltersButton.addEventListener('click', () => {
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
    });
});
