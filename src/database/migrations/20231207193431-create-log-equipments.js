'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.createTable('logequipments', {
        equipment_id: {
          type: Sequelize.INTEGER,
          references: { model: 'equipments', key: 'id' },
          allowNull: false,
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        log_id: {
          type: Sequelize.INTEGER,
          references: { model: 'logs', key: 'id' },
          allowNull: false,
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      })
      await queryInterface.addConstraint('logequipments', {
        fields: ['equipment_id', 'log_id'],
        type: 'primary key',
        name: 'logequipment_pk',
      })
    } catch (error) {
      // console.error('Erro ao criar a tabela:', error.message)
      throw error
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('logequipments')
  },
}