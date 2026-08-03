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
        const honeypot = document.getElementById("website").value;
        if (honeypot !== "") {return;}

        const elapsed = Date.now() - window.formLoadedTime;
        if (elapsed < 4000){ status.textContent = "Please complete the form."; 
                            status.className ="form-status error";
                            return;
                           }
        if(data.name.length < 3){status.textContent = "Please enter your full name.";
                                 status.className = "form-status error";
                                 return;
                                }
        if(data.company.length < 2){status.textContent ="Please enter your organization.";
                                    status.className ="form-status error";
                                    return;
                                   }
        if(data.message.length < 25){status.textContent ="Please provide more details.";
                                     status.className = "form-status error";
                                     return;
                                    }
        if(/^[0-9 ]+$/.test(data.message)){status.textContent ="Invalid message.";
                                           status.className ="form-status error";
                                           return;
                                          }

        if(/http|https|www\./i.test(data.message)){status.textContent ="Links are not allowed.";
                                                   status.className ="form-status error";
                                                   return;
                                                  }
        if(/[bcdfghjklmnpqrstvwxyz]{5,}/i.test(data.name)){status.textContent ="Please enter a valid name.";
                                                           status.className ="form-status error";
                                                           return;
                                                          }

        if(/[bcdfghjklmnpqrstvwxyz]{5,}/i.test(data.name)){
            status.textContent ="Please enter a valid name.";
            status.className ="form-status error";
            return;
        }
        const button = form.querySelector("button[type='submit']");
        const originalText = button.innerHTML;

        button.disabled = true;
        button.innerHTML = "Sending...";

        try {
            const response = await fetch(
                "https://script.google.com/macros/s/AKfycbxvChJ8jTntV_1kYvdEsdrjk3kn9PwQWYVZHx2GyS-s6frgbZ7uKY_PcqSR4mIMNR73pQ/exec",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "text/plain;charset=utf-8"
                    },
                    body: JSON.stringify(data)
                }
            );

            const result = await response.json();

            if (result.result === "success") {
                status.textContent = "✓ Thank you! Your message has been sent.";
                status.className = "form-status success";
                form.reset();
            } else {
                status.textContent = result.message || "Unable to send your message.";
                status.className = "form-status error";
                console.error(result);
            }

        } catch (error) {
            console.error("Fetch Error:", error);
            status.textContent = "Connection error.";
            status.className = "form-status error";
        } finally {
            button.disabled = false;
            button.innerHTML = originalText;
        }
    });
}
