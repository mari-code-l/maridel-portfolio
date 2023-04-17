function sendMail(contactForm) {
    emailjs.send("service_y85kvpg","template_gj1sxvn", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    
    .then(
        function(response) {
        alert("Thank You!");
        contactForm.name.value = '';
        contactForm.email.value = '';
        contactForm.projectsummary.value = '';
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;
}
