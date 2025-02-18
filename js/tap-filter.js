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
    if ( item.classList.contains(filter)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

// Initialize by showing Men's items by default
filterItems('all');