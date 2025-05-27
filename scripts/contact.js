// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
function submitForm() {
    let contactPage = document.getElementById("contact-page");
    contactPage.innerHTML = "<p>Thank you for your message</p>";
}
document.addEventListener("click",submitForm);

