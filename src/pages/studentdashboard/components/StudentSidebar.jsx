import React, { useState } from 'react'
import styles from './StudentSidebar.module.css'

export default function StudentSidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false)

    function toggleSidebar(){
        setIsCollapsed(!isCollapsed)
    }
  return (
    <div className={`${styles.sidebar} ${isCollapsed ? styles.isCollapsed : ""}`}>
        <div>
            <ul>
                <li>test1</li>
                <li>test2</li>
                <li>test3</li>
            </ul>
        </div>
        <button onClick={toggleSidebar}>toggle</button>
    </div>
  )
}
