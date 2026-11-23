
// Select the registration form
const form = document.querySelector("form");

// Handle form submission
form.addEventListener("submit", function(event) {

    // Prevent page refresh
    event.preventDefault();

    // Get student details
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let roll = document.getElementById("roll").value;
    let dept = document.getElementById("dept").value;
    let eventName = document.getElementById("event").value;

    // Display success message
    alert("Registration Successful!\n" +
          "Name: " + name + "\n" +
          "Email: " + email + "\n" +
          "Roll Number: " + roll + "\n" +
          "Department: " + dept + "\n" +
          "Event: " + eventName);

    // Clear the form
    form.reset();

});
