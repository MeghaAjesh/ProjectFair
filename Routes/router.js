// 1 Import express
const express = require('express')

// 2 Import controllers and middleware
const userController = require('../Controllers/userController')
const jwtMiddlewares = require('../Middlewares/jwtMidddlewares'); // Fixed spelling
const projectController = require('../Controllers/projectController');
const multerMiddleware = require('../Middlewares/multerMiddleware'); 

// 3 Use the router inside express to implement routes
const router = express.Router();

// 4 Define the route for register
router.post('/api/register',userController.registerAPI)

// 5 Define the route for login
router.post('/api/login',userController.loginAPI)

// 6 Define the route for addProject
router.post('/api/addProject',jwtMiddlewares,multerMiddleware.single('projectImg'),projectController.addProjectAPI)
  // 7 Define the route for getalluserprojects
router.get('/api/getAllUserProject',jwtMiddlewares,projectController.getAllUserProjectAPI)
//8
router.get('/api/getHomeProject',projectController.getHomeProjectAPI)

//
router.get('/api/getAUserProject',jwtMiddlewares,projectController.getAUserProjectAPI)
// edit
router.put('/api/editProject/:projectId',jwtMiddlewares,multerMiddleware.single('projectImg'),projectController.editProjectAPI)
//delete
router.delete('/api/deleteProject/:projectId',jwtMiddlewares,projectController.deleteProjectAPI)
// 9 Export the router
module.exports=router
