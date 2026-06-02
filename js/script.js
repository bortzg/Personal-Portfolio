document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let email = document.getElementById("email").value;

//!Message when form is submitted
    alert(
        "Thank you for messaging me, " +
        firstName + " " + lastName +
        "!\nI will contact you at " + email + "."
    );
//!Redirect to homepage after form submission
    window.location.href = "index.html";
});