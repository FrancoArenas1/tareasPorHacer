const { demand } = require('yargs')
const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripcion de la tarea por hacer'
}
const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Permite crear tareas por hacer', { descripcion, completado })
    .command('actualizar', 'Permite actualizar tareas por hacer', { completado })
    .command('borrarRegistro', 'Permite borrar un registro', { descripcion, completado })
    .help()
    .argv

module.exports = { argv }