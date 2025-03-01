import React from 'react';
import Card from './Card';
import './Board.css';
import { animeEvents } from '../data/animeData';

const Board = () => {
  return (
    <div className="board">
      {animeEvents.map((event) => (
        <Card 
          key={event.id}
          title={event.title}
          date={event.date}
          location={event.location}
          description={event.description}
          image={event.image}
          link={event.link}
          category={event.category}
        />
      ))}
    </div>
  );
};

export default Board;
