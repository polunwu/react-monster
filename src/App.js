import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [
        {
          name: 'Frankenstein',
          id: 'qwe1',
        },
        {
          name: 'Dracula',
          id: 'fgfe',
        },
        {
          name: 'Zombie',
          id: 'q341',
        },
      ]
    }
  }

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map(monster => {
            return <h1 key={ monster.id }>{ monster.name }</h1>
          })
        }
      </div>
    )
  }
}

export default App;
