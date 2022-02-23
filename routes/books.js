import express from "express";
import { nanoid } from "nanoid";
const router = express.Router();
let books = [
  {
    id: "0",
    title: "Express for dummies",
    description: "How to train crash test dummies to code",
  },
  {
    id: "1",
    title: "Harry Potter – Complete Edition",
    description: "All seven books in one",
  },
];
/**
 * Create a book
 */
router.post("/", (req, res, next) => {
  const newBook = req.body;
  newBook.id = nanoid();
  books.push(newBook);
  res.json({
    insertedAt: newBook.id,
  });
});
/**
 * Read (all books)
 */
router.get("/", (req, res, next) => {
  res.json(books);
});
/**
 * Read (a single book)
 */
router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  const book = books.find((book) => book.id === id);
  if (book) {
    res.json(book);
  } else {
    next("Dieses Buch wurde nicht gefunden.");
  }
});
/**
 * Update a book
 */
router.patch("/:id", (req, res, next) => {
  const { id } = req.params;
  const bookIndex = books.findIndex((book) => book.id === id);
  books[bookIndex] = {
    ...books[bookIndex],
    ...req.body,
    id,
  };
  res.status(200).json({
    updatedId: id,
  });
});
/**
 * Delete a book
 */
router.delete("/:id", (req, res, next) => {
  const { id } = req.params;
  books = books.filter((book) => book.id !== id);
  res.status(200).json({
    deletedId: id,
  });
});
export default router;
