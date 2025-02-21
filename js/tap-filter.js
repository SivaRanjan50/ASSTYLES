 /* shop dress filters
----------------------------------------------------------------------------------------*/

// Get all filter buttons and items
const filterButtons = document.querySelectorAll('.categories-item');
const items = document.querySelectorAll('.item');

// Add event listeners to filter buttons
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    // Add active class to the clicked button
    button.classList.add('active');
    // Get the filter value
    const filter = button.dataset.filter;
    // Filter items
    filterItems(filter);
  });
});

// Function to filter items by category
function filterItems(filter) {
  items.forEach(item => {
    if (filter === 'all' || item.classList.contains(filter)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

// Initialize by showing Men's items by default
filterItems('all');


// -----------------------------filter price----------------------------

document.addEventListener('DOMContentLoaded', function () {
  const priceOptions = document.querySelectorAll('.price-filter-options input');
  const itemsPrice = document.querySelectorAll('.priceItem');

  priceOptions.forEach(option => {
      option.addEventListener('change', () => {
          // Get the selected price range
          const selectedRanges = Array.from(priceOptions)
              .filter(opt => opt.checked)
              .map(opt => ({
                  min: parseFloat(opt.getAttribute('data-min')),
                  max: parseFloat(opt.getAttribute('data-max'))
              }));

          // Filter itemsPrice based on the selected price range
          itemsPrice.forEach(item => {
              const itemPrice = parseFloat(item.getAttribute('data-price'));
              const isVisible = selectedRanges.some(range => itemPrice >= range.min && itemPrice <= range.max);
              item.style.display = isVisible ? 'block' : 'none';
          });
      });
  });
});