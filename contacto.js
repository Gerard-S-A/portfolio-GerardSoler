  emailjs.init('FQ2SgSPXJJWr5nCI7'); // Reemplaza por tu User ID de EmailJS

        const form = document.getElementById('contactForm');
        const successMessage = document.getElementById('successMessage');

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            
            // Validar Nombre
            const name = document.getElementById('name');
            if (name.value.trim().length < 2) { showError('nameError', name); isValid=false; } else { hideError('nameError', name); }

            // Validar Email
            const email = document.getElementById('email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value)) { showError('emailError', email); isValid=false; } else { hideError('emailError', email); }

            // Validar Mensaje
            const message = document.getElementById('message');
            if (message.value.trim().length < 10) { showError('messageError', message); isValid=false; } else { hideError('messageError', message); }

            if (isValid) {
                const btn = document.getElementById('submitBtn');
                btn.innerHTML = '<i class="fas fa-circle-notch animate-spin"></i> Enviando...';
                btn.disabled = true;

                const templateParams = {
                    from_name: name.value,
                    from_email: email.value,
                    message: message.value,
                    to_email: 'gersolalm@gmail.com'
                };

                emailjs.send('service_sn8rr6e','template_imdn2ts', templateParams)
                    .then(function(response) {
                        form.classList.add('hidden');
                        successMessage.classList.remove('hidden');
                        alert('¡Mensaje enviado correctamente!');
                    }, function(error) {
                        btn.innerHTML = 'Enviar Mensaje';
                        btn.disabled = false;
                        alert('Error al enviar el mensaje, inténtalo más tarde.');
                    });
            }
        });

        function showError(id, input) {
            document.getElementById(id).style.display = 'block';
            input.classList.add('is-invalid');
        }

        function hideError(id, input) {
            document.getElementById(id).style.display = 'none';
            input.classList.remove('is-invalid');
        }