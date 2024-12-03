import React, { useEffect, useState } from 'react';
// import axios from 'axios';

const RandomUsers = () => {
  
  const url = 'https://randomuser.me/api/?results=10';
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setAuthors(data.results);
      });
  }, []);

  return (

      <div className='mt-4 ml-3'>
        {/* <h1>Listes d'utilisateur</h1> */}
          <div>
          <ul>
      {authors.map((author, index) => (
        <li key={index}>
          <img src={author.picture.medium} />
          <span>{author.name.first} {author.name.last}</span>
        </li>
      ))}
    </ul>
          </div>
      </div>
  );
};

export default RandomUsers;