// MOBILE MENU

function toggleMenu() {

    const menu =
        document.getElementById("navLinks");

    menu.classList.toggle("open");

}


// CLOSE MOBILE MENU

document
    .querySelectorAll("#navLinks a")
    .forEach(link => {

        link.addEventListener("click", () => {

            document
                .getElementById("navLinks")
                .classList.remove("open");

        });

    });


// NEXT

function nextTestimonial() {

    current =
        (current + 1)
        %
        testimonials.length;

    renderTestimonial();

}


// PREVIOUS

function previousTestimonial() {

    current =
        (current - 1 +
        testimonials.length)
        %
        testimonials.length;

    renderTestimonial();

}


// CONTACT FORM

function submitForm(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;


    alert(
        "Thank you, " +
        name +
        ". Please contact Thinkficial directly by email or WhatsApp to complete your enquiry."
    );


    event.target.reset();

}