import React from 'react'

function ToggleMode({bot, isClicked, handleToggleMode}) {

if (!isClicked) return null

  return (
    <div>
        <div className="mode-header">
            <ul>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Health: {bot.health}</p>
            <p>Armor: {bot.armor}</p>
            <p>Bot-Class: {bot.bot_class}</p>
            <p>Created-At: {bot.created_at}</p>
            </ul>
          </div>
    </div>
  )
}

export default ToggleMode