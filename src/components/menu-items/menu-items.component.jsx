import React from 'react';
import './menu-items.styles.scss';

const MenuItems = ({ title, imageUrl, size }) => (
    <div className={`menu-item ${size}`} style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className='content'>
            <div className='title'>{title}</div>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>

)

export default MenuItems;