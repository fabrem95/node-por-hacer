const fs = require('fs')
const colors = require('colors')

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer)

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error ('No se pudo grabar', err)
    })
}

const cargarDB = () => {

    listadoPorHacer = require('../db/data.json')

}

const crear = (descripcion) => {

    try {
        cargarDB()
    } catch (error) {
        listadoPorHacer = []
    }

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);

    guardarDB()

    return porHacer
}

const getListado = () => {

    cargarDB();
    return listadoPorHacer;
}

const actualizarEstado = (descripcion, completado = true) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)

    if (index >= 0) {
        listadoPorHacer[index].completado = completado
        guardarDB();
        return true;
    } else {
        return false
    }
}

const borrar = (descripcion) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)

    if (index >= 0) {
        listadoPorHacer.splice(index, 1)
        guardarDB();
        return true;
    } else {
        return false
    }
}

module.exports = {
    crear,
    getListado,
    actualizarEstado,
    borrar
}