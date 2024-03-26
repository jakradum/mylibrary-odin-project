import { useState } from 'react';
import { addBook } from '../functions';

export const FormComp = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    read: false,
  });
  const handleSubmit = (e) => {
   e.preventDefault();
    addBook(formData.title,formData.author,formData.read)
    setFormData({
      title: '',
      author: '',
      read: false,
    });
  };

  return (
    <form>
      <label>
        Title:
        <input type="text" name="title" onChange={handleSubmit} />
      </label>
      <label>
        Author:
        <input type="text" name="author" onChange={handleSubmit} />
      </label>
      <label>
        read this yet?:
        <input type="checkbox" name="author"  onChange={handleSubmit} />
      </label>
      <button onSubmit={handleSubmit}>Submit</button>
    </form>
  );
};
