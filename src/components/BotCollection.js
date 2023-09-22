import React from 'react'
import BotCollectionDatas from '../pages/BotCollectionDatas'

function BotCollection({botsList, botsArmy}) {
  return (
    <div>
        <h2>Bots collection:</h2>
        {botsList.map((bot)=> {
          if (!botsArmy.includes(bot)){
            return (
              <BotCollectionDatas key={bot.id} bot={bot}/>
            )
          } else return null
        })}
    </div>
  )
}

export default BotCollection