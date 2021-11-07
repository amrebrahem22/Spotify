import React from 'react'
import './sidebar.css'
import logoImg from '../../images/dark-logo.jpg';
import SidebarOption from '../sidebar-option/SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useStateValue } from "../../StateProvider";


const Sidebar = () => {
    const [{playlists}, dispatch] = useStateValue();

    return (
        <div className="sidebar">
            <img src={logoImg} alt="Logo" className="sidebar__logo" />

            <SidebarOption Icon={HomeIcon} title="Home" />
            <SidebarOption Icon={SearchIcon} title="Search" />
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />

            <br />
            <strong className="sidebar__title">Playlists</strong>
            <hr />
            {playlists?.items?.map((playlist, i) => (
                <SidebarOption key={i} title={playlist.name} />
            ))}
        </div>
    )
}

export default Sidebar
