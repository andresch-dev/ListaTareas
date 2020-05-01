const argv = require('./config/yargs').argv;

const porHacer = require('./por-hacer/porHacer');
let comando = argv._[0];

switch (comando) {

    case 'crear':
        console.log('Crear tarea');
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        console.log('listar tarea');

        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log('Por Hacer');
            console.log(tarea.descripcion);
            console.log('Etado', tarea.completado);

        }
        break;

    case 'actualizar':
        console.log('Actualizar tarea');

        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('No Reconocido');
        break;
}