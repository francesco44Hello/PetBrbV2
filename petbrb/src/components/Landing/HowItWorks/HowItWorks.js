import React from 'react'
import styles from './HowItWorks.module.css'
import Tile from '../Tile/Tile'
import { LuSearch } from "react-icons/lu";
import { AiOutlineMessage } from "react-icons/ai";
import { LuHeartHandshake } from "react-icons/lu";

const tileContent = [
    {
        text: '1. Search for pet sitters in an area, for where you want, for how much you want, and for when you want',
        icon: LuSearch
    },
    {
        text: '2. Contact your found sitter to get to know them more and how they can help you and your needs for your pets.',
        icon: AiOutlineMessage
    },
    {
        text: '3. Once an agree arrangement is made, you can be free of stress and enjoy your time with your pet!',
        icon: LuHeartHandshake
    },
]

const HowItWorks = () => {
    return (
        <div className={styles.container}>
        {tileContent.map((tile) => <Tile text={tile.text} icon={tile.icon}/>)}

        </div>
    )
}

export default HowItWorks