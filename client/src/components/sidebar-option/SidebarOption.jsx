import React from 'react';
import './sidebar-option.css';

const SidebarOption = ({title, Icon}) => {
    return (
        <div className="SidebarOption">
            {Icon && <Icon className="sidebarOption__icon" />}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    )
}

export default SidebarOption
