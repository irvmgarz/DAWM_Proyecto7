'use strict';

const { now } = require('sequelize/types/utils');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    /* INSERTAR UNA LISTA DE OBJETOS (REGISTROS) EN LA TABLA */
    await queryInterface.bulkInsert('registro_entrenamiento', [
	     
      /* LA ESTRUCTURA DE LOS OBJETOS JSON (CLAVE-VALOR), DE ACUERDO CON EL MODELO RELACIONADO */
      {
        id: 1,
        fecha_y_hora:"2023-08-18 14:20:14",
        ejercicio_id:1,
        usuario_id:1,
        repeticiones:5,
        peso:23,
        comentario:"holi" 
      },
      {
        id: 2,
        fecha_y_hora:"2023-09-18 14:20:14",
        ejercicio_id:2,
        usuario_id:2,
        repeticiones:12,
        peso:23,
        comentario:"holi" 
      }
      ], {});
   },

   async down (queryInterface, Sequelize) {
     
     /* ELIMINAR TODOS LOS REGISTROS DE LA TABLA */
     await queryInterface.bulkDelete('registro_entrenamiento', null, {});
   }
 };
