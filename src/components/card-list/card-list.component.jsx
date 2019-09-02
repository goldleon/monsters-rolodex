import React from 'react'

// Components
import Card from '../card/card.component'

// Styles
import './card-list.styles.css'

const CardList = props => {
  return (
    <div className='card-list'>
      {props.monsters.map(monster => (
        <Card monster={monster} key={monster.id} />
      ))}
    </div>
  )
}

export default CardList
