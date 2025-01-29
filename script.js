// Select all hero boxes
const heroBoxes = document.querySelectorAll('.hero-box');
const hoverContainer = document.getElementById('hover-images-container');

// Function to display images on hover
heroBoxes.forEach((box) => {
    box.addEventListener('mouseenter', () => {
        hoverContainer.innerHTML = ''; 

        // Get the array of images from data attribute
        const images = JSON.parse(box.getAttribute('data-images'));

        // Define positions for the images
        const positions = ['image-1', 'image-2', 'image-3', 'image-4'];

        // Create image elements dynamically
        images.forEach((imgSrc, index) => {
            const img = document.createElement('img');
            img.src = imgSrc;
            img.classList.add(positions[index]); 
            hoverContainer.appendChild(img);

            // Trigger appearance with a slight delay
            setTimeout(() => {
                img.style.opacity = '1';
                img.style.transform = 'scale(1)';
            }, index * 200); // Staggered effect
        });
    });

    // On mouse leave, clear the images
    box.addEventListener('mouseleave', () => {
        hoverContainer.innerHTML = ''; // Remove all images
    });
});
