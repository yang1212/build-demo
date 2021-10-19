import React, { Component } from 'react'
import Counter from './counter'
import Brother from './brother'

class App extends Component {
  render() {
    return (
      <div>
        <Counter/>
        <Brother/>
      </div>
    )
  }
}

export default App
