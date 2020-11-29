import React from 'react';
import './SidebarRow.css';

//<Icon className="sidebarRow__icon"></Icon>
function SidebarRow({ selected, Icon, title}) {
    
    return (
       
        <div className={`sidebarRow ${selected && "seleted"}`}>
       
            <h2 className="sidebarRow__title">{title}</h2>
        </div>
    )
}

export default SidebarRow
