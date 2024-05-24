document.getElementById('registerButton').addEventListener('click', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const address = document.getElementById('address').value;

    const registro = {
        name: name,
        date: date,
        address: address
    };

    localStorage.setItem('registro', JSON.stringify(registro));

    displayNotification(registro);
});

window.onload = function() {
    const registroGuardado = JSON.parse(localStorage.getItem('registro'));
    if (registroGuardado) {
        displayNotification(registroGuardado);
    }
};

function displayNotification(registro) {
    document.getElementById('notification').innerHTML = `
        <div class="registro">
            <p><strong>Nombre:</strong> ${registro.name}</p>
            <p><strong>Fecha del evento:</strong> ${registro.date}</p>
            <p><strong>Dirección del evento:</strong> ${registro.address}</p>
        </div>
    `;
}

