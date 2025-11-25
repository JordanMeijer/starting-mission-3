import React from 'react'
import logo from '../../../assets/NavBar/LevelUpWorks-blue.png'
import styles from './StudentHeader.module.css'

export default function StudentHeader(props) {
  return (
   <>
            <nav className={styles.navbar}>
                <img src={logo} alt="logo" />
                {props.title && <div>
                    <div>
                        <p>{props.title}</p>
                        <p>{props.subTitle}</p>
                    </div>
                    <div>{props.dots}</div>
                </div>}
            </nav>
        </>
  )
}
