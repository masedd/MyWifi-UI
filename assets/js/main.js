// Add Shadow to Navbar
$(window).scroll(function() {
    if ($(window).scrollTop() > 10) {
        $('.navbar').addClass('floatingNav');
    } else {
        $('.navbar').removeClass('floatingNav');
    }
});

// Drobdown Hover
document.addEventListener("DOMContentLoaded", function() {
    if (window.innerWidth > 992) {

        document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem) {

            everyitem.addEventListener('mouseover', function(e) {

                let el_link = this.querySelector('a[data-bs-toggle]');

                if (el_link != null) {
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.add('show');
                    nextEl.classList.add('show');
                }

            });
            everyitem.addEventListener('mouseleave', function(e) {
                let el_link = this.querySelector('a[data-bs-toggle]');

                if (el_link != null) {
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.remove('show');
                    nextEl.classList.remove('show');
                }


            })
        });

    }
});

// Carousel comment
$(document).ready(function() {

    $("#owl-comment").owlCarousel({
        loop: true,
        margin: 0,
        smartSpeed: 300,
        autoplay: 7000,
        navigation: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            800: {
                items: 2
            },
            1024: {
                items: 2
            }
        }
    });

    $("#owl-founder").owlCarousel({
        loop: false,
        margin: 0,
        smartSpeed: 300,
        autoplay: 7000,
        navigation: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            800: {
                items: 4
            },
            1024: {
                items: 4
            }
        }
    });

});

// Validate Form
(function() {
    'use strict'

    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function(form) {
            form.addEventListener('submit', function(event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()

// Show Password
var ShowPasswordToggle = document.querySelector("[type='password']");
ShowPasswordToggle.onclick = function() {
    document.querySelector("[type='password']").classList.add("input-password");
    document.getElementById("toggle-password").classList.remove("d-none");

    const passwordInput = document.querySelector("[type='password']");
    const togglePasswordButton = document.getElementById("toggle-password");

    togglePasswordButton.addEventListener("click", togglePassword);

    function togglePassword() {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            togglePasswordButton.setAttribute("aria-label", "Hide password.");
        } else {
            passwordInput.type = "password";
            togglePasswordButton.setAttribute(
                "aria-label",
                "Show password as plain text. " +
                "Warning: this will display your password on the screen."
            );
        }
    }
};