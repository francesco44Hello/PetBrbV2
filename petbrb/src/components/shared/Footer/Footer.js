import React from 'react'
import styles from './Footer.module.css'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className={styles.container}>
            <Link href='/get-in-touch'>Get in touch</Link>
            <Link href='/'>PetBrb</Link>
            <Link href='/get-in-touch'>Built with </Link>
        </div>
    )
}

export default Footer