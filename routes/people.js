import express from 'express';
import Person from '../models/Person.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const persons = await Person.find();
    res.json(persons);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const person = await Person.findById(id);
    res.json(person);
  } catch (error) {}
  next();
});

router.post('/', async (req, res, next) => {
  try {
    const person = await Person.create(req.body);
    res.json(person);
  } catch (error) {
    next(error);
  }
});

router.patch('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const person = await Person.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(person);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const person = await Person.findByIdAndDelete(id);
    if (person) {
      res.sendStatus(200);
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    next(error);
  }
});

export default router;
