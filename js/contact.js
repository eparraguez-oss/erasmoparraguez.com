'use strict';

const form = document.getElementById('contactForm');

if (form) {

    form.addEventListener('submit', async function (e) {

        e.preventDefault();

        const data = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            company: document.getElementById('company').value.trim(),
            message: document.getElementById('message').value.trim(),
            source: "Website"
        };

        try {

            const response = await fetch("https://script.google.com/a/macros/erasmoparraguez.com/s/AKfycbxvChJ8jTntV_1kYvdEsdrjk3kn9PwQWYVZHx2GyS-s6frgbZ7uKY_PcqSR4mIMNR73pQ/exec", {

                method: "POST",

                body: JSON.stringify(data)

            });

            const result = await response.json();

            if (result.result === "success") {

                alert("Thank you! Your message has been sent.");

                form.reset();

            } else {

                alert("There was an error sending your message.");

            }

        } catch (error) {

            console.error(error);

            alert("Connection error.");

        }

    });

}
