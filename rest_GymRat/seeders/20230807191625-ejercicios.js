'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    /* INSERTAR UNA LISTA DE OBJETOS (REGISTROS) EN LA TABLA */
    await queryInterface.bulkInsert('ejercicios', [
	     
      /* LA ESTRUCTURA DE LOS OBJETOS JSON (CLAVE-VALOR), DE ACUERDO CON EL MODELO RELACIONADO */
      {
        id: 1,
        nombre:"BenchPress",
        categoriaPRIMARY:"Pecho",
        descripcion:"secundaria" 
      },
      {
        id: 2,
        nombre:"Squad",
        categoriaPRIMARY:"Piernas",
        descripcion:"primaria"
      }
      ], {});
   },

   async down (queryInterface, Sequelize) {
     
     /* ELIMINAR TODOS LOS REGISTROS DE LA TABLA */
     await queryInterface.bulkDelete('ejercicios', null, {});
   }
 };
