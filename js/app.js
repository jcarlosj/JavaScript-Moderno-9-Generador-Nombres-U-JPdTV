/* Generador de Nombres usando AJAX y REST API */

// Evento 'submit' para el botón de enviar del formulario
document .querySelector( '#generar-nombre' ) .addEventListener( 'submit', cargarNombres );

// Function: Llamado a AJAX e imprimir resultados
function cargarNombres( e ) {
    const origen = document .getElementById( 'origen' ),                            // Obtiene el elemento con el ID 'origen'
          origenSeleccionado = origen .options[ origen .selectedIndex ] .value,     // Obtiene el valor del elemento con el ID 'origen'
          genero = document .getElementById( 'genero' ),                            // Obtiene el elemento con el ID 'genero'
          generoSeleccionado = genero .options[ genero .selectedIndex ] .value,     // Obtiene el valor del elemento con el ID 'genero'
          cantidad = document .getElementById( 'numero' ) .value;                   // Obtiene el valor del elemento con el ID 'cantidad'

    let url = '';

    url += 'http://uinames.com/api/?';

    e .preventDefault();        // Evita o previene que se elecute el 'action' del formulario

    // Valida si se ha agregado origen a la búsqueda
    if( origenSeleccionado !== '' ) {
        url += `region=${ origenSeleccionado }&`;
    }
    // Valida si se ha agregado género a la búsqueda
    if( generoSeleccionado !== '' ) {
        url += `gender=${ generoSeleccionado }&`;
    }
    // Valida si se ha agregado cantidad de registros para la búsqueda
    if( cantidad !== '' ) {
        url += `amount=${ cantidad }&`;
    }

    console .log( 'url ', url ); 

    // Conectar Con AJAX
    const xhr = new XMLHttpRequest();       // Instanciar XMLHttpRequest

    // Abre la conexión
    xhr .open(
        'GET',      // Método: GET, POST, PUT, PATCH, DELETE...
        url,        // Path (de la REST API en este caso)
        true        // [true/false] Si es asíncrono 
    );

    // Onload: Una ves la conexión se ha realizado
    xhr .onload = function() {
        // Valida que el estado sea correcto (200)
        if( this .status === 200 ) {
            const nombres = JSON .parse( this .responseText );      // Convierte un JSON a un 'Array' de Objetos

            // Generar Template 
            let htmlNombres = '<h2>Nombres Generados</h2>';
            htmlNombres += '<ul class="lista">';

            // Recorre 'Array' nombres
            nombres .forEach( function( nombre ) {
                htmlNombres += `<li>${ nombre .name}</li>`;    
            });
            
            htmlNombres += '</ul>';

            // Agrega el Template con los datos al DOM
            document .getElementById( 'resultado' ) .innerHTML = htmlNombres;

            console .log( 'Response ', nombres );

            
        }
    }

    // Envia la petición
    xhr .send();
    
}