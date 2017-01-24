import React from 'react'
import uuid from 'uuid'
import MessageList from '../MessageList'
import InputText from '../InputText'
import ProfileBar from '../ProfileBar'

class Main extends React.Component {
  constructor () {
    super()
    this.state = {
      openText: false,
      messages: [
        {
          id: uuid.v4(),
          text: 'Mensaje random',
          avatar: 'https://pbs.twimg.com/profile_images/697498449751707648/RCF0dAHw_400x400.jpg',
          displayName: 'Alexander Espinoza',
          username: 'alexandereb',
          date: Date.now()
        },
        {
          id: uuid.v4(),
          text: 'Mensaje numero 2',
          avatar: 'https://pbs.twimg.com/profile_images/697498449751707648/RCF0dAHw_400x400.jpg',
          displayName: 'Alexander Espinoza',
          username: 'alexandereb',
          date: Date.now() - 1800000
        }
      ]
    }
  }

  handleOpenText (event) {
    event.preventDefault()
    this.setState({ openText: true})
  }

  renderOpenText () {
    if (this.state.openText) {
      return <InputText />
    }
  }

  render () {
    return (
      <div>
        <ProfileBar
          picture={this.props.user.photoURL}
          username={this.props.user.email.split("@")[0]}
          onOpenText={this.handleOpenText}
        />
      {this.renderOpenText()}
        <MessageList messages={this.state.messages} />
      </div>
    )
  }
}

export default Main
