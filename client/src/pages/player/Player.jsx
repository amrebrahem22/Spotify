import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Body from '../../components/body/Body'
import Footer from '../../components/footer/Footer'
import './player.css'

const Player = ({spotify}) => {
    return (
        <div className="player">
            <div className="player-main">
                <Sidebar />
                <Body spotify={spotify} />
            </div>
            <Footer spotify={spotify} />
        </div>
    )
}

export default Player
