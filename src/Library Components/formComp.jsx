import { useState } from 'react';
import { addBook, myLibrary } from '../odin_project prototype';

export const FormComp = ({onAddBook}) => {

  const [formData, setFormData] = useState({
    title: '',
    author: '',
    read: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, author, read } = formData;
    const newBook = addBook(title, author, read);
    onAddBook(newBook);
    setFormData({ title: '', author: '', read: false });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flexcol">
        <label>
          Title:
          <input
            onChange={(e) => {
              setFormData({ ...formData, title: e.target.value });
              console.log(formData);
            }}
            className="form-control form-control-lg"
            type="text"
            name="title"
            value={formData.title}
          />
        </label>
        <label>
          Author:
          <input
            onChange={(e) => {
              setFormData({ ...formData, author: e.target.value });
              console.log(formData);
            }}
            className="form-control form-control-lg"
            type="text"
            name="author"
            value={formData.author}
          />
        </label>
        <label>
          Done reading:
          <input
            onChange={(e) => {
              setFormData({ ...formData, read: e.target.checked });
              console.log(formData);
            }}
            className="form-check-input"
            type="checkbox"
            name="read"
            checked={formData.read}
            value={formData.read}
          />
        </label>
        <button type="submit" className="btn btn-light">
          Submit
        </button>
      </form>
    </div>
  );
};
