const descripcion = {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
}
const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
            .command('crear', 'Crear un elemento por hacer', {
                descripcion
        })
            .command('actualizar', 'Actualiza el estado completado de una tarea', {
                descripcion,
                completado
            })
            .command('borrar', 'Borra un elemento de la lista de tareas', {
                descripcion
        })
            .help()
            .argv;

module.exports = {
    argv
}