import React from 'react'
import BotCollectionDatas from '../pages/BotCollectionDatas'

function YourBotArmy({botsArmy}) {
  return (
    <div>
      <h2>Bot Army</h2>
        {botsArmy.map(bot => {
          return (
            <BotCollectionDatas key={bot.id} bot={bot}/>
          )
        })}
    </div>
  )
}

export default YourBotArmy