import React, { useState } from 'react';
import { generateId, getNewExpirationTime } from './utilities';

export function AddThoughtForm(props) {
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newThought = {
      id: generateId(),
      text: text,
      expiresAt: getNewExpirationTime()
    };

    if (text.length > 0) {
      props.addThought(newThought);
    }
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit} className="AddThoughtForm">
      <input
        value={text}
        onChange={handleTextChange}
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
      />
      <input type="submit" value="Add" />
    </form>
  );
}
