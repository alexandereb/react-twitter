import React from "react"
import Message from "../Message"

class MessageList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ul>
        {this.props.messages.map(message => {
          return (
            <Message text={message.text}/>
          )
        })}
      </ul>
    )
  }
}

export default MessageList
