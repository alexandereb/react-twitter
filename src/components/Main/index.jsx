import React from 'react'
import MessageList from '../MessageList'

class Main extends React.Component {
  constructor () {
    super()
    this.state = {
      messages: [
        {
          text: 'Mensaje random',
          avatar: 'https://pbs.twimg.com/profile_images/697498449751707648/RCF0dAHw_400x400.jpg',
          displayName: 'Alexander Espinoza',
          username: 'alexandereb',
          date: Date.now()
        }
      ]
    }
  }

  render () {
    return (<MessageList messages={this.state.messages} />)
  }
}

export default Main
