// Main JavaScript for GameAssetHub

// Sample data for demonstration
const sampleAssets = [
    {
        id: 1,
        title: "Fantasy Castle - Medieval Architecture",
        creator: "ArchitectStudio",
        price: 49.99,
        originalPrice: 69.99,
        image: "🏰",
        rating: 4.8,
        ratingCount: 156,
        badge: "sale",
        category: "buildings-architecture"
    },
    {
        id: 2,
        title: "Animated Warrior Character",
        creator: "CharacterCraft",
        price: 0,
        originalPrice: 39.99,
        image: "⚔️",
        rating: 4.9,
        ratingCount: 203,
        badge: "free",
        category: "characters-creatures"
    },
    {
        id: 3,
        title: "Mystical Forest Environment",
        creator: "NatureDesigns",
        price: 29.99,
        originalPrice: null,
        image: "🌲",
        rating: 4.7,
        ratingCount: 89,
        badge: "new",
        category: "nature-plants"
    },
    {
        id: 4,
        title: "Sci-Fi Weapon Pack",
        creator: "FutureTech",
        price: 24.99,
        originalPrice: 34.99,
        image: "🔫",
        rating: 4.6,
        ratingCount: 124,
        badge: "sale",
        category: "weapons-items"
    },
    {
        id: 5,
        title: "PBR Material Collection",
        creator: "MaterialMaster",
        price: 19.99,
        originalPrice: null,
        image: "🎨",
        rating: 4.8,
        ratingCount: 67,
        badge: "new",
        category: "textures-materials"
    },
    {
        id: 6,
        title: "Dragon Animation Set",
        creator: "AnimationPro",
        price: 0,
        originalPrice: 59.99,
        image: "🐉",
        rating: 4.9,
        ratingCount: 245,
        badge: "free",
        category: "animations"
    }
];

const sampleSellers = [
    {
        name: "ArchitectStudio",
        avatar: "🏛️",
        assets: 45,
        sales: 1250,
        rating: 4.8
    },
    {
        name: "CharacterCraft",
        avatar: "👤",
        assets: 32,
        sales: 890,
        rating: 4.9
    },
    {
        name: "NatureDesigns",
        avatar: "🌿",
        assets: 28,
        sales: 567,
        rating: 4.7
    },
    {
        name: "FutureTech",
        avatar: "🚀",
        assets: 38,
        sales: 1100,
        rating: 4.6
    }
];

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

// Initialize the application
function initializeApp() {
    // Load featured assets
    loadFeaturedAssets();
    
    // Load sellers
    loadSellers();
    
    // Setup event listeners
    setupEventListeners();
    
    // Initialize search
    initializeSearch();
    
    // Initialize tabs
    initializeTabs();
    
    // Initialize newsletter
    initializeNewsletter();
}

// Load featured assets
function loadFeaturedAssets() {
    const assetGrid = document.getElementById('featured-assets');
    if (!assetGrid) return;
    
    // Show loading skeletons first
    showLoadingSkeletons(assetGrid, 6);
    
    // Simulate API call delay
    setTimeout(() => {
        assetGrid.innerHTML = '';
        sampleAssets.forEach(asset => {
            const assetCard = createAssetCard(asset);
            assetGrid.appendChild(assetCard);
        });
        
        // Add hover effects
        addCardHoverEffects();
    }, 1000);
}

// Create asset card HTML
function createAssetCard(asset) {
    const card = document.createElement('div');
    card.className = 'asset-card';
    card.innerHTML = `
        <div class="asset-image">
            ${asset.image}
            <div class="asset-badge ${asset.badge}">${asset.badge === 'free' ? 'FREE' : asset.badge === 'sale' ? 'SALE' : 'NEW'}</div>
        </div>
        <div class="asset-info">
            <h3 class="asset-title">${asset.title}</h3>
            <p class="asset-creator">by <a href="#">${asset.creator}</a></p>
            <div class="asset-price">
                <span class="price-current">${asset.price === 0 ? 'Free' : '$' + asset.price.toFixed(2)}</span>
                ${asset.originalPrice ? `<span class="price-original">$${asset.originalPrice.toFixed(2)}</span>` : ''}
            </div>
            <div class="asset-rating">
                <span class="stars">${generateStars(asset.rating)}</span>
                <span class="rating-count">(${asset.ratingCount})</span>
            </div>
            <div class="asset-actions">
                <button class="btn-cart" onclick="addToCart(${asset.id})">
                    ${asset.price === 0 ? 'Download' : 'Add to Cart'}
                </button>
                <button class="btn-wishlist" onclick="addToWishlist(${asset.id})">❤️</button>
            </div>
        </div>
    `;
    return card;
}

// Generate star rating
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '⭐';
    }
    
    if (hasHalfStar) {
        stars += '⭐';
    }
    
    return stars;
}

// Load sellers
function loadSellers() {
    const sellerGrid = document.querySelector('.seller-grid');
    if (!sellerGrid) return;
    
    sampleSellers.forEach(seller => {
        const sellerCard = createSellerCard(seller);
        sellerGrid.appendChild(sellerCard);
    });
}

// Create seller card HTML
function createSellerCard(seller) {
    const card = document.createElement('div');
    card.className = 'seller-card';
    card.innerHTML = `
        <div class="seller-avatar">${seller.avatar}</div>
        <h3 class="seller-name">${seller.name}</h3>
        <div class="seller-stats">
            <div class="seller-stat">
                <span class="seller-stat-number">${seller.assets}</span>
                <span class="seller-stat-label">Assets</span>
            </div>
            <div class="seller-stat">
                <span class="seller-stat-number">${seller.sales}</span>
                <span class="seller-stat-label">Sales</span>
            </div>
        </div>
        <div class="asset-rating">
            <span class="stars">${generateStars(seller.rating)}</span>
            <span class="rating-count">${seller.rating}</span>
        </div>
    `;
    return card;
}

// Show loading skeletons
function showLoadingSkeletons(container, count) {
    container.innerHTML = '';
    for (let i = 0; i < count; i++) {
        const skeleton = document.createElement('div');
        skeleton.className = 'skeleton-card';
        skeleton.innerHTML = `
            <div class="skeleton-image loading-skeleton"></div>
            <div class="skeleton-content">
                <div class="skeleton-title loading-skeleton"></div>
                <div class="skeleton-text loading-skeleton"></div>
                <div class="skeleton-text short loading-skeleton"></div>
            </div>
        `;
        container.appendChild(skeleton);
    }
}

// Setup event listeners
function setupEventListeners() {
    // Mobile menu toggle (if needed)
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMobileMenu);
    }
    
    // Category card clicks
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', handleCategoryClick);
    });
    
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize search functionality
function initializeSearch() {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.querySelector('.search-btn');
    
    if (searchInput) {
        searchInput.addEventListener('input', handleSearchInput);
        searchInput.addEventListener('keypress', handleSearchKeyPress);
    }
    
    if (searchBtn) {
        searchBtn.addEventListener('click', handleSearchClick);
    }
}

// Handle search input
function handleSearchInput(e) {
    const query = e.target.value.toLowerCase();
    // Implement search suggestions or live search
    console.log('Searching for:', query);
}

// Handle search key press
function handleSearchKeyPress(e) {
    if (e.key === 'Enter') {
        handleSearch();
    }
}

// Handle search click
function handleSearchClick() {
    handleSearch();
}

// Handle search
function handleSearch() {
    const searchInput = document.getElementById('search-input');
    const query = searchInput.value.trim();
    
    if (query) {
        // Simulate search
        showNotification('Searching for "' + query + '"...', 'info');
        console.log('Searching for:', query);
    }
}

// Initialize tabs
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all tabs
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Load content based on tab
            const tabType = this.dataset.tab;
            loadTabContent(tabType);
        });
    });
}

// Load tab content
function loadTabContent(tabType) {
    const assetGrid = document.getElementById('featured-assets');
    if (!assetGrid) return;
    
    showLoadingSkeletons(assetGrid, 6);
    
    setTimeout(() => {
        let filteredAssets = sampleAssets;
        
        switch (tabType) {
            case 'limited-free':
                filteredAssets = sampleAssets.filter(asset => asset.badge === 'free');
                break;
            case 'on-sale':
                filteredAssets = sampleAssets.filter(asset => asset.badge === 'sale');
                break;
            case 'recent':
                filteredAssets = sampleAssets.filter(asset => asset.badge === 'new');
                break;
        }
        
        assetGrid.innerHTML = '';
        filteredAssets.forEach(asset => {
            const assetCard = createAssetCard(asset);
            assetGrid.appendChild(assetCard);
        });
        
        addCardHoverEffects();
    }, 500);
}

// Initialize newsletter
function initializeNewsletter() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }
}

// Handle newsletter submit
function handleNewsletterSubmit(e) {
    e.preventDefault();
    
    const emailInput = e.target.querySelector('input[type="email"]');
    const email = emailInput.value.trim();
    
    if (email) {
        // Simulate newsletter signup
        showNotification('Thank you for subscribing!', 'success');
        emailInput.value = '';
    }
}

// Add to cart functionality
function addToCart(assetId) {
    const asset = sampleAssets.find(a => a.id === assetId);
    if (asset) {
        showNotification(`Added "${asset.title}" to cart`, 'success');
    }
}

// Add to wishlist functionality
function addToWishlist(assetId) {
    const asset = sampleAssets.find(a => a.id === assetId);
    if (asset) {
        showNotification(`Added "${asset.title}" to wishlist`, 'success');
    }
}

// Handle category click
function handleCategoryClick(e) {
    const categoryCard = e.currentTarget;
    const categoryName = categoryCard.querySelector('h3').textContent;
    
    showNotification(`Browsing ${categoryName}...`, 'info');
    console.log('Selected category:', categoryName);
}

// Add card hover effects
function addCardHoverEffects() {
    const cards = document.querySelectorAll('.asset-card, .category-card, .seller-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `toast ${type} show`;
    notification.innerHTML = `
        <div class="toast-title">${type === 'success' ? 'Success' : type === 'error' ? 'Error' : 'Info'}</div>
        <div class="toast-message">${message}</div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Toggle mobile menu
function toggleMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('active');
    }
}

// Scroll to top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll to top button
window.addEventListener('scroll', function() {
    const scrollBtn = document.querySelector('.scroll-to-top');
    if (scrollBtn) {
        if (window.pageYOffset > 300) {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    }
});

// Export functions for use in other files
window.GameAssetHub = {
    addToCart,
    addToWishlist,
    showNotification,
    scrollToTop
};