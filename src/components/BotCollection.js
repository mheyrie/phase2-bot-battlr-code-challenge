import React from 'react'
import BotCollectionDatas from '../pages/BotCollectionDatas'

function BotCollection({botsList, botsArmy}) {
  return (
    <div>
        <h2>Bots collection:</h2>
        {botsList.map((bots)=> {
           return (
              <BotCollectionDatas key={bots.id} bots={bots}/>
            )
        
        })}
    </div>
  )
}

export default BotCollection