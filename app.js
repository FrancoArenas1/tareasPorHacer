const { argv } = require('./config/yargs');
const { crear, listarTareas, actualizarDb, borrarRegistro } = require('./por-hacer/por-hacer');
const { colors } = require('colors');



let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log('Creando tarea por hacer');
        let tarea = crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        console.log('Listando tarea por hacer');
        let listado = listarTareas()
        console.log(listado);
        console.log("==================".green);
        for (tareas of listado) {
            console.log(`${tareas.descripcion} completada: ${tareas.completado}`.red);
        }
        console.log("==================".green);
        break;
    case 'actualizar':
        console.log('Actualizando tarea por hacer');
        let actualizado = actualizarDb(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrarRegistro':
        console.log('Borrando un registro');
        let borrado = borrarRegistro(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Comando no reconocido');
}