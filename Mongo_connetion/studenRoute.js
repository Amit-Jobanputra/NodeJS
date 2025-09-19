const express = require('express');
const router = express.Router();
const studentController = require('./studentController');
const {createValidator,updateValidator,validate}=require('./studentValidator');

router.get('/index',studentController.index);
router.get('/show/:id',studentController.show);
router.post('/store', (req, res, next) => {
    const result = validate(createValidator, req.body);
    if (!result.success) {
        return res.status(400).send({ message: "Validation errors", errors: result.errors });
    }
    studentController.store(req, res, next);
});
router.put('/update/:id', (req, res, next) => {
    const result = validate(updateValidator, req.body);
    if (!result.success) {
        return res.status(400).send({ message: "Validation errors", errors: result.errors });
    }
    studentController.update(req, res, next);
});
router.delete('/delete/:id', studentController.delete);