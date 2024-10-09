
// Función para cargar los países desde una API
async function loadCountries() {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const countries = await response.json();
        const paisesSelect = document.getElementById('pais');
        
        paisesSelect.innerHTML = ''; // Limpiar opciones anteriores
        
        countries.forEach(pais => {
            const option = document.createElement('option');
            option.value = pais.cca2; // Código del país
            option.textContent = pais.name.common; // Nombre del país
            paisesSelect.appendChild(option);
        });
    } catch (error) {
        console.error('Error al cargar los países:', error);
        const seleccionarPais = document.getElementById('pais');
        seleccionarPais.innerHTML = '<option value="">Error al cargar países</option>';
    }
}

// Cargar países cuando se carga la página
window.onload = loadCountries;

// Evento de envío del formulario
document.getElementById('countryForm').addEventListener('submit', function (cancel) {
    cancel.preventDefault(); // Evita el envío del formulario
    const name = document.getElementById('nombre').value;
    const country = document.getElementById('pais').value;

    if (name && country) {
        alert(`Nombre: ${name}\nPaís: ${country}`);
        // Aquí puedes manejar el envío a la base de datos o realizar otras acciones
    } else {
        alert('Por favor, completa todos los campos.');
    }
});

