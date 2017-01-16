import React from "react"
import styles from './header.css'

class Header extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <h1 className={styles.logo}>Baby Twitter</h1>
      </header>
    )
  }
}

export default Header
