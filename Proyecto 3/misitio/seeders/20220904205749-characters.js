'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    for (let i = 0; i <30; i++) {  
      await queryInterface.bulkInsert('Characters', [{  
          nombre: 'Personaje '+i,  
          estatus: 'Vivo',
          especie: 'Humano',
          genero: 'Femenino',
          imagen: 'img1.jpg',
          createdAt: new Date(),  
          updatedAt: new Date()  
      }], {});  
   } 
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Productos', null, {});  
  }
};
