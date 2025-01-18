document.querySelectorAll('.dropdown > a').forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent default link behavior
  
      const menu = this.nextElementSibling; // The dropdown menu (<ul>)
      const icon = this.querySelector('i'); // The icon (<i>)
  
      // Toggle the dropdown menu visibility
      if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        // Reset icon rotation
        icon.style.transform = 'rotate(0deg)';
      } else {
        menu.classList.add('show');
        // Rotate the icon
        icon.style.transform = 'rotate(180deg)';
      }
  
      // Close other dropdowns
      document.querySelectorAll('.dropdown-menu.show').forEach(otherMenu => {
        if (otherMenu !== menu) {
          otherMenu.classList.remove('show');
          const otherIcon = otherMenu.previousElementSibling.querySelector('i');
          otherIcon.style.transform = 'rotate(0deg)';
        }
      });
    });
  
    // Handle double-click to reset the icon
    link.querySelector('i').addEventListener('dblclick', function () {
      this.style.transform = 'rotate(0deg)';
    });
  });
  