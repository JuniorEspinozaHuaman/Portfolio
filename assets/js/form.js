/* 
document.addEventListener('DOMContentLoaded', function () {
    const dialog = document.getElementById("dialog");

    const showButton = document.getElementById('contactMeBtn');

    const closeButton = document.getElementById("close_button");

    // "Show the dialog" button opens the dialog modally
    showButton.addEventListener("click", () => {
        dialog.showModal();
    });

    // "Close" button closes the dialog
    closeButton.addEventListener("click", () => {
        dialog.close();
    });


    //form -emailJS

    const btnSend = document.getElementById('btn-send');
    const form = document.getElementById('form')

    btnSend.addEventListener('click', function (e) {
        e.preventDefault();


        const serviceID = 'service_f92ppcm';
        const templateID = 'template_shu5yjz';

        emailjs.sendForm(serviceID, templateID, form)
            .then(() => {
                window.alert('Sent!');
                form.reset();
                dialog.close();

            })
            .catch((error) => {
                alert(JSON.stringify(error));
            })
    })
})
*/
// codigo por testear

document.addEventListener('DOMContentLoaded', function () {
    const dialog = document.getElementById("dialog");
    const showButton = document.getElementById('contactMeBtn');
    const closeButton = document.getElementById("close_button");
    const form = document.getElementById('form');

    showButton.addEventListener("click", () => {
        dialog.showModal();
    });

    closeButton.addEventListener("click", () => {
        dialog.close();
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Validación de campos obligatorios
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || phone === '' || message === '') {
            alert('Por favor, completa todos los campos obligatorios.');
            return;
        }

        const serviceID = 'service_f92ppcm';
        const templateID = 'template_shu5yjz';

        emailjs.sendForm(serviceID, templateID, form)
            .then(() => {
                window.alert('¡Enviado!');
                form.reset();
                dialog.close();
            })
            .catch((error) => {
                alert(JSON.stringify(error));
            });
    });
});
