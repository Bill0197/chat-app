import React from 'react'
import closeIcon from '../icons/closeIcon.png'
import onlineIcon from '../icons/onlineIcon.png'

export default function InfoBar({ room }) {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img className="onlineIcon" src={onlineIcon} alt="img" />
        <h3>{room}</h3>
      </div>
      <div className="rightInnerContainer">
        <a href="/">
          {' '}
          <img src={closeIcon} alt="img" />{' '}
        </a>
      </div>
    </div>
  )
}
