import React from 'react'
import styles from './TopBar.module.css'
import Link from 'next/link'

const TopBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <h1>Logo</h1>
            </div>
            <div className={styles.rightContainer}>
                <Link href='/become-a-sitter'>Become a sitter</Link>
                <button className={styles.button}>Sign Up</button>
                <button className={styles.button}>Sign In</button>
            </div>
        </div>
    )
}

export default TopBar