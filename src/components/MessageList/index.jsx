import React, {Component} from 'react'
import Message from '../Message'

class MessageList extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    console.log("sadasdsssssssssssa",this.props)
    return (
      <div>
        {this.props.messages.map(message => {
          return (
            <Message
              text={message.text}
              avatar={message.avatar}
              displayName={message.displayName}
              username={message.username}
              date={message.date}

            />
          )
        })}
      </div>
    )
  }
}

export default MessageList
