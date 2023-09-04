const Sequelize = require('sequelize');

const sequelize = new Sequelize('prueba', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  //port:3306
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


  const Model = Sequelize.Model;
  class User extends Model {}
  User.init({
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING
    }
  }, {
    sequelize,
    modelName: 'user'
  });

//actualiza varios registros
User.update({ firstName: "Pepe" }, {
    where: {
        lastName: 'Gonzales'
    }
}).then(() => {
    console.log("Done");
});

User.update({ firstName: "Facundo" }, {
    where: {
        firstName: 'Jose'
        }
}).then(() => {
    console.log("Done");
});

User.update({ lastName: "Martinez" }, {
    where: {
        lastName: 'Perez'
    }
}).then(() => {
    console.log("Done");
});

