'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('results', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false
      },
      repository_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      findings: {
        type: Sequelize.JSONB
      },
      queued_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      scanning_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      finished_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('results')
  }
}
