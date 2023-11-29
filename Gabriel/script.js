document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signup-form");

    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (validateForm()) {
            const currentDate = new Date();
            const formattedDate = currentDate.toISOString().split('T')[0]; // Format date as YYYY-MM-DD

            const formData = {
                firstName: document.getElementById("first_name").value.trim(),
                lastName: document.getElementById("last_name").value.trim(),
                gender: document.getElementById("gender").value,
                email: document.getElementById("email").value.trim(),
                address: document.getElementById("address").value.trim(),
                contactNumber: document.getElementById("contact_number").value.trim(),
                signupDate: formattedDate, // Automatically get the current date
            };

            // Display the results in JSON format in the console
            console.log(JSON.stringify(formData));

            alert("Signup successful!");

            signupForm.reset();
        }
    });

    function validateForm() {
        const firstName = document.getElementById("first_name").value.trim();
        const lastName = document.getElementById("last_name").value.trim();
        const gender = document.getElementById("gender").value;
        const email = document.getElementById("email").value.trim();
        const address = document.getElementById("address").value.trim();
        const contactNumber = document.getElementById("contact_number").value.trim();

        if (firstName === "" || lastName === "" || gender === "" || email === "" || address === "" || contactNumber === "") {
            alert("All fields must be filled out");
            return false;
        }

        return true;
    }
});
