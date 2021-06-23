import React from 'react'

const TabBtn = ({ onTabClick, label, active }) => {
  return (
    <li onClick={onTabClick}>
      <span className={`tabBtn ${active && 'active'}`}>{label}</span>
    </li>
  )
}

export default TabBtn
