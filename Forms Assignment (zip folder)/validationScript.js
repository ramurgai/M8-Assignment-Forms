    // JavaScript code for form validation
	// Prevent form from submitting

      // Retrieve the input field value

      // Regular expression pattern for alphanumeric input

      // Check if the input value matches the pattern

        // Valid input: display confirmation and submit the form

        // Invalid input: display error message


let submit = document.getElementById("submit")
submit.addEventListener("click", validEntry)

function validEntry() {
  let inp = document.getElementById("inputField")

  if (inp.validity.valueMissing) {
    inp.setCustomValidity("Please input a value.")
  }
  else if ((/^[a-zA-Z0-9]+$/.test(inp.value))){
    inp.setCustomValidity("Input correct.")
  }
  else {
    inp.setCustomValidity("ERROR: Your input is not alphanumeric.")
  }
}
