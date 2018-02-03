/* Generador de Nombres usando AJAX y REST API */

// Evento 'submit' para el botón de enviar del formulario
document.querySelector('#generar-nombre').addEventListener('submit', cargarNombres);

// Function: Llamado a AJAX e imprimir resultados
function cargarNombres(e) {
    const origen = document.getElementById('origen'),                            // Obtiene el elemento con el ID 'origen'
        origenSeleccionado = origen.options[origen.selectedIndex].value,     // Obtiene el valor del elemento con el ID 'origen'
        genero = document.getElementById('genero'),                            // Obtiene el elemento con el ID 'genero'
        generoSeleccionado = genero.options[genero.selectedIndex].value,     // Obtiene el valor del elemento con el ID 'genero'
        cantidad = document.getElementById('numero').value;                   // Obtiene el valor del elemento con el ID 'cantidad'

    let url = '';

    url += 'http://uinames.com/api/?';

    e.preventDefault();        // Evita o previene que se elecute el 'action' del formulario

    // Valida si se ha agregado origen a la búsqueda
    if (origenSeleccionado !== '') {
        url += `region=${origenSeleccionado}&`;
    }
    // Valida si se ha agregado género a la búsqueda
    if (generoSeleccionado !== '') {
        url += `gender=${generoSeleccionado}&`;
    }
    // Valida si se ha agregado cantidad de registros para la búsqueda
    if (cantidad !== '') {
        url += `amount=${cantidad}&`;
    }

    console.log('url ', url);

    // FecthAPI usando Promises
    fetch( url )                                                            // Se conecta a los datos
        .then( response => response .json() )                               // Recibe la respuesta
        .then( data => {
            let html = `<h2>Nombres Generados</h2>`;                        // Crea Template
            
            html += `<ul class="lista">`;                                   // Agrega al Template
            console .log( 'Datos ', data );

            // Recorre y agrega los datos en el Template
            data .forEach( nombre => {
                html += `
                    <li>${ nombre .name }</li>
                `;
            });
            html += `</ul>`;                                                // Agrega al Template

            document .querySelector( '#resultado' ) .innerHTML = html;      // Agrega el Template con los datos al DOM

        }) .catch( error => console .log( 'ERROR ', error ) ); 
}