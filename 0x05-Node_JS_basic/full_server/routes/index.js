import bodyParser from 'body-parser';
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

const setUpRoutes = (app) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.get('/', AppController.getHomepage());
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', AppController.getAllStudentsByMajor);
};

module.exports = setUpRoutes;
