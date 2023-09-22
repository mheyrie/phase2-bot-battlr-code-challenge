import React, { useState } from 'react'
import ToggleMode from './ToggleMode'


function BotCollectionDatas({bot, addBot}) {

const [isClicked, setIsClicked] = useState(false)

function handleToggleMode(){
    setIsClicked(!isClicked)
}

  return (
    <div>
        <div className="bot-card">
            <img src={bot.avatar_url} alt={bot.catchphrase}/>
            <div>
                <p>{bot.name}</p>
                <button onClick={handleToggleMode}>View Bot Profile</button>
                 <button>X</button>
            </div>
        </div>
        <ToggleMode isClicked={isClicked} bot={bot} handleToggleMode={handleToggleMode}/>
    </div>
  )
}

export default BotCollectionDatas