document.getElementById('contactForm').addEventListener('submit', function (event) {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Por favor, completa todos los campos del formulario.');
        event.preventDefault();
    } else if (!email.includes('@')) {
        alert('Por favor, introduce un correo electrónico válido.');
        event.preventDefault();
    }

});