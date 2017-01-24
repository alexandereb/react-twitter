import React, {Component} from 'react'
import Message from '../Message'
import styles from './styles-list.css'

class MessageList extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className={styles.root}>
        {this.props.messages.map(message => {
          return (
            <Message
              key={message.id}
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
