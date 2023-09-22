import React, { useEffect, useState } from 'react';
import '../App.css';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

function App() {

const[botsList, setBotsList] =useState([])
const[botsArmy, setBotsArmy] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then(res => res.json())
      .then(data => setBotsList(data))
  }, []);

function addBot(id){
  const newBot = botsList.find(bot => bot.id === id)
  setBotsArmy([...botsArmy, newBot])
}





  return (
    <div className="App">
      <YourBotArmy botsList={botsList} botsArmy={botsArmy}/>

      <BotCollection botsList={botsList} botsArmy={botsArmy} addBot={addBot} />   
 
    </div>
  );
}

export default App;
