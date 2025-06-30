// document.addEventListener('DOMContentLoaded', function() {
//     const button = document.querySelector('.sort-button');
//     const popup = document.getElementById('popup');
//     const closeButton = document.getElementById('close-popup');
  
//     button.addEventListener('click', function() {
//       popup.style.display = 'block'; // Show the popup
//     });
  
//     closeButton.addEventListener('click', function() {
//       popup.style.display = 'none'; // Hide the popup when close button is clicked
//     });
//   });
  // function openVisualizer() {
  //   window.open('trial/index.html', '_self');
  // }
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

function openVisualizer() {
    window.open('trial/index.html', '_self');
}
