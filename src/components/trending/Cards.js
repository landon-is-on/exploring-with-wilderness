import React from 'react';
import '../trending/Cards.css';
import CardItem from './CardItem';
import italy from '../../pictures/italy.jpg';
import barca from '../../pictures/barca.png';
import wales from '../../pictures/wales.png'; 
import park from '../../pictures/park.png';
import beach from '../../pictures/beach.jpg';
function Cards() {
  return (
    <div className='cards'>
      <h1>Featured Locations</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={italy}
              text='Explore the beautiful canals of Italy through a languorous boat'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src={barca}
              text='Travel through the captal of spain on a Private cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={wales}
              text='Set Sail and vist the casles of wales '
              label='Mystery'
              path='/services'
            />
            <CardItem
              src={park}
              text='Head over to washingion to sight see in the greatest state park'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src={beach}
              text='Spend the night in twilands softest sand beach'
              label='Luxury'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}


export default Cards;