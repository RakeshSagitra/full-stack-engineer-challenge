'use strict'

module.exports = (sequelize, DataTypes) => {
  const Result = sequelize.define('results', {
    status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    repositoryName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    findings: {
      type: DataTypes.JSONB
    },
    queuedAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    scanningAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    finishedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {})
  Result.associate = function (models) {
    // associations can be defined here
  }
  return Result
}
