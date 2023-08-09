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
        fecha_y_hora:nsoe,
        ejercicio_id:Pecho,
        usuario_id:secundaria,
        repeticiones:2,
        peso:23,
        comentario:"holi" 
      },
      {
        id: 2,
        fecha_y_hora:BenchPress,
        ejercicio_id:Pecho,
        usuario_id:secundaria,
        repeticiones:2,
        peso:23,
        comentario:"holi" 
      }
      ], {});
   },

   async down (queryInterface, Sequelize) {
     
     /* ELIMINAR TODOS LOS REGISTROS DE LA TABLA */
     await queryInterface.bulkDelete('<registro_entrenamiento', null, {});
   }
 };
