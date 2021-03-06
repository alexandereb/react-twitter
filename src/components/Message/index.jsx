import React from 'react'
import styles from './message.css'
import moment from 'moment'

class Message extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    moment.locale("es")
    let dateFormat = moment(this.props.date).fromNow()

    return (
      <div className={styles.root}>
        <div className={styles.user}>
          <figure>
            <img className={styles.avatar} src={this.props.avatar} />
          </figure>
          <span className={styles.displayName}> {this.props.displayName} </span>
          <span className={styles.username}> {this.props.username} </span>
          <span className={styles.date}> {dateFormat} </span>
        </div>
        <h3>{this.props.text}</h3>
        <div className={styles.buttons}>
          <div className={styles.icon}> <span className={'fa fa-reply'}></span> </div>
          <div className={styles.icon}> <span className={'fa fa-retweet'}></span></div>
          <div className={styles.icon}> <span className={'fa fa-star'}></span></div>
        </div>
      </div>
    )
  }
}
export default Message
