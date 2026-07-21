'use strict';

const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

if (form) {

    form.addEventListener('submit', async function (e) {

        e.preventDefault();

        status.textContent = "";

        const data = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            company: document.getElementById('company').value.trim(),
            message: document.getElementById('message').value.trim(),
            source: "Website"
        };

        const button = form.querySelector("button[type='submit']");
        const originalText = button.innerHTML;

        button.disabled = true;
        button.innerHTML = "Sending...";

        try {

            const response = await fetch(
                "https://script.google.com/macros/s/AKfycbxvChJ8jTntV_1kYvdEsdrjk3kn9PwQWYVZHx2GyS-s6frgbZ7uKY_PcqSR4mIMNR73pQ/exec",
                {
                    method: "POST",
                    body: JSON.stringify(data)
                }
            );

            const result = await response.json();

            /*if (result.result === "success") {
                status.textContent =
                    "✓ Thank you! Your message has been sent.";

                status.className =
                    "form-status success";

                form.reset();

            } else {

                status.textContent =
                    "Unable to send your message.";

                status.className =
                    "form-status error";
            }*/

        console.log(result);

        if (result.result === "success") {
        
            status.textContent =
                "✓ Thank you! Your message has been sent.";
        
            status.className =
                "form-status success";
        
            form.reset();
        
        } else {
        
            status.textContent =
                result.message;
        
            status.className =
                "form-status error";
        
            console.error(result);
        
        }

        } catch (error) {

            console.error(error);

            status.textContent =
                "Connection error.";

            status.className =
                "form-status error";

        } finally {

            button.disabled = false;
            button.innerHTML = originalText;

        }

    });

}
