

const fs = require('fs');

/** NO PODEMOS MODIFICAR LA FUNCIÓN, NO ES NUESTRA */
function readAndDisplayJSON(filename) {

    // Leer el archivo de manera sincrónica
    const data = fs.readFileSync(filename, 'utf8');
    
    // Intentar parsear el JSON
    const people = JSON.parse(data); 

    // Mostrar los nombres y correos electrónicos
    people.forEach(person => {
        console.log(`Name: ${person.name}, Email: ${person.email}`);
    });

}

// Ejecutar la función con el nombre del archivo
readAndDisplayJSON('people1.json');

// Este fichero falla. Usar try...catch para gestionar el error
try {
    readAndDisplayJSON('people1_bad.json');
} catch (e) {
    console.log("Ha ocurrido un error al leer el fichero people1_bad.json");
    console.log(e.message);
}