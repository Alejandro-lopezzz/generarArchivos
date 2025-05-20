
const fs = require('fs/promises');
const path = require('path');

async function generarArchivo(i) {
    const contenido = `Este es el archivo número ${i}`;
    const nombre = path.join(__dirname, 'archivos', `archivo_${i}.txt`);
    await fs.writeFile(nombre, contenido);
}

async function generarMuchosArchivos(cantidad) {
    const carpeta = path.join(__dirname, 'archivos');

   
    await fs.mkdir(carpeta, { recursive: false });

    const promesas = [];
    for (let i = 1; i <= cantidad; i++) {
        promesas.push(generarArchivo(i));
    }


    await Promise.all(promesas);
    console.log(`✅ Se generaron ${cantidad} archivos.`);
}

generarMuchosArchivos(1000); 


console.log("HACIENDO PPRUEBAS DE ACTUALIZACIÓN DE COMMITS"); //PRUEBAS PARA SUBIR A GIT