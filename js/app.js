/* Generador de Nombres */

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
    
}