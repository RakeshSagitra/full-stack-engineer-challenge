import { sequelize } from './models'

const dbUtil = {
  query: async queryString => sequelize.query(queryString,
    { raw: true, type: sequelize.QueryTypes.SELECT })
}

module.exports = dbUtil
