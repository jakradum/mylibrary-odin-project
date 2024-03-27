import React, { useState } from 'react';
import { Book, addBook, showAllBooks, myLibrary, myUpdatedLibrary } from '../odin_project prototype';
import { FormComp } from './formComp';

const BookBox = () => {
  const [books, setBooks] = useState(myLibrary);
  const handleBookAdd = (newBook) => {
    setBooks([...myLibrary, ...myUpdatedLibrary]);
  };

  return (
    <div className="">
      <FormComp onAddBook={handleBookAdd} />
      <section className="grid">
        {books.map((v, i) => (
          <div key={i} className="card" style={{ width: '18rem' }}>
            <img src={''} class="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{v.title}</h5>
              <p className="card-text">
                by <b>{v.author}</b>
              </p>
              <p className="list-group-item">{v.read ? 'Done n Dusted' : 'Yet to read this'}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
export default BookBox;
