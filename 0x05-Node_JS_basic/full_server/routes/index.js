import bodyParser from 'body-parser';
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

const setUpRoutes = (app) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.get('/', (req, res) => AppController.getHomepage(req, res));
  app.get('/students', (req, res) =>
    StudentsController.getAllStudents(req, res)
  );
  app.get('/students/:major', (req, res) =>
    AppController.getAllStudentsByMajor(req, res)
  );
};

module.exports = setUpRoutes;
