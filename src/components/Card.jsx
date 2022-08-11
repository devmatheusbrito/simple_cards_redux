import './Card.css'
import React from 'react'

function getCor(props){
  if(props.red) return "Red"
    if(props.green) return "Green"
      if(props.blue) return "Blue"
        if(props.purple) return "Purple"
  return ""
}

export default props => {
  return (
    <div className={`Card ${getCor(props)}`}>
      <div className="Header">
        <span className="Title">{props.title}</span>
      </div>
      <div className="Content">
        {props.children}
      </div>
    </div>
  )
}
