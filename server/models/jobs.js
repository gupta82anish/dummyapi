'use strict';
module.exports = (sequelize, DataTypes) => {
  var jobs = sequelize.define('candi_jobs', {
    designation: {
        type:DataTypes.STRING,
        allowNull: false
    },
    level:{
        type:DataTypes.STRING,
        allowNull: false
    },
    status:{
        type: DataTypes.STRING,
        allowNull: false
    },
    location:{
        type:DataTypes.STRING,
        allowNull: false
    },
    salary:{
        type:DataTypes.STRING,
        allowNull: false
    },
    skills:{
        type: DataTypes.STRING,
        allowNull: false
    },
    hiringmanager:{
        type: DataTypes.STRING,
        allowNull: false
    },
    experience:{
        type:DataTypes.STRING,
        allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return jobs;
};
