//Get References To The Form And Dispaly Area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// Handle Form Submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    //collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    //Generate The Resume Content Dynamic
    var resumeHTML = "\n        <h2><b><u>EDITABLE RESUME</u></b></h2>\n        <h3> Personal Information</h3>\n        <p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n        <p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n        <p><b>Phone:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n        \n        <h3> Education</h3>\n        <p contenteditable=\"true\">").concat(education, "</P>\n\n         <h3> Experience</h3>\n        <p contenteditable=\"true\">").concat(experience, "</P>\n\n         <h3> Skills</h3>\n        <p contenteditable=\"true\">").concat(skills, "</P>\n        ");
    // Display The Generated Resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The Resume Display Element Is Missing');
    }
});
