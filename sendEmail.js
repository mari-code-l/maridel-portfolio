function sendMail(contactForm) {
    emailjs.send("service_ln9l5bb","template_gj1sxvn", {
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


(function(){
  emailjs.init("user_93XvYuauScjvUY6m1p5YR");
})();


var current = 1; //keeps track of the current div
var height = $('.roles').height(); //the height of the roles div
var numberDivs = $('.roles').children().length; //the number of children of the roles div
var first = $('.roles div:nth-child(1)'); //the first div nested in roles div
setInterval(function() {
    var number = current * -height;
    first.css('margin-top', number + 'px');
    if (current === numberDivs) {
        first.css('margin-top', '0px');
        current = 1;
    } else current++;
}, 3000);