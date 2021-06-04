import React from 'react'

import onlineIcon from '../icons/onlineIcon.png'

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>
        Open up a new room and ask others to join with the same room name. 
       <br/> There, you
        can chat with your friends realtime!
      </h1>
    </div>
    {users ? (
      <div>
        <h3 style={{ borderBottom: '2px solid #ddd' }}>
          Currenly Active users:
        </h3>
        <div className="activeContainer">
          <h2>
            {users.map(({ name }, index) => (
              <div key={name} className="activeItem">
                {index + 1}) &nbsp; &nbsp; {name}
                <img alt="Online Icon" src={onlineIcon} />
              </div>
            ))}
          </h2>
        </div>
      </div>
    ) : null}
  </div>
)

export default TextContainer
