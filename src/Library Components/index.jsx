import React, { useState } from 'react';
import {
  Book,
  addBook,
  showAllBooks,
  myLibrary,
  myUpdatedLibrary,
  deleteBook,
  changeRead,
} from '../odin_project prototype';
import { FormComp } from './formComp';
import { Modal } from '../Modal';

const BookBox = () => {
  const [books, setBooks] = useState(myLibrary);
  const [error, setError] = useState(false);
  const handleBookAdd = (newBook) => {
    setBooks([...myLibrary]);
  };
  const [formState, setFormState] = useState(false);
  const handleShowForm = () => {
    setFormState(!formState);
  };

  const handleDeletion = (i) => {
    deleteBook(i);
    if (i < 3) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    } else {
      setBooks([...myLibrary]);
    }
  };
  const [read, setRead] = useState(false);
  function handleRead(index) {
    changeRead(index);
    setRead(!read);
  }

  const modalProps = { title: 'Not allowed', message: 'You can only delete books added by you', b2: 'Got it' };

  return (
    <div className="">
      <button className="btn btn-primary" onClick={handleShowForm}>
        {formState ? 'Hide Form' : 'Add Books'}
      </button>
      {formState ? <FormComp onAddBook={handleBookAdd} /> : <div></div>}
      <h4>Collection</h4>
      <div className="errorText">{error && <p>You can only delete books added by you</p>}</div>
      <section className="grid">
        {myLibrary.map((v, i) => (
          <div key={i} className="card" style={{ width: '18rem' }}>
            <button onClick={() => handleDeletion(i)} type="button" className="close" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <img src={''} class="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{v.title}</h5>
              <p className="card-text">
                by <b>{v.author}</b>
              </p>
              <p className="list-group-item">{v.read ? `Done n' Dusted ✅` : 'Yet to read this ☕️'}</p>
              <label>
                Read
                <input checked={v.read} onClick={() => handleRead(i)} type="checkbox"></input>
              </label>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
export default BookBox;
