import React from 'react';

import './menu-items.styles.scss';
import { withRouter } from 'react-router-dom';

const menuItem = ({title, imageUrl, size, history, linkUrl, match}) => (
  
    <div  className={`${size} menu-item`} onClick = {() => history.push(`${match.url}${linkUrl }`)}>
         <div style={{
        backgroundImage: `URL(${imageUrl})`,
    }} className='background-image'/>
          <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
);

export default withRouter(menuItem); 