  /* filter + and - 
  ----------------------------------------------------------------------------*/
  function toggleFilter(header) {
    const section = header.parentElement;
    const options = section.querySelector('.filter-options_01');
    const indicator = header.querySelector('.toggle-indicator');
    // priceRange.classList.toggle('none');
    options.classList.toggle('active');
    indicator.textContent = options.classList.contains('active') ? '−' : '+';
}

  // Initialize first filter as open
//   document.querySelector('.filter-section_01:first-child .filter-options_01').classList.add('active');
// function toggleFilter(header) {
//   const section = header.parentElement;
//   const priceRange = section.querySelector('.price-val-range');
//   const options = section.querySelector('.filter-options_01');
//   const indicator = header.querySelector('.toggle-indicator');
  
//   // Toggle both elements
//   priceRange.classList.toggle('active');
//   options.classList.toggle('active');
  
//   // Update indicator based on state
//   indicator.textContent = options.classList.contains('active') ? '−' : '+';
// }


document.addEventListener("DOMContentLoaded", function () {
    let page = 2; // Start from page 2 as first page is already loaded
    let isLoading = false;

    window.addEventListener("scroll", function () {
        if (isLoading) return;

        let scrollHeight = document.documentElement.scrollHeight;
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        let clientHeight = document.documentElement.clientHeight;

        if (scrollTop + clientHeight >= scrollHeight - 200) {
            isLoading = true;
            loadMoreProducts();
        }
    });

    function loadMoreProducts() {
        document.getElementById("loader").style.display = "block";

        fetch(`load-more-products.php?page=${page}`)
            .then(response => response.text())
            .then(data => {
                if (data.trim() !== "") {
                    document.getElementById("gridLayout").insertAdjacentHTML("beforeend", data);
                    page++;
                } else {
                    console.log("No more products to load.");
                }
                isLoading = false;
                document.getElementById("loader").style.display = "none";
            })
            .catch(error => {
                console.error("Error loading products:", error);
                isLoading = false;
                document.getElementById("loader").style.display = "none";
            });
    }
});


 // Pause carousel on hover for better zoom interaction
 const zoomCarousel = new bootstrap.Carousel(document.getElementById('zoomCarousel'), {
    interval: 2000,
    pause: 'hover'
});

// Add smooth transitions
document.querySelectorAll('.carousel-item').forEach(item => {
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});



// -----------------product slider----------------
// document.addEventListener("DOMContentLoaded", function() {
//     const slider = document.getElementById("slider");
//     const prevBtn = document.getElementById("prevBtn");
//     const nextBtn = document.getElementById("nextBtn");
//     const scrollAmount = 320; // Adjusted for 300px width + 20px gap

//     function scrollSlider(direction) {
//         slider.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
//     }

//     prevBtn.addEventListener("click", function() {
//         scrollSlider(-1);
//     });

//     nextBtn.addEventListener("click", function() {
//         scrollSlider(1);
//     });
// });