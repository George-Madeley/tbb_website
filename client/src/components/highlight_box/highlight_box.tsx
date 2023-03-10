import React from 'react';

import './highlight_box.css';

import team_img_1 from '../../images/temp_team_1.jpg';
import team_img_2 from '../../images/temp_team_2.jpg';
import team_img_3 from '../../images/temp_team_3.jpg';

import { IHighlightCard } from '../../types';

export default function HighlightBox(props: {cards: IHighlightCard[]}) {

  const images = [team_img_1, team_img_2, team_img_3];
  const cardWidth = `${90 / props.cards.length}%`;

  return (
    <div className='highlight-box'>
      <div className='card-grid'>
        {
          props.cards.map((card: IHighlightCard, index: number) => {
            return (
              <a key={index} id={`${card.id}-card`} className='card' href={card.href} style={{ width: cardWidth }}>
                <img src={images[index]} alt={card.alt} />
                <div className='content'>
                  <h2>{card.title}</h2>
                  <p>{card.text}</p>
                </div>
              </a>
            )
          })
        }
      </div>
    </div>
  );
}