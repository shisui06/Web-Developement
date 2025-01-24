import React from 'react';
import './AnimeCard.css';

const animeData = [
  {
    id: 1,
    title: "Naruto",
    image: "https://via.placeholder.com/300x400",
    subtitle: "Journey of a young ninja"
  },
  {
    id: 2,
    title: "One Piece",
    image: "https://via.placeholder.com/300x400",
    subtitle: "Pirates adventure"
  },
  {
    id: 3,
    title: "Attack on Titan",
    image: "https://via.placeholder.com/300x400",
    subtitle: "Fight for survival"
  },
  {
    id: 4,
    title: "Death Note",
    image: "https://via.placeholder.com/300x400",
    subtitle: "Psychological thriller"
  },
  {
    id: 5,
    title: "My Hero Academia",
    image: "https://via.placeholder.com/300x400",
    subtitle: "Superhero academy"
  },
  {
    id: 6,
    title: "Dragon Ball",
    image: "https://via.placeholder.com/300x400",
    subtitle: "Martial arts adventure"
  }
];

const AnimeCard = () => {
  return (
    <div className="anime-container">
      <div className="anime-grid">
        {animeData.map((anime) => (
          <div key={anime.id} className="anime-card">
            <img src={anime.image} alt={anime.title} className="anime-image" />
            <h3>{anime.title}</h3>
            <p>{anime.subtitle}</p>
            <button className="view-button">View More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimeCard;