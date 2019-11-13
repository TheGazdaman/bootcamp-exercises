import React, { useState, useEffect } from "react";

const App = () => {
  const [characters, setCharacters] = useState();
  //const [film, setFilm] = useState();

  useEffect(() => {
    fetch("https://swapi.co/api/people/")
      .then(res => res.json())
      .then(chars => {
        setCharacters(chars.results);
      })
      .catch(err => {
        console.log("err", err);
      });
  }, []); // empty array equivalent of componentDidMount


  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
    
      {characters && characters.map(character => {
        
        return (
          
            <div style={{display: 'flex', flexDirection: 'column'}}>
            
            <h2>{character.name}</h2>
            
            {character.films.map((filmUrl, index) => {
            
            return <a href={filmUrl}>{`film ${index}`}</a>
            })}
        
            </div>
        )
    })}

            {/* <p>{film && film.title}</p> */}
    </div>
  )
};

export default App;