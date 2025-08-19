const express = require('express');
const Router = express.Router();
const studentController = require('../controllers/studentController');
const { createValidator, updateValidator, validate } = require('../validation');

Router.get('/', studentController.index);
Router.get('/:id', studentController.show);
Router.post('/Amit', (req, res,next) => {
    const { error, value } = validate(createValidator, req.body);
    if (error) {
        return res.status(400).json({ success: false, message: error.message });
    }
    studentController.create(req, res);
});

//Router.put('/update/:id', updateValidator, studentController.update,studentController.update);
Router.delete('/delete/:id', studentController.delete);

module.exports = Router;