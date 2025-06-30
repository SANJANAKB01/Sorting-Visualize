document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.sort-button');
    const popup = document.getElementById('popup');
    const closeButton = document.getElementById('close-popup');
  
    // Show the popup
    button.addEventListener('click', function() {
      popup.style.display = 'block'; 
    });
  
    // Hide the popup when close button is clicked
    closeButton.addEventListener('click', function() {
      popup.style.display = 'none'; 
    });

    const visualizeButton = document.getElementById('visualize-button');
    visualizeButton.addEventListener('click', function() {
        openVisualizer();
    });
});

  // Handle button click to open visualizer
function openVisualizer() {
    window.open('trial/index.html', '_self');
}