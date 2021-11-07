import React from 'react';
import './header.css';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';

const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <SearchIcon />
                <input type="text" placeholder="Search for Artists, Songs" />
            </div>
            <div className="header__right">
                <Avatar src="https://media-exp1.licdn.com/dms/image/C4E03AQE40wBB7lR8MA/profile-displayphoto-shrink_100_100/0/1624549242833?e=1642032000&v=beta&t=AVr5L0w_GblYDLUH1LnhQHkqHc41lKh5P6__cNO1czg" />
                <h4>Mark Dean</h4>
            </div>
        </div>
    )
}

export default Header;