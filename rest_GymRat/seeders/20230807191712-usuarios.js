'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    /* INSERTAR UNA LISTA DE OBJETOS (REGISTROS) EN LA TABLA */
    await queryInterface.bulkInsert('usuarios', [
	     
      /* LA ESTRUCTURA DE LOS OBJETOS JSON (CLAVE-VALOR), DE ACUERDO CON EL MODELO RELACIONADO */
      {
        id: 1,
        nombre_usuario:"Irving",
        correo_electronico:"irvingmacias@hotmail.es",
        contrasena:"holi" 
      },
      {
        id: 2,
        nombre_usuario:"Diego",
        correo_electronico:"diegom@hotmail.com",
        contrasena:"holi2" 
      }
      ], {});
   },

   async down (queryInterface, Sequelize) {
     
     /* ELIMINAR TODOS LOS REGISTROS DE LA TABLA */
     await queryInterface.bulkDelete('usuarios', null, {});
   }
 };
