import React from 'react'
import Container from '../Container/Container'
import Checkbox from './Checkbox'
import styles from './selectAll.module.css'

export default function IndeterminateCheckbox() {
  return (
    <Container textAlign="initial">
      <ul className={styles.list}>
        <li>
          <Checkbox
            value="all-selected"
            id="all-selected"
            label="Select all"
            name="select-all"
            indeterminate={true}
            checked={true}
          />
        </li>
        <li className={styles.listItem}>
          <Checkbox
            htmlFor="email"
            value="email"
            id="email"
            label="Email"
            name="contact"
            checked={false}
          />
        </li>
        <li className={styles.listItem}>
          <Checkbox
            htmlFor="sms"
            value="sms"
            id="sms"
            label="SMS"
            name="contact"
            checked={false}
          />
        </li>
        <li className={styles.listItem}>
          <Checkbox
            htmlFor="phone"
            value="phone"
            id="phone"
            label="Phone"
            name="contact"
            checked={true}
          />
        </li>
      </ul>
    </Container>
  )
}
