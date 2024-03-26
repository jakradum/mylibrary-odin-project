import React from 'react';
import { Book, addBook, showAllBooks, myLibrary } from '../functions';

const BookBox = () => {
  return (
    <section className='book'>
      {myLibrary.map((v, i) => (
        <article key={i}>
          <h2>{v.title}</h2>
          <h4>by {v.author}</h4>
          {v.read ? <p>Read</p> : <p>Not read this one yet</p>}
        </article>
      ))}
    </section>
  );
};
export default BookBox;