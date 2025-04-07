import React from 'react'

const Message = ({ message, status }) => {
  return (
    <p className={`${status === 'success' ? 'message success' : status === 'failed' ? 'message failed' : ''}`}>{message}</p>
  )
}

export default Message