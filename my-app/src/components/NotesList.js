import React from 'react';

const NotesList = ({ notes, onDeleteNote }) => (
  <ul>
    {notes.map(({ id, text }) => (
      <li key={id}>
        <button onClick={() => onDeleteNote(id)}>Delete</button>
        <span>{text}</span>
      </li>
    ))}
  </ul>
);

export default NotesList;
