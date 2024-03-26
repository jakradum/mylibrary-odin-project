import React from 'react';

export const myLibrary = [];

export class Book {
  constructor(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = Boolean(read);
  }
}

export function addBook(title, author, read) {
  let newBook = new Book(title, author, read);
  myLibrary.push(newBook);
}

addBook('3 mistakes of my life', 'Bhetan Chagat', false);

export const showAllBooks = (myLibrary) => {
  return myLibrary.map((book) => {
    return book.title;
  });
};
