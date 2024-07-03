

document.addEventListener('DOMContentLoaded', function() {
      // Initialize the date picker
      var $inputDate = $('.datepicker').pickadate({
        // Options for date picker
        format: 'yyyy-mm-dd', // Date format
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 100, // Creates a dropdown of 100 years to control year
        today: 'Today', // Button text for today
        clear: 'Clear', // Button text for clear
        close: 'Close', // Button text for close
        closeOnSelect: true // Close the picker when a date is selected
      });
  
      // Initialize the time picker
      var $inputTime = $('.timepicker').pickatime({
        // Options for time picker
        default: 'now', // Set default time: 'now' or '13:14'
        twelvehour: false, // Use 24-hour format
        donetext: 'OK', // Text for done-button
        cleartext: 'Clear', // Text for clear-button
        canceltext: 'Cancel', // Text for cancel-button
        autoclose: false, // Auto-close when a time is selected
        ampmclickable: true, // Make AM PM clickable
        aftershow: function(){} // Function for after showing timepicker
      });
    });


function validateForm() {
      const honeypot = document.getElementById('honeypot').value;
      if (honeypot) {
          alert('Spam detected!');
          return false;
      }
      return true;
  }

  document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact");
    const modal = document.getElementById("successModal");
    const closeModal = document.querySelector(".close");
const okBtn = document.querySelector(".okBtn");
    form.addEventListener("submit", function(event) {
      if (!validateForm()) {
        event.preventDefault();
        return;
      }

      event.preventDefault();

      const formData = new FormData(form);

      fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          modal.style.display = "block"; // Show the modal
          form.reset(); // Reset the form fields
        } else {
          alert("Submission failed. Please try again.");
        }
      }).catch(error => {
        alert("There was a problem with the submission: " + error.message);
      });
    });

    // Close the modal when the user clicks on <span> (x)
    closeModal.onclick = function() {
      modal.style.display = "none";
    }
    okBtn.onclick = function() {
      modal.style.display = "none";
    }

    // Close the modal when the user clicks anywhere outside of the modal
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  });

  // Dummy form validation function
  function validateForm() {
    return true; // Replace with actual validation logic
  }



