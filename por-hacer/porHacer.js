const fs = require('fs');

let listadoPorHacer = [];

const guardarBD = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`BD/data.json`, data, (err) => {
        if (err)
            throw new Error('No se pudo grabar', error);
    });

}

const cargarBD = () => {
    try {
        listadoPorHacer = require('../BD/data.json');

    } catch (error) {
        listadoPorHacer = [];
    }
}


const crear = (descripcion) => {

    cargarBD();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarBD();

    return porHacer;
}

const getListado = () => {
    cargarBD();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {

    cargarBD();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarBD();
        return true;

    } else {
        return false;
    }
}

const borrar = (descripcion) => {

    cargarBD();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)

    if (index <= 0) {
        listadoPorHacer.pop(index);
        guardarBD();
        return true;
    } else {
        return false;
    }

    //otra variante
    // let nuevoListado = listadoPorHacer.filter(tarea => {
    //     return tarea.descripcion != descripcion
    // });

    // if (listadoPorHacer.length === nuevoListado.length) {
    //     return false;
    // } else {
    //     listadoPorHacer = nuevoListado;
    //     guardarBD();
    //     return true;
    // }

}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}