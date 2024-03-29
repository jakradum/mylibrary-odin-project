import React from 'react';

export const myLibrary = [
  { title: '3 mistakes of your life', author: 'bhetan chagat', read: true },
  { title: 'Pife of Lie', author: 'Mann Yartel', read: false },
  { title: 'Grated Expectations', author: 'Charcuterie Dickens', read: false },
];
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
  myLibrary.push(newBook);
  return newBook;
}

export function deleteBook(index) {
  const bookToDelete = myLibrary.find((v, i) => i === index);
  if (index < 3) {
  } else {
    return myLibrary.splice(myLibrary.indexOf(bookToDelete), 1);
  }
}

export function changeRead(index) {
  console.log(myLibrary[index].read);
  myLibrary[index].read = !myLibrary[index].read;
  console.log(myLibrary[index].read);
}
