'use strict'

import fs from 'fs'
import path from 'path'
import Sequelize from 'sequelize'
import _ from 'lodash'
import config from '../../../config/app'

const basename = path.basename(__filename)
const db = {}

const sequelize = new Sequelize(config.get('sequelize.name'), config.get('sequelize.user'), config.get('sequelize.password'), {
  host: config.get('sequelize.host'),
  dialect: 'postgres',
  define: {
    underscored: true
  }
})

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file))
    db[model.name] = model
  })

const models = {}

Object.keys(db).forEach(modelName => {
  //models[_.capitalize(_.camelCase(modelName))] = db[modelName]
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
