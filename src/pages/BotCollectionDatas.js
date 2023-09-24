import React, { useState } from 'react'



function BotCollectionDatas({bots}) {

// const [isClicked, setIsClicked] = useState(false)
const{id, name, health,avatar_url,catchphrase, damage, armor,bot_class,created_at,updated_at} = bots


  return (
    <div>
        <div className="bot-card">
            <h2 style={{color:"firebrick"}}>Bot-Name: {name}</h2>
            <img src={avatar_url} alt={catchphrase}/>
            <h4>Bot Info:</h4>
            <span><strong style={{color: "grey"}}>Health:</strong> {health}</span>,  {""}
              <span><strong style={{color: "grey"}}>Damage:</strong> {damage}</span>, <br/>
              <span><strong style={{color: "grey"}}>Armor:</strong> {armor}</span>, {""}
              <span><strong style={{color: "grey"}}>Bot-Class:</strong> {bot_class}</span>, <br/>
              <span><strong style={{color: "grey"}}>Created-Info:</strong> {created_at}</span>, <br/>
              <span><strong style={{color: "grey"}}>Update-Info:</strong> {updated_at}</span>, {""}

        </div>
        
    </div>
  )
}

export default BotCollectionDatas