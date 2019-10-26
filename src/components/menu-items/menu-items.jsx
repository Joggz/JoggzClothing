import React from 'react';

import './menu-items.styles.scss';
const menuItem = ({title, imageUrl, size}) => (
    <div style={ {
        backgroundImage: `URL(${imageUrl})`,
    } } className={`${size} menu-item`}>
          <div className="content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
);

export default menuItem;