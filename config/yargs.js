const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: "Tarea por Hacer"
    },
    completado: {
        default: true,
        alias: 'c',
        desc: 'Marca como completado/pendiente la tarea'
    }
}

const descripcion = {
    demand: true,
    alias: 'd',
    desc: "Tarea por Hacer"
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado/pendiente la tarea'
}


const argv = require('yargs')
    .command('crear', 'Crea una nueva tarea', {
        descripcion
    })
    .command('actualizar', 'Actuaiza el estado de la tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
}