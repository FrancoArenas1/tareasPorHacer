const fs = require('fs');


let listadoPorHacer = [];


const crear = (descripcion) => {

    cargarDb();
    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);
    let guardar = guardarDb();
    return guardar;

}


const listarTareas = () => {
    cargarDb();
    return listadoPorHacer;


}

const cargarDb = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }


}

const borrarRegistro = (descripcion) => {
    cargarDb();
    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    if (nuevoListado === listadoPorHacer) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDb();
        return true;
    }


}

const actualizarDb = (descripcion, completado) => {
    cargarDb();
    valueIndex = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (valueIndex >= 0) {
        listadoPorHacer[valueIndex].completado = completado;
        listadoPorHacer[valueIndex].descripcion = descripcion;
        guardarDb();
        return true;
    } else {
        return false;
    }
}


const guardarDb = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error("Error al grabar en la db");
    });
    return 'Grabado exitoso';
}

module.exports = {
    crear,
    listarTareas,
    actualizarDb,
    borrarRegistro
}