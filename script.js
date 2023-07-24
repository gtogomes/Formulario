<script>
  document.getElementById("survey-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting by default

    // Get form input values
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const numberInput = document.getElementById("number");

    // Validate Name field
    if (nameInput.value.trim() === "") {
      alert("Please enter your name.");
      nameInput.focus();
      return false;
    }

    // Validate Email field using a basic regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      alert("Please enter a valid email address.");
      emailInput.focus();
      return false;
    }

    // Validate Number field
    const minAge = 18;
    const maxAge = 100;
    const enteredAge = parseInt(numberInput.value);
    if (isNaN(enteredAge) || enteredAge < minAge || enteredAge > maxAge) {
      alert("Please enter a valid age between " + minAge + " and " + maxAge + ".");
      numberInput.focus();
      return false;
    }

    // If all validations pass, you can submit the form here or perform further actions
    // For this example, we'll just alert a success message
    alert("Form submitted successfully!");
  });
</script>
