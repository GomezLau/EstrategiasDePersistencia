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


/* crea usuario*/
sequelize.sync()
  .then(() => User.create({
    firstName: 'Pedro',
    lastName: 'Rodriguez'
  }))
  .then(jane => {
    console.log(jane.toJSON());
      //actualiza registro
    User.update({ firstName: "Ramon" }, {
      where: {
        lastName: 'Rodriguez'
      }
    });
}).then(() => {
  console.log("Done");
});


