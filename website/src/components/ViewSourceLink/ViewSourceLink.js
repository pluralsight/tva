import React from 'react'
import { getButtonProps, getIconProps } from '@pluralsight/headless-styles'
import { GithubIcon } from '@pluralsight/icons'
import styles from './ViewSourceLink.module.css'

function isGithubType(type) {
  return type === 'github'
}

const npmIcon = (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 576 512"
    focusable="false"
    height="2rem"
    width="2rem"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M288 288h-32v-64h32v64zm288-128v192H288v32H160v-32H0V160h576zm-416 32H32v128h64v-96h32v96h32V192zm160 0H192v160h64v-32h64V192zm224 0H352v128h64v-96h32v96h32v-96h32v96h32V192z"></path>
  </svg>
)

const psBtn = getButtonProps({
  kind: 'weak',
  size: 's',
}).className
const iconProps = getIconProps({
  size: 's',
})

export default function ViewSourceLink(props) {
  const isGHIcon = isGithubType(props.icon)
  const iconClass = isGHIcon ? styles.icon : styles.npmIcon
  const icon = isGHIcon ? <GithubIcon {...iconProps} /> : npmIcon

  return (
    <a
      className={`${psBtn} ${styles.link}`}
      href={props.href}
      rel="noopener"
      target="_blank"
    >
      <span className={iconClass}>{icon}</span> {props.children}
    </a>
  )
}
