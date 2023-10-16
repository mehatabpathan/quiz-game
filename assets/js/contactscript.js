emailjs.init("UOe2Low0qTXYUslK1");

// Function to validate the form before submission
function validateContactForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert("Please fill in all the required fields.");
        return false; // Prevent form submission
    }

    // If all fields are filled, you can submit the form
    return true;
}

function handleFormSubmission() {
    // Your form submission logic here

    // After a successful submission, show the success message with a fade-in effect
    const successMessage = document.getElementById("successMessage");
    successMessage.classList.add("visible");
}

function sendContactEmail() {

    const validForm = validateContactForm();

    if(validForm){
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var templateParams = {
        to_email: email,
        to_name: name,
        message: message
    };

    // Send email using EmailJS
    emailjs.send('service_kom0awm', 'template_y0qtqv9', templateParams, 'UOe2Low0qTXYUslK1')
        .then(function(response) {
            // Reset the form
            document.getElementById("contactForm").reset();
            // Display success message
            var successMessage = "Your message has been sent successfully! We will get back to you soon.";
            document.getElementById("successMessage").textContent = successMessage;
            handleFormSubmission();
        })
        .catch(function(error) {
            console.log("Failed to send Email");
        });

    }
}