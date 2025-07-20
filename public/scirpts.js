document.getElementById('dropdownButton').addEventListener('click', function() {
    var dropdownContent = document.getElementById('crop-select');
    if (dropdownContent.style.display === 'block') {
      dropdownContent.style.display = 'none';
    } else {
      dropdownContent.style.display = 'block';
    }
  });
  
  // Close the dropdown if the user clicks outside of it
  window.addEventListener('click', function(event) {
    if (!event.target.matches('#dropdownButton')) {
      var dropdownContent = document.getElementById('crop-select');
      if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
      }
    }
  });
  