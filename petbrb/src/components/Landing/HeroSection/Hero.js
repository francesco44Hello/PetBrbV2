import React from 'react'
import styles from './Hero.module.css'
import Form from '../Form/Form'
import HeroText from '../HeroText/HeroText'

const Hero = () => {
    return (
        <div className={styles.container}>
            <div className={styles.overlay}>
                <div className={styles.mainContentSection}>
                    <Form/>
<HeroText/>
                </div>
            </div>
        </div>
    )
}

export default Hero