import React from 'react';

export const myLibrary = [{ title: '3 mistakes of your life', author: 'bhetan chagat', read: true }];
export const myUpdatedLibrary = [];

export class Book {
  constructor(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = Boolean(read);
  }
}

export function addBook(title, author, read) {
  let newBook = new Book(title, author, read);
  myUpdatedLibrary.push(newBook);
  return newBook;
}

export const showAllBooks = (myLibrary) => {
  return myLibrary.map((book) => {
    return book.title;
  });
};
